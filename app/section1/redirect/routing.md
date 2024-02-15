* 최소 실행시에는 SSR 방식
* redirect는 CSR 방식으로 빠르게 이동.
    * js 파일만 읽어오고 json으로 처리(html 파일은 가져오지 않음.)
    * <Link/> 덕분
* next는 lazy한 방식으로 데이터를 가져옴
    * 불필요한 네트워크 요청을 지양