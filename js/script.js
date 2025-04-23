document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider functionality
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    let currentSlide = 0;
    let slideInterval;

    // Function to show a specific slide
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        // Update current slide index
        currentSlide = index;
    }

    // Function to show next slide
    function nextSlide() {
        const newIndex = (currentSlide + 1) % slides.length;
        showSlide(newIndex);
    }

    // Function to show previous slide
    function prevSlide() {
        const newIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(newIndex);
    }

    // Start automatic slideshow
    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Stop automatic slideshow
    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    // Event listeners for controls
    prevBtn.addEventListener('click', function() {
        prevSlide();
        stopSlideshow();
        startSlideshow(); // Restart the timer
    });

    nextBtn.addEventListener('click', function() {
        nextSlide();
        stopSlideshow();
        startSlideshow(); // Restart the timer
    });

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
            stopSlideshow();
            startSlideshow(); // Restart the timer
        });
    });

    // Event listeners for hover to pause slideshow
    document.querySelector('.hero').addEventListener('mouseenter', stopSlideshow);
    document.querySelector('.hero').addEventListener('mouseleave', startSlideshow);

    // Initialize the slider
    showSlide(0);
    startSlideshow();
});

document.addEventListener("DOMContentLoaded", function() {
    // Haircut data
    const haircuts = [
        {
            id: 1,
            name: "อันเดอร์คัท",
            description: "ทรงผมยอดนิยมที่เน้นด้านข้างสั้น ด้านบนยาว เหมาะกับหนุ่มออฟฟิศที่ต้องการความสุภาพแต่มีสไตล์",
            image: "/img/undercut.jpg",
            tags: ["ผมสั้น", "ทรงสุภาพ", "อันเดอร์คัท"]
        },
        {
            id: 2,
            name: "ผมรองทรงสูง",
            description: "ทรงผมคลาสสิคสำหรับผู้ชาย ด้านข้างสั้น ด้านบนยาวปานกลาง จัดแต่งง่าย เหมาะกับทุกโอกาส",
            image: "/img/rongsung.jpg",
            tags: ["ผมสั้น", "ทรงสุภาพ", "รองทรง"]
        },
        {
            id: 3,
            name: "ทูบล็อก",
            description: "ทรงผมยาวดัดลอนเล็กน้อย สไตล์เกาหลี ให้ลุคหวาน ดูอ่อนโยน เหมาะกับวัยรุ่นและวัยทำงาน",
            image: "/img/twoblock.jpg",
            tags: ["ผมกลาง", "ผมยาว", "สไตล์เกาหลี", "ผมลอน"]
        },
        {
            id: 4,
            name: "มัลเล็ต",
            description: "ทรงผมสั้นที่ตัดให้เท ดูมีมิติ เหมาะกับคนผมหนา ง่ายต่อการจัดแต่ง ดูเท่แบบไม่ต้องพยายาม",
            image: "/img/mullet.jpg",
            tags: ["ผมสั้น", "ทรงเท่"]
        },
        {
            id: 5,
            name: "ผมหน้าม้าสไตล์ญี่ปุ่น",
            description: "ทรงผมที่มีหน้าม้าปิดหน้าผาก ด้านข้างและด้านหลังยาวปานกลาง ให้ลุคน่ารัก สไตล์ญี่ปุ่น",
            image: "/img/josuke.jpg",
            tags: ["ผมกลาง", "สไตล์ญี่ปุ่น", "หน้าม้า"]
        },
        {
            id: 6,
            name: "ผมรองทรงต่ำ",
            description: "ทรงผมคลาสสิคที่เหมาะกับทุกเพศทุกวัย ดูสุภาพ เป็นทางการ เหมาะกับการทำงานและเรียน",
            image: "/img/rongsunglow.jpg",
            tags: ["ผมสั้น", "ทรงสุภาพ", "รองทรง"]
        },
        {
            id: 7,
            name: "ผมยาวมัดจุก",
            description: "ทรงผมยาวที่มัดเป็นจุกด้านบน เหมาะกับหนุ่มสายฮิป ดูเท่ มีสไตล์ เป็นเอกลักษณ์",
            image: "/img/manbun.jpg",
            tags: ["ผมยาว", "มัดจุก", "สไตล์ฮิป"]
        },
        {
            id: 8,
            name: "ทรงหวีเสย",
            description: "ทรงผมที่หวีเสยขึ้นด้านหน้า ให้ดูมีความสูง เหมาะกับคนหน้ากลม ดูดีมีสไตล์",
            image: "/img/slickback.jpg",
            tags: ["ผมกลาง", "ทรงสุภาพ", "ผมเสย"]
        },
        {
            id: 9,
            name: "สกินเฮด",
            description: "ทรงผมยาวที่ดัดลอนคลื่น ให้ดูมีวอลลุ่ม เหมาะกับคนที่ชอบลุคสบายๆ มีเสน่ห์",
            image: "/img/skinhead.jpg",
            tags: ["ผมยาว", "ผมลอน", "สไตล์เกาหลี"]
        },
        {
            id: 10,
            name: "เดทร็อค",
            description: "ทรงผมสั้นที่ตัดสั้นรอบศีรษะ ดูสะอาด เป็นระเบียบ เหมาะกับคนที่ชอบความเรียบง่าย ไม่ต้องจัดแต่งมาก",
            image: "/img/deadlock.jpg",
            tags: ["ผมสั้น", "ทรงสุภาพ", "เกรียน"]
        },
        {
            id: 11,
            name: "ทวินเทล",
            description: "ทรงผมความยาวปานกลางถึงยาว จัดแต่งเป็นสองปอนีเทลทั้งสองข้าง ดูน่ารัก เหมาะกับวัยรุ่น",
            image: "/img/twintail.jpg",
            tags: ["ผมยาว", "สไตล์ญี่ปุ่น", "ทวินเทล"]
        },
        {
            id: 12,
            name: "วูฟคัท",
            description: "ทรงผมสั้นปานกลางที่มีการตัดแต่งให้เหมือนขนหมาป่า ดูเท่ มีเอกลักษณ์ เหมาะกับคนหน้าเรียว",
            image: "/img/wolfcut.jpg",
            tags: ["ผมกลาง", "วูฟคัท", "สไตล์เกาหลี"]
        }
    ];

    // Populate gallery on page load
    displayHaircuts(haircuts);

    // Add event listeners to filter tags
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            // Remove active class from all tags
            document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tag
            this.classList.add('active');
            
            // Filter haircuts based on selected tag
            const tagName = this.getAttribute('data-tag');
            if (tagName === 'all') {
                displayHaircuts(haircuts);
            } else {
                const filteredHaircuts = haircuts.filter(haircut => 
                    haircut.tags.some(tag => tag.toLowerCase().includes(tagName.toLowerCase()))
                );
                displayHaircuts(filteredHaircuts);
            }
        });
    });

    // Search function for the global scope
    window.searchHaircuts = function() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        
        if (searchTerm.trim() === '') {
            // If search is empty, show all based on active filter
            const activeTag = document.querySelector('.filter-tag.active').getAttribute('data-tag');
            if (activeTag === 'all') {
                displayHaircuts(haircuts);
            } else {
                const filteredHaircuts = haircuts.filter(haircut => 
                    haircut.tags.some(tag => tag.toLowerCase().includes(activeTag.toLowerCase()))
                );
                displayHaircuts(filteredHaircuts);
            }
            return;
        }
        
        // Filter haircuts based on search term
        const filteredHaircuts = haircuts.filter(haircut => {
            return haircut.name.toLowerCase().includes(searchTerm) || 
                   haircut.description.toLowerCase().includes(searchTerm) ||
                   haircut.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        });
        
        displayHaircuts(filteredHaircuts);
    }

    // Search on Enter key press
    document.getElementById('searchInput').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchHaircuts();
        }
    });
});

// Function to display haircuts
function displayHaircuts(haircuts) {
    const gallery = document.getElementById('haircuts-gallery');
    const noResults = document.getElementById('no-results');
    
    // Clear gallery
    gallery.innerHTML = '';
    
    if (haircuts.length === 0) {
        // Show no results message
        gallery.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    // Hide no results message and show gallery
    gallery.style.display = 'grid';
    noResults.style.display = 'none';
    
    // Populate gallery with haircut cards
    haircuts.forEach(haircut => {
        const haircutCard = document.createElement('div');
        haircutCard.className = 'haircut-card';
        
        const tagElements = haircut.tags.map(tag => 
            `<span class="tag">${tag}</span>`
        ).join('');
        
        haircutCard.innerHTML = `
            <div class="haircut-image">
                <img src="${haircut.image}" alt="${haircut.name}">
            </div>
            <div class="haircut-info">
                <h3>${haircut.name}</h3>
                <p>${haircut.description}</p>
                <div class="haircut-tags">
                    ${tagElements}
                </div>
            </div>
        `;
        
        gallery.appendChild(haircutCard);
    });
}