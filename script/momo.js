//탭 제목 마우스 올리는 이벤트 생성
//마우스 올린 대상에 active 클래스 적용
//그 외 나머지 초기화 active 클래스 제거

const title = document.querySelectorAll('#menu_wrap .menu a')
console.log(title)


for(let i of title){
    // console.log(i)
    i.addEventListener('mouseover',()=>{
        for(let j of title){j.classList.remove('active')} //올린 값이 모두 초기화되고
        i.classList.add('active') // 마우스가 올라간 i에만 active가 적용
    })
}

//1. txt 모두 숨기기 opacity = 0
//2. .menu a에 올렸을 때
//3. txt 올린대상만 서서히 보이기 opacity = 1
//4. 마우스 나가면 사라지기

const hover = document.querySelectorAll('.menu_img a')
console.log(hover)
console.log(hover[0].children[0], hover[1].children[0])

for(let i of hover){
    console.log(i, i.children[0])
    i.children[0].style.opacity = 0 //1번 순서
    i.children[0].style.transition = 'all 0.5s' 
    i.addEventListener('mouseover',()=>{ //2번 순서
        i.children[0].style.opacity = 1 //3번 순서
    })
    i.addEventListener('mouseout',()=>{ //4번 순서
        i.children[0].style.opacity = 0
    })
}

console.log('===========================')

//1. 각 탭 제목에 해당하는 내용만 출력하기 (title)
//2. 초기값 : 모든 내용 숨기기, 1번 내용 보이기
//3. 탭 제목에 마우스 올렸을 때 내용 보이기

const img_g = document.querySelectorAll('.menu_img')

//첫번째 화면에서 보이지 않을 이미지 그룹 숩기기 (2)
for(let i of img_g){i.style.display = 'none'}
img_g[0].style.display = 'flex'

title.forEach((i,index)=>{
    // console.log(i,index) 확인 완료
    i.addEventListener('mouseover',()=>{
        for(let i of img_g){i.style.display = 'none'} //모두 숨기고
        img_g[index].style.display = 'flex' // 그중에 같은 index인 것만 보이게 해라
    })
})