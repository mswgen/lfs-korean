(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{256:function(s,a,t){"use strict";t.r(a);var e=t(3),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"findutils-4-8-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#findutils-4-8-0"}},[s._v("#")]),s._v(" Findutils 4.8.0")]),s._v(" "),t("p",[s._v("Findutils 패키지는 파일을 찾기 위한 프로그램을 제공합니다. 이 프로그램은 디렉토리 트리를 재귀적으로 검색하고 데이터베이스(재귀적 찾기보다 빠르지만, 데이터베이스가 최근에 업데이트되지 않았으면 안정적이지 않음)를 만들고, 유지하고, 검색합니다.")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("평균 빌드 시간")]),s._v(" "),t("th",[s._v("필요한 디스크 공간")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("0.2 SBU")]),s._v(" "),t("td",[s._v("42MB")])])])]),s._v(" "),t("h2",{attrs:{id:"findutils의-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#findutils의-설치"}},[s._v("#")]),s._v(" Findutils의 설치")]),s._v(" "),t("p",[s._v("Findutils의 컴파일을 준비하십시오:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("./configure --prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n            --host"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS_TGT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n            --build"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("build-aux/config.guess"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])])]),t("p",[s._v("패키지를 컴파일하십시오:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])])]),t("p",[s._v("패키지를 설치하십시오:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DESTDIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),t("p",[s._v("실행 파일을 최종적으로 예상된 위치로 이동하십시오:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v("/usr/bin/find "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v("/bin\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s|find:="),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BINDIR}")]),s._v("|find:=/bin|'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v("/usr/bin/updatedb\n")])])]),t("p",[s._v("이 패키지의 자세한 내용은 "),t("RouterLink",{attrs:{to:"/8/56.html"}},[s._v("여기")]),s._v("를 참고하십시오.")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);