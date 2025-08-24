/*
편집 가이드:
- YouTube 영상 추가 시 loadVideo 함수의 videoId 매개변수 변경
- 다크모드 토글 아이콘 변경은 updateThemeIcon 함수 수정
- 문의 폼 제출 시 Formspree 사용하려면 주석 해제 후 설정
*/

document.addEventListener('DOMContentLoaded', function() {
    // 다크모드 토글 기능
    initThemeToggle();
    
    // 부드러운 스크롤 네비게이션
    initSmoothScroll();
    
    // 문의 폼 처리
    initContactForm();
});

// 다크모드 토글 초기화
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // 초기 테마 설정
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // 토글 버튼 클릭 이벤트
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

// 테마 아이콘 업데이트
function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// YouTube 지연 로딩
function loadVideo(videoId, element) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.allowFullscreen = true;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    
    // 기존 플레이스홀더를 iframe으로 교체
    element.parentNode.innerHTML = '';
    element.parentNode.appendChild(iframe);
}

// 부드러운 스크롤 네비게이션
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 문의 폼 처리
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 폼 데이터 수집
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // mailto 링크 생성 (기본 방식)
        const subject = encodeURIComponent(`[MAY FILM 문의] ${name}님의 문의사항`);
        const body = encodeURIComponent(`
이름: ${name}
이메일: ${email}

문의 내용:
${message}

---
이 메일은 MAY FILM 웹사이트(mayfilm.github.io)에서 발송되었습니다.
        `);
        
        const mailtoLink = `mailto:contact@mayfilm.kr?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        
        /* 
        Formspree 사용 시 아래 코드 사용 (위 mailto 코드 대신):
        
        fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
        .then(response => {
            if (response.ok) {
                alert('문의가 성공적으로 전송되었습니다!');
                this.reset();
            } else {
                throw new Error('전송 실패');
            }
        })
        .catch(error => {
            alert('문의 전송 중 오류가 발생했습니다. 직접 이메일로 연락 부탁드립니다.');
        });
        */
    });
}

// 스크롤 시 헤더 스타일 변경 (선택사항)
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'var(--bg-primary)';
        header.style.boxShadow = 'var(--shadow)';
    } else {
        header.style.backgroundColor = 'var(--bg-primary)';
        header.style.boxShadow = 'none';
    }
});
