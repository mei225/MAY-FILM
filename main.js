/*
  편집 가이드:
  - 이 파일은 웹사이트의 동적인 기능을 관리합니다.
  - 다크 모드, YouTube 지연 로딩, 연락처 폼 제출 기능을 포함합니다.
  - 특별히 수정할 부분은 없으나, 만약 연락처 폼을 Formspree 등으로 변경할 경우
    'Contact Form Handler' 부분을 삭제하거나 주석 처리해야 합니다.
*/

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // ------------------------- //
    // Dark Mode Toggle
    // ------------------------- //
    const themeToggle = document.getElementById('dark-mode-toggle');
    const htmlEl = document.documentElement;

    // 현재 저장된 테마나 시스템 설정을 확인하여 적용
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    htmlEl.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });


    // ------------------------- //
    // YouTube Lazy Loading
    // ------------------------- //
    const youtubeEmbed = document.getElementById('youtube-embed');
    if (youtubeEmbed) {
        youtubeEmbed.addEventListener('click', () => {
            const videoId = youtubeEmbed.dataset.youtubeId;
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');
            
            // 클릭 후에는 플레이 버튼과 썸네일을 지우고 iframe으로 교체
            youtubeEmbed.innerHTML = '';
            youtubeEmbed.appendChild(iframe);
            youtubeEmbed.style.cursor = 'default';
        }, { once: true }); // 이벤트 리스너가 한 번만 실행되도록 설정
    }


    // ------------------------- //
    // Contact Form Handler (mailto)
    // ------------------------- //
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            const subject = encodeURIComponent(`[MAY FILM 문의] ${name}님`);
            const body = encodeURIComponent(`이름: ${name}\n이메일: ${email}\n\n내용:\n${message}`);
            
            // mailto 링크를 생성하여 사용자의 기본 이메일 클라이언트를 엽니다.
            window.location.href = `mailto:contact@mayfilm.kr?subject=${subject}&body=${body}`;
        });
    }

    // ------------------------- //
    // Dynamic Year in Footer
    // ------------------------- //
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});
