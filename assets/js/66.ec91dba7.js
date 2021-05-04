(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{255:function(s,a,t){"use strict";t.r(a);var e=t(3),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"file-5-39"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-5-39"}},[s._v("#")]),s._v(" File 5.39")]),s._v(" "),t("p",[s._v("File 패키지는 주어진 파일의 타입을 결정하기 위한 유틸리티를 제공합니다.")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("평균 빌드 시간")]),s._v(" "),t("th",[s._v("필요한 디스크 공간")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("0.2 SBU")]),s._v(" "),t("td",[s._v("31MB")])])])]),s._v(" "),t("h2",{attrs:{id:"file의-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file의-설치"}},[s._v("#")]),s._v(" File의 설치")]),s._v(" "),t("p",[s._v("호스트의 "),t("code",[s._v("file")]),s._v(" 명령어는 서명 파일을 만들기 위해 지금 빌드하고 있는 것과 같은 버전이어야 합니다. 빌드하려면 아래 명령어를 실행하십시오:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" build\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushd")]),s._v(" build\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/configure --disable-"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("b,x,"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("zlib "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n             --disable-libseccomp\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("popd")]),s._v("\n")])])]),t("p",[t("strong",[s._v("새 configure 옵션의 의미")])]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("--disable-*")])]),s._v(" "),t("p",[s._v("구성 스크립트는 해당하는 라이브러리가 존재한다면 몇몇 패키지를 호스트 배포판에서 사용하려고 시도합니다. 이는 라이브러리 파일이 존재하지만 해당하는 헤더 파일이 없다면 컴파일에 실패할 수 있습니다. 이 옵션은 호스트에서 이러한 필요 없는 기능을 사용하지 않도록 합니다.")])])]),s._v(" "),t("p",[s._v("File의 컴파일을 준비하십시오:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("./configure --prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr --host"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS_TGT")]),s._v(" --build"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("./config.guess"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])])]),t("p",[s._v("패키지를 컴파일하십시오:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FILE_COMPILE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/build/src/file\n")])])]),t("p",[s._v("패키지를 설치하십시오:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DESTDIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),t("p",[s._v("이 패키지의 자세한 내용은 "),t("RouterLink",{attrs:{to:"/8/10.html"}},[s._v("여기")]),s._v("를 참고하십시오.")],1)])}),[],!1,null,null,null);a.default=r.exports}}]);