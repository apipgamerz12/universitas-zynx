/* =========================================
   UNIVERSITAS ZYNX
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const body = document.body;

const navbar = document.getElementById("navbar");

const menuBtn = document.getElementById("menuBtn");

const darkBtn = document.getElementById("darkBtn");

const searchBtn = document.getElementById("searchBtn");

const searchOverlay =
    document.getElementById("searchOverlay");

const closeSearch =
    document.getElementById("closeSearch");

const searchInput =
    document.getElementById("searchInput");

const searchResults =
    document.getElementById("searchResults");

const modal =
    document.getElementById("modal");

const modalContent =
    document.getElementById("modalContent");

const closeModal =
    document.getElementById("closeModal");

const toast =
    document.getElementById("toast");


/* =========================================
   MOBILE NAVIGATION
========================================= */

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

}


/* Tutup menu ketika link diklik */

document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


/* =========================================
   DROPDOWN MOBILE
========================================= */

const dropdownButton =
    document.querySelector(".dropdown-button");

const dropdown =
    document.querySelector(".dropdown");

if (dropdownButton) {

    dropdownButton.addEventListener("click", (event) => {

        event.stopPropagation();

        dropdown.classList.toggle("active");

    });

}


/* =========================================
   DARK MODE
========================================= */

function loadTheme() {

    const savedTheme =
        localStorage.getItem("zynx-theme");

    if (savedTheme === "dark") {

        body.classList.add("dark");

        darkBtn.textContent = "☀️";

    }

}


loadTheme();


if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        body.classList.toggle("dark");

        const isDark =
            body.classList.contains("dark");

        localStorage.setItem(
            "zynx-theme",
            isDark ? "dark" : "light"
        );

        darkBtn.textContent =
            isDark ? "☀️" : "🌙";

        showToast(
            isDark
                ? "Mode gelap aktif."
                : "Mode terang aktif."
        );

    });

}


/* =========================================
   MODAL
========================================= */

function openModal(content) {

    modalContent.innerHTML = content;

    modal.classList.add("active");

    body.classList.add("no-scroll");

}


function closeModalWindow() {

    modal.classList.remove("active");

    body.classList.remove("no-scroll");

}


if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeModalWindow
    );

}


if (modal) {

    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            closeModalWindow();

        }

    });

}


/* =========================================
   PROFILE
========================================= */

const profileBtn =
    document.getElementById("profileBtn");

if (profileBtn) {

    profileBtn.addEventListener("click", () => {

        openModal(`

            <span class="section-label">
                PROFIL UNIVERSITAS
            </span>

            <h2 style="margin:10px 0 15px;">
                Universitas Zynx
            </h2>

            <p style="color:#716a80;">
                Universitas Zynx pada website ini
                merupakan konsep universitas untuk
                kebutuhan demonstrasi dan
                pengembangan proyek web.
            </p>

            <br>

            <h3>Visi</h3>

            <p style="color:#716a80;">
                Menjadi institusi pendidikan modern
                yang mendorong pembelajaran,
                inovasi dan pemanfaatan teknologi.
            </p>

            <br>

            <h3>Misi</h3>

            <ul style="margin:15px 0 0 20px;">

                <li>
                    Mengembangkan pendidikan berkualitas.
                </li>

                <li>
                    Mendorong penelitian dan inovasi.
                </li>

                <li>
                    Mengembangkan kompetensi mahasiswa.
                </li>

                <li>
                    Membangun lingkungan akademik
                    yang kolaboratif.
                </li>

            </ul>

        `);

    });

}


/* =========================================
   PROGRAM STUDI
========================================= */

const programButtons =
    document.querySelectorAll(
        ".detail-button[data-program]"
    );


