(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{263:function(t,s,a){"use strict";a.r(s);var e=a(3),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"정리-및-임시-시스템-저장"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#정리-및-임시-시스템-저장"}},[t._v("#")]),t._v(" 정리 및 임시 시스템 저장")]),t._v(" "),a("p",[t._v("libtool .la 아카이브는 정적 라이브러리와 링크할 때만 필요합니다. 이는 동적 공유 라이브러리를 사용할 때 필요하지 않고, 특히 비 autotools 빌드 시스템의 경우, 잠재적으로 해롭습니다. chroot 안에서, 이러한 파일을 삭제하십시오:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" /usr/lib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(",exec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" -name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("*.la -delete\n")])])]),a("p",[t._v("임시 도구의 문서가 최종 시스템에 유지되는 것을 막고, 약 35MB를 절약하기 위해 삭제하십시오:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf /usr/share/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("info,man,doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/*\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("참고")]),t._v(" "),a("p",[t._v("이 섹션의 나머지는 모두 선택입니다. 8장에서 패키지를 설치하기 시작하면, 임시 도구는 덮어쓰기됩니다. 그러므로, 아래에 설명된 대로 임시 도구를 백업하는 것이 좋습니다. 나머지는 디스크 공간이 매우 부족할 때만 필요합니다.")])]),t._v(" "),a("p",[t._v("다음 단계는 chroot 환경 외부에서 수행됩니다. 즉, 계속하기 전에 먼저 chroot 환경을 나가야 합니다. 그 이유는 다음과 같습니다.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("개체를 조작하는 동안 이를 사용하지 않도록 합니다.")])]),t._v(" "),a("li",[a("p",[t._v("chroot 환경 외부의 파일 시스템 위치에 액세스하여 안전상의 이유로 "),a("code",[t._v("$LFS")]),t._v(" 계층 내에 배치해서는 안 되는 백업 아카이브를 저장/읽습니다.")])])]),t._v(" "),a("p",[t._v("chroot 환경을 나가고 커널 가상 파일 시스템을 마운트 해제합니다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("참고")]),t._v(" "),a("p",[t._v("다음 내용은 모두 "),a("code",[t._v("root")]),t._v(" 유저로 실행됩니다. 여기서 오류가 발생하면 호스트 시스템을 수정할 수 있으므로 실행할 명령에 각별히 주의하십시오. 환경 변수 "),a("code",[t._v("LFS")]),t._v("는 기본적으로 "),a("code",[t._v("lfs")]),t._v(" 유저에 설정되어 있지만 "),a("code",[t._v("root")]),t._v(" 유저에는 설정되어 있지 않을 수 있습니다. 명령을 "),a("code",[t._v("root")]),t._v(" 유저로 실행할 때마다 "),a("code",[t._v("LFS")]),t._v("를 설정했는지 확인하십시오. 이는 "),a("RouterLink",{attrs:{to:"/2/6.html"}},[t._v("2.6장 - $LFS 변수 설정")]),t._v("을 참고하십시오.")],1)]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("umount")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$LFS")]),t._v("/dev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("/pts,"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("umount")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$LFS")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("sys,proc,run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"떼어내기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#떼어내기"}},[t._v("#")]),t._v(" 떼어내기")]),t._v(" "),a("p",[t._v("LFS 파티션이 작다면, 필요하지 않은 내용을 삭제할 수 있습니다. 지금까지 빌드한 라이브러리와 실행 파일은 약 90MB의 필요하지 않은 디버깅 심볼을 포함합니다.")]),t._v(" "),a("p",[t._v("바이너리에서 디버깅 심볼을 떼어내십시오:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("strip --strip-debug "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$LFS")]),t._v("/usr/lib/*\nstrip --strip-unneeded "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$LFS")]),t._v("/usr/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(",s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("bin/*\nstrip --strip-unneeded "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$LFS")]),t._v("/tools/bin/*\n")])])]),a("p",[t._v("이 명령어는 파일 형식을 인식할 수 없다는 출력과 함께 몇몇 파일을 건너뜁니다. 이들의 대부분은 바이너리가 아닌 스크립트입니다.")]),t._v(" "),a("p",[t._v("라이브러리에 "),a("code",[t._v("--strip-unneeded")]),t._v("를 사용하지 "),a("em",[t._v("마십시오")]),t._v(". 정적 라이브러리가 파괴되고 툴체인 패키지를 처음부터 다시 빌드해야 합니다.")]),t._v(" "),a("p",[t._v("지금, 다음 장에서 GCC와 Glibc를 빌드하고 설치하는 데 필요한 최소 5GB가 chroot 파티션에 남아 있어야 합니다. 만약 Glibc를 빌드, 설치할 수 있다면, 나머지도 빌드, 설치할 수 있습니다. 남은 공간은 "),a("code",[t._v("df -h $LFS")]),t._v("를 통해 확인할 수 있습니다.")]),t._v(" "),a("h2",{attrs:{id:"백업"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#백업"}},[t._v("#")]),t._v(" 백업")]),t._v(" "),a("p",[t._v("이제 중요한 툴이 생성되었으므로 이제 백업에 대해 생각해 볼 때입니다. 이전에 빌드한 패키지에서 모든 검사가 성공적으로 통과되면 임시 도구가 양호한 상태로 유지되고 나중에 다시 사용할 수 있도록 백업될 수 있습니다. 이후 장에서 치명적인 오류가 발생할 경우 모든 것을 제거하고 처음부터 다시 시작하는 것이 복구에 가장 좋은 옵션인 것으로 드러나는 경우가 많습니다. 불행하게도, 이 경우 모든 임시 도구들도 제거됩니다. 성공적으로 빌드된 작업을 다시 실행하는 데 시간이 더 걸리지 않도록 하려면 백업을 준비하십시오.")]),t._v(" "),a("p",[a("code",[t._v("root")]),t._v(" 유저의 홈 디렉토리에 최소 600MB의 사용 가능한 디스크 공간(소스 타르볼이 백업 아카이브에 포함됨)이 있어야 합니다.")]),t._v(" "),a("p",[t._v("다음 명령을 실행하여 백업 아카이브를 생성하십시오:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$LFS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -cJpf "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/lfs-temp-tools-10.1-systemd.tar.xz "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),a("p",[a("code",[t._v("root")]),t._v(" 유저에 홈 디렉토리에 백업을 저장하지 않으려면 "),a("code",[t._v("$HOME")]),t._v("을 선택한 디렉토리로 변경하십시오.")]),t._v(" "),a("h2",{attrs:{id:"복구"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#복구"}},[t._v("#")]),t._v(" 복구")]),t._v(" "),a("p",[t._v("오류가 발생하여 다시 시작해야 하는 경우 이 백업을 사용하여 임시 도구를 복원하고 복구 시간을 절약할 수 있습니다. 소스는 "),a("code",[t._v("$LFS")]),t._v(" 아래에 있으므로 백업 아카이브에도 포함되므로 다시 다운로드할 필요가 없습니다. "),a("code",[t._v("$LFS")]),t._v("가 올바르게 설정되어 있는지 확인한 후 다음 명령을 실행하여 백업을 복원합니다.")]),t._v(" "),a("pre",[t._v("cd $LFS &&\nrm -rf ./* &&\ntar -xpf $HOME/lfs-temp-tools-10.1-systemd.tar.xz\n")]),t._v(" "),a("p",[t._v("다시 한번, 환경이 제대로 구성되었는지 확인한 다음, 시스템의 나머지를 빌드하십시오.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("중요")]),t._v(" "),a("p",[t._v("디버그 기호를 떼어내거나 백업을 생성하거나 복원을 사용하여 빌드를 재시작하기 위해 chroot 환경을 나간 경우 "),a("RouterLink",{attrs:{to:"/7/3.html"}},[t._v("7.3장 - 가상 커널 파일 시스템 준비")]),t._v("에 설명된 대로 지금 커널 가상 파일 시스템을 다시 마운트한 후 계속하기 전에 "),a("RouterLink",{attrs:{to:"/7/4.html"}},[t._v("chroot 환경에 다시 들어가야 합니다")]),t._v(".")],1)])])}),[],!1,null,null,null);s.default=v.exports}}]);