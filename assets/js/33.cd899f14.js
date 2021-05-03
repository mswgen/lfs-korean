(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{398:function(e,t,a){"use strict";a.r(t);var v=a(26),s=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"파티션에-파일-시스템-만들기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#파티션에-파일-시스템-만들기"}},[e._v("#")]),e._v(" 파티션에 파일 시스템 만들기")]),e._v(" "),a("p",[e._v("이제 빈 파티션이 만들어졌기 때문에, 파일 시스템이 생성될 수 있습니다. LFS는 리눅스 커널이 인식하는 모든 파일 시스템을 사용할 수 있지만, 가장 흔한 것은 ext3과 ext4입니다. 파일 시스템의 선택은 복잡할 수 있고 파티션의 크기와 내부 파일의 특성에 따라 결정됩니다. 예를 들어:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("ext2")]),e._v(" "),a("p",[e._v("/boot 등의 자주 변경되지 않는 작은 파티션에 사용될 수 있으나, 권장하지 않습니다.")])]),e._v(" "),a("li",[a("p",[e._v("ext3")]),e._v(" "),a("p",[e._v("비정상적인 종료 등의 경우 파티션의 상태를 복원하는 것을 도와주는 저널링을 포함하는 ext2의 차기 버전입니다. 이는 종종 일반 파일 시스템에 사용되지만 권장하지 않습니다.")])]),e._v(" "),a("li",[a("p",[e._v("ext4")]),e._v(" "),a("p",[e._v("ext 파일 시스템의 최신 버전입니다. 이는 나노초 타임스탬프, 큰 파일(16TB)의 생성과 사용, 그리고 속도 개선 등의 몇몇 새로운 기능을 제공합니다. ext2나 ext3보다 ext4가 권장됩니다. 대부분의 배포판이 사용합니다.")])])]),e._v(" "),a("p",[e._v("FAT32, NTFS, ReiserFS, JFS, XFS, Btrfs, ZFS 등의 다른 파일 시스템은 특정 용도에 권장됩니다. 이러한 파일 시스템에 대한 자세한 정보는 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Comparison_of_file_systems",target:"_blank",rel:"noopener noreferrer"}},[e._v("여기"),a("OutboundLink")],1),e._v("에서 확인할 수 있습니다.")]),e._v(" "),a("p",[e._v("LFS는 루트(/) 파일 시스템이 ext4라고 가정합니다. "),a("code",[e._v("ext4")]),e._v(" 파일 시스템을 LFS 파티션에 만드려면, 아래 명령어를 실행하십시오:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mkfs -v -t ext4 /dev/<xxx>\n")])])]),a("p",[a("code",[e._v("<xxx>")]),e._v("를 LFS 파티션의 이름으로 변경하십시오.")]),e._v(" "),a("p",[e._v("이미 있는 "),a("code",[e._v("swap")]),e._v(" 파티션을 사용한다면, 이를 포맷할 필요는 없습니다. 새 "),a("code",[e._v("swap")]),e._v(" 파티션을 만들었다면, 이는 아래 명령어로 초기화되어야 합니다:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mkswap /dev/<yyy>\n")])])]),a("p",[a("code",[e._v("<yyy>")]),e._v("를 "),a("code",[e._v("swap")]),e._v(" 파티션의 이름으로 변경하십시오.")]),e._v(" "),a("p",[e._v("완전한 UEFI-GPT 시스템을 원한다면 EFI 시스템 파티션이 필요합니다. 이 파티션을 새로 만들었다면 아래 명령어로 포맷하십시오:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mkfs.vfat -F32 -v /dev/<zzz>\n")])])]),a("p",[a("code",[e._v("<zzz>")]),e._v("를 파티션의 이름으로 변경하십시오.")])])}),[],!1,null,null,null);t.default=s.exports}}]);