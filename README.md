## Contents
0. [Production](#production)
1. [기획](#기획)
2. [Skills](#skills)
3. [Git Convention](#git-convention)
4. [Challenges](#challenges)

## Production
### List(DeskTop)
![image](https://github.com/Legitgoons/eCommerce-ourHome/assets/101088491/048b7752-981e-431b-92dd-dca7bbd364de)
### List(Mobile)
![image](https://github.com/Legitgoons/eCommerce-ourHome/assets/101088491/4b28c5f3-a609-4bde-b320-50ec697d87cd)
### Cart
![image](https://github.com/Legitgoons/eCommerce-ourHome/assets/101088491/594d02d9-ec32-4284-8456-44846c05779c)

## 기획
각각 Notion과 Figma를 통해서 진행
### 기능 명세서 [Notion](https://western-lumber-687.notion.site/7906459e6b1f4b80acbf0ed34ea64ec6?pvs=4)
![image](https://github.com/Legitgoons/eCommerce-ourHome/assets/101088491/64c079b0-ef20-4e8e-a9ca-c00c54855f9a)

### 화면 기획 [Figma](https://www.figma.com/file/0xezUdb3I0t8GjD7C7KDWt/%EC%95%84%EC%9B%8C%ED%99%88-%EA%B3%BC%EC%A0%9C%ED%85%8C%EC%8A%A4%ED%8A%B8-MockUp?type=design&node-id=0%3A1&mode=design&t=2T2eZ9kDGt4qRN7W-1)
![image](https://github.com/Legitgoons/eCommerce-ourHome/assets/101088491/6e7123b4-e673-4c2f-b8c8-ac72ca19e729)

## Skills
#### React v 18.2.0
- Virtual Dom을 이용해 쉽게 SPA 구현 가능
- 거대한 커뮤니티가 있어 트러블 슈팅이 쉬움
#### Typescript v 5.2.2
- JavaScript 상위 집합으로써, 정적 타입 문법을 추가한 언어
    - Side-effect 방지 
    - IDE의 지원을 통해 생산성 향상
    - 컴파일 단계에서 오류 잡아냄으로써 실행 시간 오류 감소
#### Tailwind CSS v 3.4.0
- 이름을 작명할 필요가 없어 개발 시간이 축소됨
- 반응형 디자인 구현이 쉬움
- 하지만 스타일 컴포넌트를 만들어서 관심사를 분리하는 css in js 방식에 비해 유지, 보수 측면에서 아쉬움이 있어 고민했음
- Atomic Design Pattern을 사용한다면 최소 디자인 단위를 atom이나 유틸리티 클래스로 구현하기에 유지, 보수 측면의 아쉬움을 보완할 수 있을것이라 생각하고 도입
#### pnpm v 8.6.9
- Ghost Dependency 해결(명시한 패키지만 사용)
- 불필요한 I/O 과정을 없애 빠르고 효율적
- 패키지 중복 설치를 하지 않음으로써 사용 용량이 적음
#### Vite v 5.0.8
- ESbuild 기반으로 구현되어 CRA 대비 월등히 빠른 속도

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

- body (선택사항)
    - 부연설명이 필요하거나 커밋의 이유를 설명할 경우 작성
    - 72자를 넘기지 않고 제목과 구분되기 위해 한칸 띄어 작성
```
### Pull Request Template
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
### Branch Naming
{type}-{word}

## Challenges
### LCP 개선
#### Before
![image](https://github.com/Legitgoons/eCommerce-ourHome/assets/101088491/47550c2f-ae48-4551-9f6d-f201e0c7cbc6)
#### After
![image](https://github.com/Legitgoons/eCommerce-ourHome/assets/101088491/d5b3cc13-dca7-4549-8902-c42635029e61)
- 쇼핑몰 서비스 특성상 수많은 이미지를 불러와서 랜더링해야 합니다. 하지만 LCP에 지나치게 오랜 시간이 소요되는 이슈가 있었습니다.
- 이를 해결하기 위해 font를 호환성이 뛰어나지만 용량이 큰 ttf형식에서 ttf 대비 용량이 1/3인 woff2 형식으로 변경하였습니다.
- img에 사용자가 해당 상품의 위치로 스크롤을 이동할 때, 이미지를 불러오는 방식인 lazy loading을 설정하였습니다. 
- LCP 개선에 대한 자세한 설명은 [블로그](https://cksxkr5193.tistory.com/35)를 참조 부탁드립니다.
### 액션, 계산 함수 분리
- CartBox에서 계산함수 increase와 decrease를 분리했습니다.
- CartTemplate에서 계산함수 calculateTotalPrice와 calculateShippingFee를 분리했습니다.
- 액션, 계산 분리에 대한 자세한 설명은 [블로그](https://cksxkr5193.tistory.com/30)를 참조 부탁드립니다.
### 수량 변경 이슈
![image](https://github.com/Legitgoons/eCommerce-ourHome/assets/101088491/7d7829c2-bda2-41fe-8cf5-ff928127354c)
- 아워홈 mall의 장바구니에서 수량이 1인 제품의 마이너스 버튼을 누르면 오류 발생 alert가 출력
- 이후 동일 제품 장바구니에 담아도 장바구니 페이지 이동시 0으로 변경되는 이슈가 있습니다.
- 이를 해결하기 위해, CartQuantityController 컴포넌트에서 수량이 1일 경우 마이너스 버튼을 비활성화하고 디자인이 변경되도록 했습니다.
- 또한 CartBox 컴포넌트의 decreaseQuantity 함수도 수량이 1보다 클 경우에만 실행되도록 구현했습니다.
