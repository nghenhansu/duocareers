import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

// Data for Blog Posts
const postsData = [
    {
        id: 1,
        title: 'Khung Khái Niệm Quan Trọng trong Phát Triển Sự Nghiệp',
        author: 'DuoCareers Team',
        date: 'July 11, 2024',
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
        excerpt: 'Để hiểu rõ hơn về sự phát triển sự nghiệp, các nguồn đã giới thiệu một số khung khái niệm quan trọng như Khung EPL và Khung T-shaped...',
        fullContent: (
            <>
                <h3>Khung EPL (Entrepreneurship, Professionalism, Leadership)</h3>
                <p>Đây là một mô hình đa chiều nhằm phát triển vốn nhân lực và sự nghiệp trong thế kỷ 21. Nó bao gồm 3 yếu tố chính:</p>
                <ul>
                    <li><strong>Tinh thần khởi nghiệp (Entrepreneurship):</strong> Liên quan đến khả năng nhận diện và khai thác cơ hội, đổi mới, và chấp nhận rủi ro.</li>
                    <li><strong>Tính chuyên nghiệp (Professionalism):</strong> Phát triển kỹ năng chuyên môn sâu rộng, đạo đức nghề nghiệp, và khả năng làm việc hiệu quả.</li>
                    <li><strong>Lãnh đạo (Leadership):</strong> Khả năng định hướng, truyền cảm hứng và quản lý để đạt được mục tiêu chung.</li>
                </ul>
                <h3>Khung T-shaped (Kỹ năng hình chữ T)</h3>
                <p>Mô tả một cá nhân có kiến thức chuyên sâu trong một lĩnh vực cụ thể (chiều dọc) kết hợp với các kỹ năng và kiến thức rộng, liên ngành (chiều ngang).</p>
            </>
        ),
    },
    {
        id: 2,
        title: 'Các Yếu Tố Ảnh Hưởng Đến Sự Phát Triển Sự Nghiệp',
        author: 'DuoCareers Team',
        date: 'July 10, 2024',
        image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop',
        excerpt: 'Sự phát triển sự nghiệp chịu ảnh hưởng của cả các yếu tố nội tại (cá nhân) và bên ngoài (hệ thống và môi trường). Hiểu rõ các yếu tố này là bước đầu tiên...',
        fullContent: (
            <>
                <h3>A. Yếu tố Nội tại (Cá nhân):</h3>
                <ul>
                    <li><strong>Sở thích và Giá trị:</strong> Đóng vai trò quan trọng trong việc định hướng lựa chọn và phát triển sự nghiệp.</li>
                    <li><strong>Kỹ năng và Thành tựu:</strong> Là nền tảng cho sự tiến bộ nghề nghiệp.</li>
                    <li><strong>Tự nhận thức (Self-knowledge):</strong> Hiểu rõ bản thân là yếu tố trung tâm của quá trình phát triển sự nghiệp.</li>
                </ul>
                <h3>B. Yếu tố Bên ngoài (Hệ thống và Môi trường):</h3>
                <ul>
                    <li><strong>Gia đình và Ảnh hưởng đa thế hệ:</strong> Lịch sử nghề nghiệp gia đình, hình mẫu có thể ảnh hưởng sâu sắc.</li>
                    <li><strong>Thị trường lao động và xu hướng công nghệ:</strong> AI, Big Data tác động đáng kể đến lộ trình sự nghiệp.</li>
                </ul>
            </>
        ),
    },
    {
        id: 3,
        title: 'Tiếp Cận Đánh giá và Phát Triển Sự Nghiệp Hiện Đại',
        author: 'DuoCareers Team',
        date: 'July 9, 2024',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2134&auto=format&fit=crop',
        excerpt: 'Việc đánh giá và phát triển sự nghiệp không chỉ dừng lại ở mô tả công việc. Nó đòi hỏi việc xây dựng một "luận án sự nghiệp" có cơ sở...',
        fullContent: (
            <>
                <h3>Đánh giá định tính (Qualitative Assessment)</h3>
                <p>Ngày càng được chú trọng, các công cụ như Genogram, Card sort, Accomplishments questionnaire... giúp cá nhân tạo ra "ý nghĩa" từ kinh nghiệm của họ.</p>
                <h3>Xây dựng "Luận án sự nghiệp" (Career Thesis)</h3>
                <p>Đòi hỏi xây dựng một giả thuyết có cơ sở trả lời câu hỏi: "Tại sao việc đảm nhận vai trò này, trong tổ chức này, tại thời điểm này... lại là bước đi chiến lược tiếp theo để hiện thực hóa các mục tiêu dài hạn của tôi?".</p>
            </>
        ),
    },
];

