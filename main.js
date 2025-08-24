/* 
편집 가이드:
- 색상을 변경하려면 :root 변수를 수정하세요
- 브레이크포인트: 768px (태블릿), 1024px (데스크톱)
- 새로운 섹션 추가 시 .section 클래스를 사용하세요
*/

:root {
    /* 라이트 모드 색상 */
    --bg-primary: #ffffff;
    --bg-secondary: #f8f9fa;
    --text-primary: #212529;
    --text-secondary: #6c757d;
    --accent: #007bff;
    --accent-hover: #0056b3;
    --border: #e9ecef;
    --card-bg: #ffffff;
    --shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 4px 20px rgba(0, 0, 0, 0.15);
}

[data-theme="dark"] {
    /* 다크 모드 색상 */
    --bg-primary: #1a1a1a;
    --bg-secondary: #2d2d2d;
    --text-primary: #ffffff;
    --text-secondary: #b3b3b3;
    --accent: #4dabf7;
    --accent-hover: #339af0;
    --border: #404040;
    --card-bg: #2d2d2d;
    --shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    --shadow-hover: 0 4px 20px rgba(0, 0, 0, 0.4);
}

/* 기본 스타일 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    font-size: 16px;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* 컨테이너 */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* 헤더 */
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--bg-primary);
    border-bottom: 1px solid var(--border);
    z-index: 1000;
    backdrop-filter: blur(10px);
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 20px;
}

.logo h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--accent);
}

.nav {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.nav a {
    text-decoration: none;
    color: var(--text-primary);
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav a:hover {
    color: var(--accent);
}

.theme-toggle {
    background: none;
    border: 1px solid var(--border);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s ease;
}

.theme-toggle:hover {
    background-color: var(--bg-secondary);
    transform: scale(1.05);
}

.theme-toggle:focus {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
}

/* 히어로 섹션 */
.hero {
    padding: 120px 0 80px;
    background-color: var(--bg-secondary);
    text-align: center;
}

.hero-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.hero-subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-bottom: 3rem;
}

/* 비디오 컨테이너 */
.video-container {
    max-width: 800px;
    margin: 0 auto;
    aspect-ratio: 16/9;
    background-color: var(--card-bg);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow);
}

.video-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: linear-gradient(135deg, var(--accent), var(--accent-hover));
    color: white;
    transition: all 0.3s ease;
}

.video-placeholder:hover {
    transform: scale(1.02);
    box-shadow: var(--shadow-hover);
}

.play-button {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.video-container iframe {
    width: 100%;
    height: 100%;
    border: none;
}

/* 통계 섹션 */
.stats {
    padding: 80px 0;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
    text-align: center;
}

.stat-item {
    padding: 2rem;
}

.stat-number {
    font-size: 3rem;
    font-weight: 700;
    color: var(--accent);
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 1.1rem;
    color: var(--text-secondary);
}

/* 로고 월 */
.logo-wall {
    padding: 80px 0;
    background-color: var(--bg-secondary);
}

.logo-wall h3 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2rem;
    color: var(--text-primary);
}

.logo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
}

.logo-item {
    background-color: var(--card-bg);
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    border: 1px solid var(--border);
    transition: all 0.3s ease;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
}

.logo-item span {
    font-weight: 500;
    color: var(--text-secondary);
}

/* 작품 섹션 */
.works {
    padding: 80px 0;
}

.works h3 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    color: var(--text-primary);
}

.category {
    margin-bottom: 4rem;
}

.category h4 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: var(--accent);
    border-bottom: 2px solid var(--accent);
    padding-bottom: 0.5rem;
}

.works-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.work-card {
    background-color: var(--card-bg);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
}

.work-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
}

.work-thumbnail {
    width: 100%;
    height: 200px;
    background: linear-gradient(45deg, #ccc, #eee);
    border-bottom: 1px solid var(--border);
}

[data-theme="dark"] .work-thumbnail {
    background: linear-gradient(45deg, #444, #666);
}

.work-info {
    padding: 1.5rem;
}

.work-info h5 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
}

.work-client {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
}

.work-role {
    color: var(--accent);
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 1rem;
}

.work-link {
    display: inline-block;
    background-color: var(--accent);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: background-color 0.3s ease;
}

.work-link:hover {
    background-color: var(--accent-hover);
}

/* About 섹션 */
.about {
    padding: 80px 0;
    background-color: var(--bg-secondary);
}

.about h3 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    color: var(--text-primary);
}

.about-content {
    max-width: 800px;
    margin: 0 auto;
}

.about-content > p {
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--text-secondary);
}

.credentials {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.credential-section {
    background-color: var(--card-bg);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
}

.credential-section h4 {
    color: var(--accent);
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.credential-section ul {
    list-style: none;
}

.credential-section li {
    padding: 0.5rem 0;
    color: var(--text-secondary);
    border-bottom: 1px solid var(--border);
}

.credential-section li:last-child {
    border-bottom: none;
}

/* Contact 섹션 */
.contact {
    padding: 80px 0;
}

.contact h3 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    color: var(--text-primary);
}

.contact-content {
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
}

.contact-info {
    text-align: center;
}

.contact-info p {
    margin-bottom: 2rem;
    color: var(--text-secondary);
    font-size: 1.1rem;
}

.email-link {
    display: inline-block;
    font-size: 1.25rem;
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
    padding: 1rem 2rem;
    border: 2px solid var(--accent);
    border-radius: 8px;
    transition: all 0.3s ease;
}

.email-link:hover {
    background-color: var(--accent);
    color: white;
}

.contact-form {
    background-color: var(--card-bg);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
    font-weight: 500;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--border);
    border-radius: 6px;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--accent);
}

.contact-form button {
    width: 100%;
    padding: 1rem;
    background-color: var(--accent);
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.contact-form button:hover {
    background-color: var(--accent-hover);
}

/* 푸터 */
.footer {
    background-color: var(--bg-secondary);
    padding: 2rem 0;
    border-top: 1px solid var(--border);
}

.footer .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer p {
    color: var(--text-secondary);
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    font-size: 1.5rem;
    text-decoration: none;
    transition: transform 0.3s ease;
}

.social-links a:hover {
    transform: scale(1.2);
}

/* 반응형 디자인 */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-subtitle {
        font-size: 1rem;
    }
    
    .nav {
        gap: 1rem;
    }
    
    .nav a {
        font-size: 0.9rem;
    }
    
    .stats-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .logo-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
    
    .works-grid {
        grid-template-columns: 1fr;
    }
    
    .credentials {
        grid-template-columns: 1fr;
    }
    
    .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .footer .container {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 15px;
    }
    
    .header .container {
        padding: 0.75rem 15px;
    }
    
    .hero {
        padding: 100px 0 60px;
    }
    
    .hero-title {
        font-size: 1.75rem;
    }
    
    .stats,
    .works,
    .about,
    .contact {
        padding: 60px 0;
    }
    
    .logo-wall {
        padding: 60px 0;
    }
    
    .logo-grid {
        grid-template-columns: 1fr;
    }
}
    
