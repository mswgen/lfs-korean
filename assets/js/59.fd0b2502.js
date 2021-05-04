(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{248:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"binutils-2-36-1-pass-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binutils-2-36-1-pass-2"}},[s._v("#")]),s._v(" Binutils 2.36.1 (Pass 2)")]),s._v(" "),a("p",[s._v("Binutils 패키지는 오브젝트 파일을 다루기 위한 링커, 어셈블러 등의 도구를 제공합니다.")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("평균 빌드 시간")]),s._v(" "),a("th",[s._v("필요한 디스크 공간")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("1.3 SBU")]),s._v(" "),a("td",[s._v("517MB")])])])]),s._v(" "),a("h2",{attrs:{id:"binutils의-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binutils의-설치"}},[s._v("#")]),s._v(" Binutils의 설치")]),s._v(" "),a("p",[s._v("별도의 빌드 디렉토리를 다시 만드십시오:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" build\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" build\n")])])]),a("p",[s._v("Binutils의 컴파일을 준비하십시오:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/configure --prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n             --build"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/config.guess"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n             --host"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS_TGT")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n             --disable-nls              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n             --enable-shared            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n             --disable-werror           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n             --enable-64-bit-bfd\n")])])]),a("p",[a("strong",[s._v("새 configure 옵션의 의미")])]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("--enable-shared")])]),s._v(" "),a("p",[a("code",[s._v("libbfd")]),s._v("를 공유 라이브러리로 빌드합니다.")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("--enable-64-bit-bfd")])]),s._v(" "),a("p",[s._v("64비트 미만 시스템에서 64비트 지원을 사용합니다. 64비트 시스템에서는 필요하지 않지만 무해합니다.")])])]),s._v(" "),a("p",[s._v("패키지를 컴파일하십시오:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])])]),a("p",[s._v("패키지를 설치하고, "),a("code",[s._v("libctf.so")]),s._v("가 호스트 배포판의 zlib과 링크하는 것에 대한 차선책을 적용하십시오:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DESTDIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -vm755 libctf/.libs/libctf.so.0.0.0 "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v("/usr/lib\n")])])]),a("p",[s._v("이 패키지의 자세한 내용은 "),a("RouterLink",{attrs:{to:"/8/18.html"}},[s._v("여기")]),s._v("를 참고하십시오.")],1)])}),[],!1,null,null,null);t.default=e.exports}}]);