// Data for Pricing Packages
const packagesData = [
    {
        id: 1,
        name: 'Khám Phá',
        price: '1.999.000',
        description: 'Dành cho người mới bắt đầu hành trình sự nghiệp',
        features: [
            '2 phiên Coaching 1:1 (60 phút/phiên)',
            'Phân tích & Đánh giá Sơ yếu lý lịch',
            'Xây dựng "Luận án sự nghiệp" cơ bản',
            'Truy cập bộ tài liệu độc quyền',
        ],
        popular: false,
    },
    {
        id: 2,
        name: 'Tăng Tốc',
        price: '4.999.000',
        description: 'Dành cho chuyên gia muốn bứt phá',
        features: [
            '5 phiên Coaching 1:1 (60 phút/phiên)',
            'Tối ưu hóa Hồ sơ LinkedIn',
            'Xây dựng "Luận án sự nghiệp" chuyên sâu',
            'Luyện tập phỏng vấn giả lập',
            'Truy cập cộng đồng thành viên',
        ],
        popular: true,
    },
    {
        id: 3,
        name: 'Dẫn Đầu',
        price: 'Liên Hệ',
        description: 'Dành cho cấp quản lý và lãnh đạo',
        features: [
            'Chương trình Coaching theo yêu cầu (6-12 tháng)',
            'Xây dựng thương hiệu cá nhân lãnh đạo',
            'Chiến lược phát triển đội ngũ',
            'Kết nối mạng lưới cấp cao',
            'Hỗ trợ 24/7',
        ],
        popular: false,
    },
];

// Reusable Components
const Icon = ({ name, ...props }) => {
    const iconRef = useRef(null);
    useEffect(() => {
        if (iconRef.current) {
            // @ts-ignore
            feather.replace();
        }
    }, [name]);
    return <i data-feather={name} ref={iconRef} {...props}></i>;
};


const PostCard = ({ post, onSelectPost }) => (
    <div className="post-card" onClick={() => onSelectPost(post)}>
        <img src={post.image} alt={post.title} className="post-card-image" />
        <div className="post-card-content">
            <h3 className="post-card-title">{post.title}</h3>
            <div className="post-meta">
                <span>{post.author}</span> | <span>{post.date}</span>
            </div>
            <p className="post-card-excerpt">{post.excerpt}</p>
            <span className="read-more">Đọc thêm &rarr;</span>
        </div>
    </div>
);

