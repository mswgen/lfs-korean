(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{411:function(s,t,a){"use strict";a.r(t);var e=a(26),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"binutils-2-36-1-pass-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binutils-2-36-1-pass-1"}},[s._v("#")]),s._v(" Binutils 2.36.1 (Pass 1)")]),s._v(" "),a("p",[s._v("Binutils 패키지는 오브젝트 파일을 다루기 위한 링커, 어셈블러 등의 도구를 제공합니다.")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("평균 빌드 시간")]),s._v(" "),a("th",[s._v("필요한 디스크 공간")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("1 SBU")]),s._v(" "),a("td",[s._v("640MB")])])])]),s._v(" "),a("h2",{attrs:{id:"크로스-binutils의-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#크로스-binutils의-설치"}},[s._v("#")]),s._v(" 크로스 Binutils의 설치")]),s._v(" "),a("p",[s._v("GCC와 Glibc가 사용할 기능을 결정하기 위해 링커와 어셈블러를 활용한 테스트를 진행하기 때문에 처음으로 컴파일됩니다.")]),s._v(" "),a("p",[s._v("Binutils 문서는 Binutils를 별도 디렉토리에서 빌드하는 것을 권장합니다.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" build\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" build\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("참고")]),s._v(" "),a("p",[s._v("SBU를 계산하려면 "),a("code",[s._v("time")]),s._v(" 명령어를 통해 "),a("code",[s._v("time { ../configure ... && make && make install; }")]),s._v(" 형식으로 명령어를 실행하는 것을 권장합니다.")])]),s._v(" "),a("p",[s._v("Binutils의 컴파일을 준비합니다:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/configure --prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v("/tools       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n             --with-sysroot"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n             --target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS_TGT")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n             --disable-nls              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n             --disable-werror\n")])])]),a("p",[a("strong",[s._v("configure 옵션의 의미")])]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("--prefix=$LFS/tools")])]),s._v(" "),a("p",[s._v("이는 configure 스크립트가 binutils 프로그램을 "),a("code",[s._v("$LFS/tools")]),s._v(" 디렉토리에 설치하도록 합니다.")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("--with-systoot=$LFS")]),s._v("\n크로스 컴파일을 위해, 이는 빌드 시스템에게 필요한 타겟 시스템 라이브러리를 $LFS 내부에서 찾도록 합니다.")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("--target=$LFS_TGT")]),s._v(" "),a("code",[s._v("LFS_TGT")]),s._v(" 변수의 시스템 설명은 "),a("code",[s._v("config.guess")]),s._v(" 스크립트에서 반환하는 값과 약간 다르므로 이 옵션은 "),a("code",[s._v("configure")]),s._v(" 스크립트에 크로스 링커를 빌드하기 위해 binutils의 빌드 시스템을 조정하도록 지시합니다.")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("--disable-nls")])]),s._v(" "),a("p",[s._v("임시 도구에 i18n이 필요하지 않기 때문에 지역화를 끕니다.")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("--disable-werror")])]),s._v(" "),a("p",[s._v("이는 호스트 컴파일러에서의 경고에 의해 빌드가 멈추는 것을 방지합니다.")])])]),s._v(" "),a("p",[s._v("패키지를 컴파일하십시오:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])])]),a("p",[s._v("패키지를 설치하십시오:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),a("p",[s._v("이 패키지의 자세한 내용은 "),a("RouterLink",{attrs:{to:"/8/18.html"}},[s._v("여기")]),s._v("를 참고하십시오.")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);