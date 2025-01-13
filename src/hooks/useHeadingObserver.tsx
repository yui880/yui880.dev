import { useEffect, useState, useCallback } from 'react';

const useHeadingsObserver = (query: string) => {
  const [activeIdList, setActiveIdList] = useState<string[]>([]);
  const [tempId, setTempId] = useState(''); // 마지막으로 본 heading의 id 저장

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    // entries : 현재 감시중인 요소에 대한 정보들
    entries.forEach(entry => {
      const targetId = `#${entry.target.id}`;

      if (entry.isIntersecting) {
        // 요소가 화면에 보인다면 activeList에 추가
        setActiveIdList(prev => {
          if (!prev.includes(targetId)) {
            return [...prev, targetId];
          }
          return prev;
        });
        setTempId('');
      } else {
        // 요소가 화면에 보이지 않는다면 activeList에서 제거
        setActiveIdList(prev => {
          if (prev.length === 1) {
            setTempId(targetId);
          }
          return prev.filter(elem => elem !== targetId);
        });
      }
    });
  }, []);

  useEffect(() => {
    const scrollMarginOption = { rootMargin: '-32px 0px -80px 0px' };
    const observer = new IntersectionObserver(handleObserver, scrollMarginOption);

    // 쿼리로 전달된 heading을 포함한 요소를 찾는다.
    const elements = document.querySelectorAll(query);
    // 찾은 요소를 옵저버에 등록하여 감시한다.
    elements.forEach(elem => observer.observe(elem));

    return () => observer.disconnect();
  }, [query, handleObserver]);

  return [...activeIdList, tempId];
};

export default useHeadingsObserver;