const programDescriptions = {

    "Informatika": `
        <h2>Program Studi Informatika</h2>

        <p>
            Program studi yang berfokus pada
            pengembangan perangkat lunak,
            algoritma, komputer dan teknologi
            informasi.
        </p>

        <br>

        <h3>Bidang Pembelajaran</h3>

        <ul style="margin:15px 0 0 20px;">

            <li>Pemrograman</li>
            <li>Algoritma dan Struktur Data</li>
            <li>Basis Data</li>
            <li>Jaringan Komputer</li>
            <li>Kecerdasan Buatan</li>
            <li>Pengembangan Web</li>

        </ul>
    `,

    "Sistem Informasi": `
        <h2>Program Studi Sistem Informasi</h2>

        <p>
            Mempelajari hubungan antara teknologi
            informasi, proses bisnis dan kebutuhan
            organisasi.
        </p>

        <br>

        <h3>Bidang Pembelajaran</h3>

        <ul style="margin:15px 0 0 20px;">

            <li>Analisis Sistem</li>
            <li>Database</li>
            <li>Manajemen Proyek</li>
            <li>Business Intelligence</li>
            <li>Sistem Informasi Bisnis</li>

        </ul>
    `,

    "Kecerdasan Buatan": `
        <h2>Program Studi Kecerdasan Buatan</h2>

        <p>
            Berfokus pada konsep dan penerapan
            kecerdasan buatan dalam berbagai
            bidang teknologi.
        </p>

        <br>

        <h3>Bidang Pembelajaran</h3>

        <ul style="margin:15px 0 0 20px;">

            <li>Machine Learning</li>
            <li>Data Science</li>
            <li>Computer Vision</li>
            <li>Natural Language Processing</li>
            <li>Deep Learning</li>

        </ul>
    `,

    "Manajemen": `
        <h2>Program Studi Manajemen</h2>

        <p>
            Mempelajari pengelolaan organisasi,
            bisnis, sumber daya manusia dan
            kewirausahaan.
        </p>

        <br>

        <h3>Bidang Pembelajaran</h3>

        <ul style="margin:15px 0 0 20px;">

            <li>Manajemen Bisnis</li>
            <li>Pemasaran</li>
            <li>Keuangan</li>
            <li>Kewirausahaan</li>
            <li>Manajemen SDM</li>

        </ul>
    `

};


programButtons.forEach(button => {

    button.addEventListener("click", () => {

        const program =
            button.dataset.program;

        openModal(
            programDescriptions[program]
        );

    });

});


/* =========================================
   NEWS
========================================= */

const newsButtons =
    document.querySelectorAll(
        ".news-button"
    );


newsButtons.forEach(button => {

    button.addEventListener("click", () => {

        const title =
            button.dataset.news;

        openModal(`

            <span class="section-label">
                BERITA UNIVERSITAS
            </span>

            <h2 style="margin:10px 0;">
                ${title}
            </h2>

            <p style="color:#716a80;">
                Artikel ini merupakan contoh
                konten berita untuk website
                Universitas Zynx.
            </p>

            <br>

            <p>
                Konten berita sebenarnya dapat
                dikembangkan menggunakan database
                atau CMS ketika website sudah
                memiliki sistem backend.
            </p>

            <br>

            <strong>
                Universitas Zynx
            </strong>

        `);

    });

});


/* =========================================
   ACADEMIC BUTTONS
========================================= */

const calendarBtn =
    document.getElementById("calendarBtn");

if (calendarBtn) {

    calendarBtn.addEventListener("click", () => {

        openModal(`

            <h2>Kalender Akademik</h2>

            <p style="color:#716a80;">
                Contoh kalender akademik.
            </p>

            <br>

            <ul style="margin-left:20px;">

                <li>
                    Pendaftaran Semester
                </li>

                <li>
                    Perkuliahan Semester
                </li>

                <li>
                    Ujian Tengah Semester
                </li>

                <li>
                    Ujian Akhir Semester
                </li>

                <li>
                    Libur Semester
                </li>

            </ul>

        `);

    });

}


const libraryBtn =
    document.getElementById("libraryBtn");

if (libraryBtn) {

    libraryBtn.addEventListener("click", () => {

        openModal(`

            <h2>Perpustakaan</h2>

            <p style="color:#716a80;">
                Portal perpustakaan Universitas
                Zynx merupakan fitur yang dapat
                dikembangkan lebih lanjut.
            </p>

            <br>

            <button
                class="btn btn-primary"
                onclick="showToast('Portal perpustakaan sedang disiapkan.')">

                Buka Portal

            </button>

        `);

    });

}


