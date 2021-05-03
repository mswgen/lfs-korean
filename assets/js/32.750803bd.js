(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{397:function(v,t,_){"use strict";_.r(t);var s=_(26),e=Object(s.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"새-파티션-생성"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#새-파티션-생성"}},[v._v("#")]),v._v(" 새 파티션 생성")]),v._v(" "),_("p",[v._v("대부분의 운영 체제처럼, LFS는 주로 별도의 파티션에 설치됩니다. LFS 시스템을 빌드하는 데 권장된 접근은 가능한 빈 파티션을 사용하거나, 할당되지 않은 공간이 있다면 새 파티션을 만드는 것입니다.")]),v._v(" "),_("p",[v._v("최소한의 시스템은 약 10GB의 파티션이 필요합니다. 이는 모든 소스 타르볼을 저장하고 패키지를 컴파일하는 데에 충분합니다. 하지만, LFS 시스템이 주 리눅스 시스템이 될 예정이라면, 추가 디스크 공간이 필요한 추가 소프트웨어가 설치될 것입니다. 이러한 경우 약 30GB가 적절한 크기입니다. LFS 시스템 자체는 공간을 많이 사용하지 않습니다. 이 요구 사항의 대부분은 충분한 빈 임시 디스크와 LFS 후의 추가 패키지 설치를 위한 공간입니다. 추가로, 패키지의 컴파일은 패키지 설치 후 제거될 많은 디스크 공간이 필요합니다.")]),v._v(" "),_("p",[v._v("항상 컴파일하는 데 충분한 RAM이 있지는 않기 때문에, 작은 디스크 파티션을 "),_("code",[v._v("swap")]),v._v(" 공간으로 사용하는 것이 권장됩니다. 이는 커널이 잘 사용되지 않는 데이터를 저장해서 액티브 프로세스에 더 많은 메모리를 주기 위해 사용합니다. LFS 시스템의 "),_("code",[v._v("swap")]),v._v(" 파티션은 호스트 시스템이 사용하는 것을 같이 사용할 수 있으며, 이 경우 새 파티션을 만들 필요가 없습니다.")]),v._v(" "),_("p",[_("code",[v._v("cfdisk")]),v._v("나 "),_("code",[v._v("fdisk")]),v._v(" 등의 디스크 파티셔닝 프로그램을 새 파티션이 생성될 디스크의 이름(예를 들어 주 SCSI/SATA 디바이스의 경우 "),_("code",[v._v("/dev/sda")]),v._v(", 주 NVME 디바이스의 경우 "),_("code",[v._v("/dev/nvme0n1")]),v._v(")을 명령줄 옵션으로 해서 시작하십시오. 리눅스 네이티브 파티션과 필요하다면 "),_("code",[v._v("swap")]),v._v(" 파티션을 생성하십시오. 필요하다면, 이 프로그램을 사용하는 방법을 모르겠다면, "),_("code",[v._v("cfdisk(8)")]),v._v("나 "),_("code",[v._v("fdisk(8)")]),v._v("을 참고하십시오.")]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("참고")]),v._v(" "),_("p",[v._v("숙련된 사용자의 경우, 다른 파티셔닝 스키마도 가능합니다. 새 LFS 시스템은 소프트웨어 "),_("a",{attrs:{href:"http://www.linuxfromscratch.org/blfs/view/10.1/postlfs/raid.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("RAID"),_("OutboundLink")],1),v._v(" 배열이나 "),_("a",{attrs:{href:"http://www.linuxfromscratch.org/blfs/view/10.1/postlfs/aboutlvm.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("LVM"),_("OutboundLink")],1),v._v(" 논리 볼륨에 있을 수도 있습니다. 하지만, 이 옵션 중 일부는 심화 주제인 "),_("a",{attrs:{href:"http://www.linuxfromscratch.org/blfs/view/10.1/postlfs/initramfs.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("initramfs"),_("OutboundLink")],1),v._v("가 필요합니다. 이러한 파티셔닝 방법은 초보 LFS 사용자에게는 권장되지 않습니다.")])]),v._v(" "),_("p",[v._v("새 파티션의 이름("),_("code",[v._v("sda5")]),v._v(", "),_("code",[v._v("nvme0n1p5")]),v._v(" 등)을 기억하십시오. 이 책은 이를 LFS 파티션으로 언급합니다. 또한 "),_("em",[_("code",[v._v("swap")])]),v._v(" 파티션의 이름을 기억하십시오. 이는 나중에 "),_("code",[v._v("/etc/fstab")]),v._v(" 파일에 필요합니다.")]),v._v(" "),_("h2",{attrs:{id:"기타-파티션"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#기타-파티션"}},[v._v("#")]),v._v(" 기타 파티션")]),v._v(" "),_("p",[v._v("시스템 파티셔닝에 대한 조언 요청은 LFS 메일링 리스트에 게시되는 경우가 많습니다. 이것은 매우 주관적인 주제입니다. 대부분의 배포판의 기본값은 하나의 작은 swap 파티션을 제외하고 전체 드라이브를 사용하는 것입니다. 이는 여러 가지 이유로 LFS에 최적이 아닙니다. 따라서 유연성이 저하되고, 여러 배포판 또는 LFS 구축에 걸쳐 데이터를 공유하기가 더욱 어려워지며, 백업에 시간이 더 많이 소요되며, 파일 시스템 구조의 비효율적인 할당을 통해 디스크 공간을 낭비할 수 있습니다.")]),v._v(" "),_("h3",{attrs:{id:"루트-파티션"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#루트-파티션"}},[v._v("#")]),v._v(" 루트 파티션")]),v._v(" "),_("p",[v._v("약 20GB의 루트 LFS 파티션("),_("code",[v._v("/root")]),v._v(" 디렉토리가 아님)은 대부분의 시스템에 적합합니다. 이는 LFS와 BLFS 대부분을 빌드하는 데 충분하면서도, 실험용으로 여러 파티션을 만들 수 있을 만큼 작습니다.")]),v._v(" "),_("h3",{attrs:{id:"swap-파티션"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#swap-파티션"}},[v._v("#")]),v._v(" swap 파티션")]),v._v(" "),_("p",[v._v("대부분의 배포판은 자동으로 swap 파티션을 만듭니다. 일반적으로 swap 파티션의 권장되는 크기는 물리 RAM 용량의 2배입니다. 하지만, 이는 거의 필요하지 않습니다. 만약 디스크 공간이 제한적이라면, swap 파티션을 2GB로 만들고 디스크 스왑핑의 양을 측정하십시오.")]),v._v(" "),_("p",[v._v("Linux의 최대 절전 모드 기능(디스크로 중단)을 사용하려면 시스템을 끄기 전에 RAM의 내용을 swap 파티션에 기록합니다. 이 경우 swap 파티션 크기는 시스템의 설치된 RAM 크기 이상이어야 합니다.")]),v._v(" "),_("p",[v._v("스왑핑은 좋지 않습니다. 기존 하드 디스크의 경우 일반적으로 디스크 활동을 듣고 시스템이 명령에 어떻게 반응하는지 관찰하기만 하면 시스템이 스왑핑 중인지 여부를 알 수 있습니다. SSD 드라이브의 경우 스와핑 소리를 들을 수 없지만 "),_("code",[v._v("top")]),v._v("이나 "),_("code",[v._v("free")]),v._v(" 프로그램에서 사용 중인 swap 공간의 양을 알 수 있습니다. 가능하면 swap 파티션에 SSD 드라이브를 사용하지 않도록 해야 합니다. 스왑핑에 대한 첫 번째 대응은 5GB 파일을 편집하는 것과 같은 불합리한 명령을 확인하는 것입니다. 스왑핑이 일반적인 경우 시스템에서 RAM을 더 구입하는 것이 가장 좋습니다.")]),v._v(" "),_("h3",{attrs:{id:"grub-bios-파티션"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#grub-bios-파티션"}},[v._v("#")]),v._v(" GRUB BIOS 파티션")]),v._v(" "),_("p",[_("em",[v._v("부팅 디스크")]),v._v("가 GUID 파티션 테이블(GPT)로 파티셔닝되었다면, 작은, 주로 1MB의 파티션이 존재하지 않는다면 만들어야 합니다. 이 파티션은 포맷되지 않지만, GRUB이 부트로더의 설치 중에 사용 가능해야 합니다. 이 파티션은 일반적으로 "),_("code",[v._v("fdisk")]),v._v("를 사용한다면 "),_("code",[v._v("BIOS Boot")]),v._v("라벨, "),_("code",[v._v("gdisk")]),v._v("를 사용한다면 "),_("code",[v._v("EF02")]),v._v(" 코드를 사용합니다.")]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("참고")]),v._v(" "),_("p",[v._v("Grub BIOS 파티션은 BIOS가 시스템을 부팅하는 데 사용하는 디스크의 첫 번째 파티션이어야 합니다. 이는 LFS 루트 파티션이 있는 드라이브와 같을 필요는 없습니다. 일부 시스템의 디스크는 다른 파티션 테이블 형식을 사용할 수도 있습니다. 이 파티션의 조건은 부팅 디스크의 파티션 테이블 형식에 의존합니다.")])]),v._v(" "),_("p",[v._v("완전한 UEFI-GPT 부팅을 원한다면 이 파티션 대신 EFI 시스템 파티션이 필요합니다. 이는 약 100~500MB의 용량이 필요하며, 첫 번째 파티션이어야 합니다. 이 파티션은 fat32("),_("code",[v._v("vfat")]),v._v(")으로 포맷되어야 하며, "),_("code",[v._v("fdisk")]),v._v("의 경우 "),_("code",[v._v("EFI System Partition")]),v._v(" 라벨, "),_("code",[v._v("gdisk")]),v._v("의 경우 "),_("code",[v._v("EF00")]),v._v(" 코드를 사용합니다.")]),v._v(" "),_("h3",{attrs:{id:"기타-파티션-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#기타-파티션-2"}},[v._v("#")]),v._v(" 기타 파티션")]),v._v(" "),_("p",[v._v("필요하지 않지만 디스크 레이아웃을 설계할 때 고려해야 할 몇 가지 다른 파티션이 있습니다. 다음 목록은 포괄적이지는 않지만 가이드로 사용됩니다.")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("/boot - 적극 추천합니다. 이 파티션을 사용하여 커널 및 기타 부팅 정보를 저장할 수 있습니다. 큰 디스크의 잠재적인 부팅 문제를 최소화하려면 이 파티션을 첫 번째 디스크 드라이브의 첫 번째(EFI 시스템 파티션 혹은 BIOS Boot 파티션 제외) 파티션으로 만드십시오. 파티션 크기가 200MB이면 충분합니다.")])]),v._v(" "),_("li",[_("p",[v._v("/home – 강력 추천합니다. 여러 배포판 또는 LFS 빌드에서 home 디렉토리 및 사용자 커스터마이징을 공유합니다. 크기는 일반적으로 상당히 크며 사용 가능한 디스크 공간에 따라 다릅니다.")])]),v._v(" "),_("li",[_("p",[v._v("/usr – 씬 클라이언트 또는 디스크 없는 워크스테이션용 서버를 제공하는 경우 일반적으로 별도의 /usr 파티션이 사용됩니다. 일반적으로 LFS에는 필요하지 않습니다. 10GB면 대부분의 설치를 처리할 수 있습니다.")])]),v._v(" "),_("li",[_("p",[v._v("/opt – 이 디렉토리는 파일을 /usr 계층에 포함시키지 않고 GNOME 또는 KDE와 같은 대형 패키지의 여러 버전을 설치할 수 있는 BLFS에 가장 유용합니다. 사용할 경우 일반적으로 5~10GB가 적당합니다.")])]),v._v(" "),_("li",[_("p",[v._v("/tmp – 별도의 /tmp 디렉토리는 드물지만 씬 클라이언트를 구성하는 경우 유용합니다. 이 파티션(사용할 경우)은 일반적으로 몇 GB면 충분합니다.")])]),v._v(" "),_("li",[_("p",[v._v("/usr/src – 이 파티션은 BLFS 소스 파일을 저장하고 LFS 빌드 간에 공유할 수 있는 위치를 제공하는 데 매우 유용합니다. 또한 BLFS 패키지를 빌드하는 위치로 사용할 수 있습니다. 30-50GB의 상당히 큰 파티션은 충분한 공간을 제공합니다.")])])]),v._v(" "),_("p",[v._v("부팅할 떄 자동으로 마운트될 파티션은 "),_("code",[v._v("/etc/fstab")]),v._v("에 명시되어야 합니다. 파티션을 명시하는 것에 관한 자세한 내용은 "),_("RouterLink",{attrs:{to:"/10/2.html"}},[v._v("10.2장 - /etc/fstab 파일 생성")]),v._v("에 있습니다.")],1)])}),[],!1,null,null,null);t.default=e.exports}}]);