// Main Page Components
const Header = ({ setView, onLoginClick }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a onClick={() => setView({ type: 'home', data: null })} className="logo">DuoCareers</a>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#benefits" onClick={() => setView({ type: 'home', data: null })}>Lợi Ích</a></li>
                        <li><a href="#pricing" onClick={() => setView({ type: 'home', data: null })}>Gói Dịch Vụ</a></li>
                        <li><a href="#" onClick={(e) => {e.preventDefault(); setView({ type: 'blog', data: null });}}>Blog</a></li>
                        <li><button onClick={onLoginClick}>Đăng Nhập</button></li>
                        <li><a href="#pricing" onClick={() => setView({ type: 'home', data: null })} className="btn btn-primary">Bắt Đầu Ngay</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

const Hero = () => (
    <section className="hero">
        <div className="container">
            <h1>Kiến Tạo Sự Nghiệp Kép, Mở Lối Tương Lai</h1>
            <p>Nền tảng cung cấp kiến thức, công cụ và sự đồng hành từ chuyên gia để bạn tự tin phát triển song song sự nghiệp chính và đam mê cá nhân.</p>
            <a href="#pricing" className="btn btn-primary btn-lg">Chọn Gói Dịch Vụ</a>
        </div>
    </section>
);

const Benefits = () => (
    <section id="benefits" className="benefits-section">
        <div className="container">
            <h2>Tại Sao Chọn DuoCareers?</h2>
            <div className="benefits-grid">
                <div className="benefit-card">
                    <Icon name="git-merge" className="benefit-icon" size={48} />
                    <h3>Lộ Trình Sự Nghiệp Kép</h3>
                    <p>Phát triển đồng thời sự nghiệp ổn định và dự án đam mê, tăng thu nhập và sự thỏa mãn.</p>
                </div>
                <div className="benefit-card">
                    <Icon name="award" className="benefit-icon" size={48} />
                    <h3>Chuyên Gia Đồng Hành</h3>
                    <p>Được huấn luyện 1:1 bởi các chuyên gia hàng đầu trong lĩnh vực của bạn.</p>
                </div>
                <div className="benefit-card">
                    <Icon name="trending-up" className="benefit-icon" size={48} />
                    <h3>Nâng Cấp Kỹ Năng</h3>
                    <p>Trang bị các kỹ năng T-shaped (chuyên sâu & liên ngành) theo yêu cầu thị trường.</p>
                </div>
                <div className="benefit-card">
                    <Icon name="users" className="benefit-icon" size={48} />
                    <h3>Mở Rộng Mạng Lưới</h3>
                    <p>Kết nối với cộng đồng những người cùng chí hướng và các chuyên gia đầu ngành.</p>
                </div>
            </div>
        </div>
    </section>
);

const Pricing = () => (
    <section id="pricing" className="pricing-section">
        <div className="container">
            <h2>Đầu Tư Cho Sự Nghiệp Của Bạn</h2>
            <div className="pricing-grid">
                {packagesData.map(pkg => (
                    <div key={pkg.id} className={`pricing-card ${pkg.popular ? 'popular' : ''}`}>
                        {pkg.popular && <span className="popular-badge">Phổ Biến Nhất</span>}
                        <h3>{pkg.name}</h3>
                        <p>{pkg.description}</p>
                        <div className="pricing-price">
                           {pkg.price !== 'Liên Hệ' ? '₫' + pkg.price : 'Liên Hệ'}
                           <span>{pkg.price !== 'Liên Hệ' ? '/gói' : ' '}</span>
                        </div>
                        <a href="#" className="btn btn-primary" style={{ width: '100%' }}>
                            {pkg.price !== 'Liên Hệ' ? 'Đăng Ký Ngay' : 'Liên Hệ Tư Vấn'}
                        </a>
                        <ul>
                            {pkg.features.map((feature, index) => (
                                <li key={index}><Icon name="check-circle" size={20} /> {feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const BlogPreview = ({ onSelectPost, onViewAll }) => (
     <section id="blog" className="blog-preview-section">
        <div className="container">
            <h2>Kiến Thức Từ Chuyên Gia</h2>
            <div className="blog-preview-grid">
                {postsData.slice(0, 3).map(post => (
                     <PostCard key={post.id} post={post} onSelectPost={onSelectPost} />
                ))}
            </div>
            <div className="view-all-posts">
                <button onClick={onViewAll} className="btn btn-secondary">Xem Tất Cả Bài Viết</button>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer-grid">
                <div className="footer-col">
                    <h4>DuoCareers</h4>
                    <p>Chúng tôi tin rằng mỗi người đều có thể kiến tạo một sự nghiệp ý nghĩa và trọn vẹn bằng cách theo đuổi cả đam mê và chuyên môn.</p>
                </div>
                <div className="footer-col">
                    <h4>Khám Phá</h4>
                    <ul>
                        <li><a href="#benefits">Lợi Ích</a></li>
                        <li><a href="#pricing">Gói Dịch Vụ</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Hỗ Trợ</h4>
                    <ul>
                        <li><a href="#">Câu Hỏi Thường Gặp</a></li>
                        <li><a href="#">Chính Sách Bảo Mật</a></li>
                        <li><a href="#">Điều Khoản Dịch Vụ</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Đăng Ký Nhận Tin</h4>
                    <p>Nhận những bài viết mới nhất và các ưu đãi độc quyền.</p>
                    <form className="subscribe-form">
                        <input type="email" placeholder="Địa chỉ email của bạn" />
                        <button type="submit" className="btn btn-primary">Đăng Ký</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} DuoCareers. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);

// Page Views
const HomePage = ({ onSelectPost, onViewAllPosts }) => (
    <>
        <Hero />
        <Benefits />
        <Pricing />
        <BlogPreview onSelectPost={onSelectPost} onViewAll={onViewAllPosts}/>
    </>
);

const BlogPage = ({ onSelectPost }) => (
    <section className="blog-page">
        <div className="container">
            <h2>Blog DuoCareers</h2>
            <div className="blog-grid">
                {postsData.map((post) => (
                    <PostCard key={post.id} post={post} onSelectPost={onSelectPost} />
                ))}
            </div>
        </div>
    </section>
);

const PostDetailPage = ({ post, onBack }) => (
     <section className="post-detail-page">
        <div className="container">
            <button onClick={onBack} className="back-button"><Icon name="arrow-left" size={16}/> Quay lại danh sách</button>
            <article className="post-content">
                <h1>{post.title}</h1>
                <div className="post-meta">
                    <span>Bởi <strong>{post.author}</strong></span> | <span>Ngày đăng: {post.date}</span>
                </div>
                <img src={post.image} alt={post.title} className="post-detail-image" />
                <div className="post-body">
                     {post.fullContent}
                </div>
            </article>
        </div>
    </section>
);

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <h2>{isLogin ? 'Đăng Nhập' : 'Đăng Ký'}</h2>
                <form onSubmit={e => e.preventDefault()}>
                    {!isLogin && (
                         <div className="form-group">
                            <label htmlFor="name">Họ và Tên</label>
                            <input type="text" id="name" required />
                        </div>
                    )}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu</label>
                        <input type="password" id="password" required />
                    </div>
                    <button type="submit" className="btn btn-primary">{isLogin ? 'Đăng Nhập' : 'Tạo Tài Khoản'}</button>
                </form>
                <div className="form-switch">
                    {isLogin ? "Chưa có tài khoản? " : "Đã có tài khoản? "}
                    <button onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? "Đăng ký ngay" : "Đăng nhập"}
                    </button>
                </div>
            </div>
        </div>
    )
};

const App = () => {
    const [view, setView] = useState({ type: 'home', data: null as any });
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        // @ts-ignore
        feather.replace();
    }, [view]);

    const handleSelectPost = (post) => setView({ type: 'postDetail', data: post });
    const handleBackToBlog = () => setView({ type: 'blog', data: null });
    const handleViewAllPosts = () => setView({ type: 'blog', data: null });

    const renderContent = () => {
        switch (view.type) {
            case 'blog':
                return <BlogPage onSelectPost={handleSelectPost} />;
            case 'postDetail':
                return <PostDetailPage post={view.data} onBack={handleBackToBlog} />;
            case 'home':
            default:
                return <HomePage onSelectPost={handleSelectPost} onViewAllPosts={handleViewAllPosts}/>;
        }
    };
    
    return (
        <>
            <Header setView={setView} onLoginClick={() => setIsLoginModalOpen(true)} />
            <main>
                {renderContent()}
            </main>
            <Footer />
            <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
        </>
    );
};

const container = document.getElementById('root');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}