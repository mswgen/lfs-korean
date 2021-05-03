(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{202:function(t,e,s){"use strict";s.r(e);var r=s(3),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"lfs와-표준"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lfs와-표준"}},[t._v("#")]),t._v(" LFS와 표준")]),t._v(" "),s("p",[t._v("LFS의 구조는 리눅스 표준을 가능한 한 최대한 따릅니다. 주요 표준은 아래와 같습니다:")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"http://pubs.opengroup.org/onlinepubs/9699919799/",target:"_blank",rel:"noopener noreferrer"}},[t._v("POSIX.1-2008"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"http://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("FileSystem Hierarchy Standard(FHS) 버전 3.0"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"http://refspecs.linuxfoundation.org/lsb.shtml",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux Standard Base(LSB) 버전 5.0(2015)"),s("OutboundLink")],1)])])]),t._v(" "),s("p",[t._v("LSB는 4개의 표준으로 나뉘어져 있습니다: Core, Desktop, Runtime Languages, Imaging입니다. 일반 조건 외에도 아키텍쳐별 조건이 있습니다. 또한 Gtk3과 Graphics 2가지의 시험적 영역이 있습니다. LFS는 전 섹션에서 언급한 아키덱쳐에 부합하도록 노력합니다.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("참고")]),t._v(" "),s("p",[t._v("많은 사람들은 LSB의 조건에 동의하지 않습니다. 이것을 정의하는 주된 목적은 사유 소프트웨어가  호환되는 시스템에서 잘 설치, 실행될 수 있도록 하는 것입니다. LFS가 소스 기반이기 때문에, 사용자는 어떤 패키지가 필요한 지에 대한 완전한 제어가 가능하고 많은 사람들은 LSB에 명시된 패키지 중 일부를 설치하지 않습니다.")])]),t._v(" "),s("p",[t._v("LSB 인증 테스트를 통과할 수 있는 완전한 LFS 시스템을 만드는 것은 가능하지만, LFS의 범위 밖에 있는 여러 추가 패키지가 필요합니다. 이러한 추가 패키지의 설치 방법은 BLFS에 있습니다.")]),t._v(" "),s("h2",{attrs:{id:"lsb-조건을-만족하기-위해-lfs에-있는-패키지"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lsb-조건을-만족하기-위해-lfs에-있는-패키지"}},[t._v("#")]),t._v(" LSB 조건을 만족하기 위해 LFS에 있는 패키지")]),t._v(" "),s("p",[s("em",[t._v("LSB Core")]),t._v(": Bash, Bc, Binutils, Coreutils, Diffutils, File, Findutils, Gawk, Grep, Gzip, M4, Man-DB, Ncurses, Procps, Psmisc, Sed, Shadow, Tar, Util-linux, Zlib")]),t._v(" "),s("p",[s("em",[t._v("LSB Desktop")]),t._v(": 없음")]),t._v(" "),s("p",[s("em",[t._v("LSB Runtime")]),t._v(": Perl")]),t._v(" "),s("p",[s("em",[t._v("LSB Imaging")]),t._v(": 없음")]),t._v(" "),s("p",[s("em",[t._v("LSB GTK3과 LSB Graphics(시험용)")]),t._v(": 없음")]),t._v(" "),s("h2",{attrs:{id:"lsb-조건을-만족하기-위해-blfs에-있는-패키지"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lsb-조건을-만족하기-위해-blfs에-있는-패키지"}},[t._v("#")]),t._v(" LSB 조건을 만족하기 위해 BLFS에 있는 패키지")]),t._v(" "),s("p",[s("em",[t._v("LSB Core")]),t._v(": At, Batch(At의 한 부분), Cpio, Ed, Fcrontab, LSB-Tools, NSPR, NSS, PAM, Pax, Sendmail (혹은 Postfix나 Exim), time")]),t._v(" "),s("p",[s("em",[t._v("LSB Desktop")]),t._v(": Alsa, ATK, Cairo, Desktop-file-utils, Freetype, Fontconfig, Gdk-pixbuf, Glib2, GTK+2, Icon-naming-utils, Libjpeg-turbo, Libpng, Libtiff, Libxml2, MesaLib, Pango, Xdg-utils, Xorg")]),t._v(" "),s("p",[s("em",[t._v("LSB Runtime Languages")]),t._v(": Python, Libxml2, Libxslt")]),t._v(" "),s("p",[s("em",[t._v("LSB Imaging")]),t._v(": CUPS, cups-filters, Ghostscript, SANE")]),t._v(" "),s("p",[s("em",[t._v("LSB GtK3과 LSB Graphics(시험용)")]),t._v(": GTK+3")]),t._v(" "),s("h2",{attrs:{id:"lsb-조건을-만족하는-데-필요하지만-lfs나-blfs에-없는-패키지"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lsb-조건을-만족하는-데-필요하지만-lfs나-blfs에-없는-패키지"}},[t._v("#")]),t._v(" LSB 조건을 만족하는 데 필요하지만 LFS나 BLFS에 없는 패키지")]),t._v(" "),s("p",[s("em",[t._v("LSB Core")]),t._v(": 없음")]),t._v(" "),s("p",[s("em",[t._v("LSB Desktop")]),t._v(": Qt4(Qt5가 제공됨)")]),t._v(" "),s("p",[s("em",[t._v("LSB Runtime Languages")]),t._v(": 없음")]),t._v(" "),s("p",[s("em",[t._v("LSB Imaging")]),t._v(": 없음")]),t._v(" "),s("p",[s("em",[t._v("LSB Gtk3과 LSB Graphics(시험용)")]),t._v(": 없음")])])}),[],!1,null,null,null);e.default=a.exports}}]);