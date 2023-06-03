# React Query 작동원리 공부

1. useQuery의 4개의 QueryClient, QueryCache, Query, QueryObserver 객체를 분석하자.  
   (Observer Pattern을 사용한다.)

> QueryClient -> QueryCache <-> Query <-> QueryObserver -> QueryClient
>
> ( A <- B 는 A가 B를 소유한다는 의미이다.)

2. Closure를 사용하며 Singleton Pattern으로 관리되는 notifyManager 객체를 분석하자.  
   (위의 4개의 객체에 Event를 전달하는 역할)

3. batch를 사용하여 여러 개의 작업을 하나의 작업으로 묶어서 처리하는 것을 분석하자.

4. staleTime과 cacheTime을 분석하자.
