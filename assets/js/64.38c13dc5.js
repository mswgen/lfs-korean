(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{253:function(s,a,t){"use strict";t.r(a);var n=t(3),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"coreutils-8-32"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coreutils-8-32"}},[s._v("#")]),s._v(" Coreutils 8.32")]),s._v(" "),t("p",[s._v("Coreutils 패키지는 기본 시스템 특성에 관한 유틸리티를 제공합니다.")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("평균 빌드 시간")]),s._v(" "),t("th",[s._v("필요한 디스크 공간")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("0.5 SBU")]),s._v(" "),t("td",[s._v("170MB")])])])]),s._v(" "),t("h2",{attrs:{id:"coreutils의-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coreutils의-설치"}},[s._v("#")]),s._v(" Coreutils의 설치")]),s._v(" "),t("p",[s._v("Coreutils의 컴파일을 준비하십시오:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("./configure --prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr                     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n            --host"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS_TGT")]),s._v("                   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n            --build"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("build-aux/config.guess"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n            --enable-install-program"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hostname "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n            --enable-no-install-program"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kill,uptime\n")])])]),t("p",[t("strong",[s._v("configure 옵션의 의미")])]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("--enable-install-program=hostname")])]),s._v(" "),t("p",[s._v("이는 "),t("code",[s._v("hostname")]),s._v(" 바이너리를 빌드하고 설치합니다. 이는 기본적으로 꺼져 있지만 Perl 테스트 수트에 필요합니다.")])])]),s._v(" "),t("p",[s._v("패키지를 컴파일하십시오:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])])]),t("p",[s._v("패키지를 설치하십시오:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DESTDIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),t("p",[s._v("프로그램을 최종적으로 예상된 위치로 이동하십시오. 이는 임시 환경에서 필요하지 않지만, 일부 프로그램은 실행 파일의 위치를 하드코딩하기 때문에 필요합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v("/usr/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("cat,chgrp,chmod,chown,cp,date,dd,df,echo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v("/bin\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v("/usr/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("false,ln,ls,mkdir,mknod,mv,pwd,rm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v("/bin\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v("/usr/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("rmdir,stty,sync,true,uname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v("/bin\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v("/usr/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("head,nice,sleep,touch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("                    "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v("/bin\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v("/usr/bin/chroot                                     "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v("/usr/sbin\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -pv "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v("/usr/share/man/man8\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v("/usr/share/man/man1/chroot.1                        "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v("/usr/share/man/man8/chroot.8\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'s/"1"/"8"/\'')]),s._v("                                           "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LFS")]),s._v("/usr/share/man/man8/chroot.8\n")])])]),t("p",[s._v("이 패키지의 자세한 내용은 "),t("RouterLink",{attrs:{to:"/8/52.html"}},[s._v("여기")]),s._v("를 참고하십시오.")],1)])}),[],!1,null,null,null);a.default=r.exports}}]);