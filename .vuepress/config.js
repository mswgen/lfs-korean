module.exports = {
    title: 'Linux From Scratch Korean',
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/lfs-korean/',

    watch: {
        $page(newPage, oldPage) {
            if (newPage.key !== oldPage.key) {
                requestAnimationFrame(() => {
                    if (this.$route.hash) {
                        const element = document.getElementById(this.$route.hash.slice(1));

                        if (element && element.scrollIntoView) {
                            element.scrollIntoView();
                        }
                    }
                });
            }
        }
    },

    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-multimd-table'), {
                rowspan: true,
            });
        }
    },

    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/mswgen/lfs-korean',
        logo: 'homepage.png',
        nav: [{
            text: '기타 LFS(영문)',
            ariaLabel: 'Language Menu',
            items: [{
                text: 'LFS 홈페이지',
                link: 'https://linuxfromscratch.org/'
            },
            {
                text: 'LFS',
                link: 'https://linuxfromscratch.org/lfs/'
            },
            {
                text: 'BLFS',
                link: 'https://linuxfromscratch.org/blfs/'
            },
            {
                text: 'ALFS',
                link: 'https://linuxfromscratch.org/alfs/'
            },
            {
                text: 'CLFS',
                link: 'https://linuxfromscratch.org/clfs/'
            },
            {
                text: 'Hints',
                link: 'https://linuxfromscratch.org/hints/'
            },
            {
                text: 'Patches',
                link: 'https://linuxfromscratch.org/patches/'
            },
            ]
        },
        ],
        sidebar: [{
            title: '머리말',
            collapsable: false,
            children: [
                '/0/1',
                '/0/2',
                '/0/3',
                '/0/4',
                '/0/5',
                '/0/6',
                '/0/7',
                '/0/8'
            ]

        },
        {
            title: 'I. 개요',
            collapsable: false,
            children: [{
                title: '1. 개요',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/1/1',
                    '/1/2',
                    '/1/3',
                    '/1/4'
                ],
            }]
        },
        {
            title: 'II. 빌드 준비',
            collapsable: false,
            children: [{
                title: '2. 호스트 시스템 준비',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/2/1',
                    '/2/2',
                    '/2/3',
                    '/2/4',
                    '/2/5',
                    '/2/6',
                    '/2/7'
                ]
            },
            {
                title: '3. 패키지와 패치',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/3/1',
                    '/3/2',
                    '/3/3'
                ]
            },
            {
                title: '4. 마지막 준비',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/4/1',
                    '/4/2',
                    '/4/3',
                    '/4/4',
                    '/4/5',
                    '/4/6'
                ]
            }]
        },
        {
            title: 'III. LFS 크로스 툴체인과 임시 도구 빌드',
            collapsable: false,
            children: [
                {
                    title: '5. 크로스 툴체인 컴파일',
                    sidebarDepth: 1,
                    collapsable: true,
                    children: [
                        '/5/1',
                        '/5/2',
                        '/5/3',
                        '/5/4',
                        '/5/5',
                        '/5/6'
                    ]
                },
                {
                    title: '6. 임시 도구 크로스 컴파일',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        '/6/1',
                        '/6/2',
                        '/6/3',
                        '/6/4',
                        '/6/5',
                        '/6/6',
                        '/6/7',
                        '/6/8',
                        '/6/9',
                        '/6/10',
                        '/6/11',
                        '/6/12',
                        '/6/13',
                        '/6/14',
                        '/6/15',
                        '/6/16',
                        '/6/17',
                        '/6/18'
                    ]
                },
                {
                    title: '7. chroot 진입과 추가적인 임시 도구 빌드',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        '/7/1',
                        '/7/2',
                        '/7/3',
                        '/7/4',
                        '/7/5',
                        '/7/6',
                        '/7/7'
                    ]
                }
            ]
        },
        {
            title: 'IV. LFS 시스템 빌드',
            collapsable: false,
            children: [
                {
                    title: '8. 기본 시스템 소프트웨어 설치',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: (() => {
                        let retn = [];
                        for (let i = 1; i <= 77; i++) {
                            retn.push(`/8/${i}`);
                        }
                        return retn;
                    })()
                },
                {
                    title: '9. 시스템 구성',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        '/9/1',
                        '/9/2',
                        '/9/3',
                        '/9/4',
                        '/9/5',
                        '/9/6',
                        '/9/7',
                        '/9/8',
                        '/9/9',
                        '/9/10'
                    ]
                },
                {
                    title: '10. LFS 시스템을 부팅 가능하도록 만들기',
                    sidebarDepth: 1,
                    collapsable: true,
                    children: [
                        '/10/1',
                        '/10/2',
                        '/10/3',
                        '/10/4'
                    ]
                },
                {
                    title: '11. 끝',
                    sidebarDepth: 1,
                    collapsable: true,
                    children: [
                        '/11/1',
                        '/11/2',
                        '/11/3',
                        '/11/4'
                    ]
                }
            ]
        },
        {
            title: 'V. 부록',
            collapsable: false,
            children: [
                '/append/1',
                '/append/2',
                '/append/3',
                '/append/4',
                '/append/5'
            ]
        }]
    },
    plugins: [
        '@vuepress/plugin-back-to-top',
        'vuepress-plugin-smooth-scroll',
        ['vuepress-plugin-medium-zoom',
            {
                selector: "img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }],
    ],
    locales: {
        '/': {
            lang: 'ko-KR'
        }
    }
}