/* =========================================
   SEARCH
========================================= */

if (searchBtn) {

    searchBtn.addEventListener("click", () => {

        searchOverlay.classList.add("active");

        body.classList.add("no-scroll");

        setTimeout(() => {

            searchInput.focus();

        }, 100);

    });

}


function closeSearchWindow() {

    searchOverlay.classList.remove("active");

    body.classList.remove("no-scroll");

    searchInput.value = "";

    searchResults.innerHTML = "";

}


if (closeSearch) {

    closeSearch.addEventListener(
        "click",
        closeSearchWindow
    );

}


searchOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            searchOverlay
        ) {

            closeSearchWindow();

        }

    }
);


/* DATABASE SEARCH SEDERHANA */

const searchableContent = [

    {
        title: "Program Studi Informatika",
        keyword: "informatika",
        target: "#program"
    },

    {
        title: "Sistem Informasi",
        keyword: "sistem informasi",
        target: "#program"
    },

    {
        title: "Kecerdasan Buatan",
        keyword: "kecerdasan buatan ai",
        target: "#program"
    },

    {
        title: "Fakultas Teknologi Informasi",
        keyword: "fakultas teknologi informasi",
        target: "#fakultas"
    },

    {
        title: "Akademik",
        keyword: "akademik kalender",
        target: "#akademik"
    },

    {
        title: "Berita",
        keyword: "berita",
        target: "#berita"
    },

    {
        title: "Penerimaan Mahasiswa Baru",
        keyword: "pmb pendaftaran",
        target: "#pmb"
    },

    {
        title: "Kontak Universitas",
        keyword: "kontak whatsapp email",
        target: "#kontak"
    }

];


searchInput.addEventListener(
    "input",
    () => {

        const query =
            searchInput.value
                .toLowerCase()
                .trim();

        searchResults.innerHTML = "";

        if (!query) return;


        const results =
            searchableContent.filter(
                item =>
                    item.title
                        .toLowerCase()
                        .includes(query)
                    ||
                    item.keyword
                        .includes(query)
            );


        if (!results.length) {

            searchResults.innerHTML = `

                <p style="margin-top:20px;">
                    Tidak ada hasil untuk
                    "<strong>${query}</strong>"
                </p>

            `;

            return;

        }


        results.forEach(item => {

            const result =
                document.createElement("div");

            result.className =
                "search-result";

            result.innerHTML = `
                <strong>
                    ${item.title}
                </strong>
            `;


            result.addEventListener(
                "click",
                () => {

                    closeSearchWindow();

                    document
                        .querySelector(item.target)
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                }
            );


            searchResults.appendChild(result);

        });

    }
);


/* =========================================
   CONTACT → WHATSAPP
========================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();

        const email =
            document
                .getElementById("email")
                .value
                .trim();

        const purpose =
            document
                .getElementById("purpose")
                .value;

        const message =
            document
                .getElementById("message")
                .value
                .trim();


        if (
            !name ||
            !email ||
            !purpose ||
            !message
        ) {

            showToast(
                "Mohon lengkapi semua data."
            );

            return;

        }


        const whatsappMessage =
            `Halo Universitas Zynx,

Nama: ${name}
Email: ${email}
Keperluan: ${purpose}

Pesan:
${message}`;


        const url =
            "https://wa.me/6285263108997?text=" +
            encodeURIComponent(
                whatsappMessage
            );


        window.open(
            url,
            "_blank"
        );


        contactForm.reset();


        showToast(
            "Membuka WhatsApp..."
        );

    }
);


/* =========================================
   TOAST
========================================= */

let toastTimer;


function showToast(message) {

    toast.textContent = message;

    toast.classList.add("active");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "active"
            );

        }, 2500);

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }


        closeModalWindow();

        closeSearchWindow();

    }
);


/* =========================================
   CLOSE NAV WHEN CLICK OUTSIDE
========================================= */

document.addEventListener(
    "click",
    event => {

        if (
            navbar.classList.contains("active") &&
            !navbar.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {

            navbar.classList.remove("active");

        }

    }
);