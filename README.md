## Contents
0. [Production](#Production)
1. [기획](#기획)
2. [Skills](#skills)
3. [Git Convention](#git-convention)

## Production
### List(DeskTop)
![image](https://github.com/Legitgoons/eCommerce-ourHome/assets/101088491/048b7752-981e-431b-92dd-dca7bbd364de)
### List(Mobile)
![image](https://github.com/Legitgoons/eCommerce-ourHome/assets/101088491/4b28c5f3-a609-4bde-b320-50ec697d87cd)
### Cart
![image](https://github.com/Legitgoons/eCommerce-ourHome/assets/101088491/8389a25c-dfbc-49b4-8385-c98f6b99ea4e)

## 기획
각각 Notion과 Figma를 통해서 진행
### 기능 명세서 [Notion](https://western-lumber-687.notion.site/7906459e6b1f4b80acbf0ed34ea64ec6?pvs=4)
![image](https://github.com/Legitgoons/eCommerce-ourHome/assets/101088491/64c079b0-ef20-4e8e-a9ca-c00c54855f9a)

### 화면 기획 [Figma](https://www.figma.com/file/0xezUdb3I0t8GjD7C7KDWt/%EC%95%84%EC%9B%8C%ED%99%88-%EA%B3%BC%EC%A0%9C%ED%85%8C%EC%8A%A4%ED%8A%B8-MockUp?type=design&node-id=0%3A1&mode=design&t=2T2eZ9kDGt4qRN7W-1)
![image](https://github.com/Legitgoons/eCommerce-ourHome/assets/101088491/6e7123b4-e673-4c2f-b8c8-ac72ca19e729)
## Skills
상세 사항은 [Notion](https://western-lumber-687.notion.site/f4d175ccdd694a0dab9cc8a4cf9a8f2d?pvs=4) 참조
 - React
 - TypeScript 
 - Tailwind CSS
 - pnpm
 - Vite

## Git Convention
### Commit Message Structure
| Type | Description |
| --- | --- |
| feat | 새로운 기능 추가 |
| fix | 코드 수정 및 버그 수정 |
| Set | 프로젝트 설정 관련 |
| refactor | 코드를 리팩토링 할 때 |
| chore | 사소한 코드 또는 언어를 변경할 때 |
| docs | 문서를 쓸 때 |

커밋 메세지는 아래와 같이 type/제목/본문으로 구성

```
type : Title

body
```

```
- type
    - 과거시제 사용하지 않고 명령어로 작성
        - fix, add …
- Title
    - 50자 이하
- body (선택사항)
    - 부연설명이 필요하거나 커밋의 이유를 설명할 경우 작성
    - 72자를 넘기지 않고 제목과 구분되기 위해 한칸 띄어 작성

### PR / MR 가이드

- Merge 형식
    - 제목
        - `**기능: 작업내역**`
        - ex) refactor: auth 페이지 사용하지 않는 변수 제거
    - 내용
        
        ```
        ### Description
        
        설명
        
        ### Changes
        
        변경사항
        
        ### Test Checklist
        
        테스트 항목

        ### ScreenShot(option)
        
        스크린샷(옵션)
        ```
        
- master branch에는 commit할 수 없음

### branch
{type}-{word}

