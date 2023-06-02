<template>
    <div class="">
        <div
            class="w-12/12 mx-auto flex-col gap-4 md:block hidden px-6 py-3 border-b-[1px] border-black/[0.1] md:flex hidden">
            <div class="flex items-center py-4">
                <div class="flex-1">
                    <NuxtLink to="/">
                        <img src="/images/airbnb-logo.png" alt="" class="w-[100px] shrink">
                    </NuxtLink>
                </div>
            </div>
        </div>
        {{ this.$store.state.dataCard }}
        <div class=" md:mx-auto md:my-4 md:my-14 flex flex-col md:gap-16 md:w-9/12 w-full px-4 md:px-14 md:px-0 my-16">
            <div
                class="w-full flex items-center justify-center text-center md:relative fixed top-0 left-0 w-full bg-white p-4 md:bg-transparent md:p-0 z-[20]">
                <h4
                    class="font-[500] text-lg md:text-3xl flex justify-center md:justify-start items-center gap-2 relative md:text-left text-center w-full block">
                    Konfirmasi dan bayar
                    <NuxtLink :to="'/product/details/' + $route.params.id">
                        <span class="absolute top-[50%] translate-y-[-50%] left-[10px] md:left-[-40px] z-[40]"><svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </span>
                    </NuxtLink>
                </h4>
            </div>
            <div class="flex gap-4 md:gap-20 items-start justify-start md:flex-row flex-col-reverse">
                <div class="flex items-start justify-start flex-col w-full gap-8">
                    <div
                        class="p-6 w-full border-[1px] border-black/[0.2] rounded-xl flex items-center justify-between md:flex hidden">
                        <div class="flex flex-col gap-2">
                            <h3 class="font-[500] text-[16px]">Produk Berkualitas</h3>
                            <p class="font-[400] text-[14px]">Produk dari brand {{ dataProduct.brand }} dengan harga
                                terjangkau {{ $route.query.quantity }}</p>
                        </div>
                        <div>
                            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                role="presentation" focusable="false"
                                style="display: block; height: 32px; width: 32px; fill: rgb(227, 28, 95); stroke: currentcolor;">
                                <g stroke="none">
                                    <path d="m32.62 6 9.526 11.114-18.146 23.921-18.147-23.921 9.526-11.114z"
                                        fill-opacity=".2"></path>
                                    <path
                                        d="m34.4599349 2 12.8243129 14.9616983-23.2842478 30.6928721-23.28424779-30.6928721 12.82431289-14.9616983zm-17.9171827 16h-12.52799999l18.25899999 24.069zm27.441 0h-12.528l-5.73 24.069zm-14.583 0h-10.802l5.4012478 22.684zm-15.92-12.86-9.30799999 10.86h11.89399999zm19.253-1.141h-17.468l2.857 12.001h11.754zm1.784 1.141-2.586 10.86h11.894z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="md:flex flex-col gap-6 w-full hidden">
                        <h4 class="font-[500] text-2xl">Detail Pemesanan</h4>
                        <div class="flex flex-col gap-1 relative w-full">
                            <h5 class="font-[600] text-[16px] text-black/[0.8]">Produk</h5>
                            <p class="font-[400] text-[15px] text-black">{{ dataProduct.title }}</p>
                            <p class="absolute top-[0%] translate-y-[-50%] right-[0px] font-[500] text-[16px] underline">
                                Edit</p>
                        </div>
                        <div class="flex flex-col gap-2 relative w-full">
                            <h5 class="font-[600] text-[16px] text-black/[0.8]">Brand</h5>
                            <p class="font-[400] text-[15px] text-black">{{ dataProduct.brand }}</p>
                            <p class="absolute top-[0%] translate-y-[-50%] right-[0px] font-[500] text-[16px] underline">
                                Edit</p>
                        </div>
                    </div>
                    <hr class="border-[0.5px] border-black/[0.05] w-full">
                    <div class="w-full flex flex-col gap-6">
                        <h4 class="font-[500] text-2xl">Masuk ke akun atau daftar untuk memesan</h4>
                        <div class="">
                            <div class="w-full relative">
                                <select name="" id=""
                                    class="w-full p-4 border-[1px] border-black/[0.1] rounded-ss-lg rounded-se-lg font-[400] relative appearance-none">
                                    <option value="indonesia">Indonesia (+62)</option>
                                    <option value="93AF">Afganistan (+93)</option>
                                    <option value="27ZA">Afrika Selatan (+27)</option>
                                    <option value="355AL">Albania (+355)</option>
                                    <option value="213DZ">Aljazair (+213)</option>
                                    <option value="1US">Amerika Serikat (+1)</option>
                                    <option value="376AD">Andorra (+376)</option>
                                    <option value="244AO">Angola (+244)</option>
                                    <option value="1AI">Anguilla (+1)</option>
                                    <option value="1AG">Antigua dan Barbuda (+1)</option>
                                    <option value="966SA">Arab Saudi (+966)</option>
                                    <option value="54AR">Argentina (+54)</option>
                                    <option value="374AM">Armenia (+374)</option>
                                    <option value="297AW">Aruba (+297)</option>
                                    <option value="61AU">Australia (+61)</option>
                                    <option value="43AT">Austria (+43)</option>
                                    <option value="994AZ">Azerbaijan (+994)</option>
                                    <option value="1BS">Bahama (+1)</option>
                                    <option value="973BH">Bahrain (+973)</option>
                                    <option value="880BD">Bangladesh (+880)</option>
                                    <option value="1BB">Barbados (+1)</option>
                                    <option value="31NL">Belanda (+31)</option>
                                    <option value="375BY">Belarus (+375)</option>
                                    <option value="32BE">Belgia (+32)</option>
                                    <option value="501BZ">Belize (+501)</option>
                                    <option value="229BJ">Benin (+229)</option>
                                    <option value="1BM">Bermuda (+1)</option>
                                    <option value="975BT">Bhutan (+975)</option>
                                    <option value="591BO">Bolivia (+591)</option>
                                    <option value="599BQ">Bonaire, Sint Eustatius, dan Saba (+599)</option>
                                    <option value="387BA">Bosnia dan Herzegovina (+387)</option>
                                    <option value="267BW">Botswana (+267)</option>
                                    <option value="55BR">Brasil (+55)</option>
                                    <option value="673BN">Brunei (+673)</option>
                                    <option value="359BG">Bulgaria (+359)</option>
                                    <option value="226BF">Burkina Faso (+226)</option>
                                    <option value="257BI">Burundi (+257)</option>
                                    <option value="235TD">Cad (+235)</option>
                                    <option value="420CZ">Ceko (+420)</option>
                                    <option value="56CL">Cile (+56)</option>
                                    <option value="242CG">Kongo (+242)</option>
                                    <option value="225CI">Côte d’Ivoire (+225)</option>
                                    <option value="599CW">Curaçao (+599)</option>
                                    <option value="243CD">Republik Demokratik Kongo (+243)</option>
                                    <option value="45DK">Denmark (+45)</option>
                                    <option value="1DM">Dominika (+1)</option>
                                    <option value="593EC">Ekuador (+593)</option>
                                    <option value="503SV">El Salvador (+503)</option>
                                    <option value="291ER">Eritrea (+291)</option>
                                    <option value="372EE">Estonia (+372)</option>
                                    <option value="268SZ">eSwatini (+268)</option>
                                    <option value="251ET">Etiopia (+251)</option>
                                    <option value="679FJ">Fiji (+679)</option>
                                    <option value="63PH">Filipina (+63)</option>
                                    <option value="358FI">Finlandia (+358)</option>
                                    <option value="241GA">Gabon (+241)</option>
                                    <option value="220GM">Gambia (+220)</option>
                                    <option value="995GE">Georgia (+995)</option>
                                    <option value="500GS">Georgia Selatan &amp; Kep. Sandwich Selatan (+500)</option>
                                    <option value="233GH">Ghana (+233)</option>
                                    <option value="350GI">Gibraltar (+350)</option>
                                    <option value="1GD">Grenada (+1)</option>
                                    <option value="299GL">Grinlandia (+299)</option>
                                    <option value="590GP">Guadeloupe (+590)</option>
                                    <option value="1GU">Guam (+1)</option>
                                    <option value="502GT">Guatemala (+502)</option>
                                    <option value="44GG">Guernsey (+44)</option>
                                    <option value="224GN">Guinea (+224)</option>
                                    <option value="240GQ">Guinea Ekuatorial (+240)</option>
                                    <option value="245GW">Guinea-Bissau (+245)</option>
                                    <option value="592GY">Guyana (+592)</option>
                                    <option value="594GF">Guyana Prancis (+594)</option>
                                    <option value="509HT">Haiti (+509)</option>
                                    <option value="504HN">Honduras (+504)</option>
                                    <option value="852HK">Hong Kong (+852)</option>
                                    <option value="36HU">Hungaria (+36)</option>
                                    <option value="91IN">India (+91)</option>
                                    <option value="62ID">Indonesia (+62)</option>
                                    <option value="44GB">Inggris Raya (+44)</option>
                                    <option value="964IQ">Irak (+964)</option>
                                    <option value="353IE">Irlandia (+353)</option>
                                    <option value="354IS">Islandia (+354)</option>
                                    <option value="972IL">Israel (+972)</option>
                                    <option value="39IT">Italia (+39)</option>
                                    <option value="1JM">Jamaika (+1)</option>
                                    <option value="81JP">Jepang (+81)</option>
                                    <option value="49DE">Jerman (+49)</option>
                                    <option value="44JE">Jersey (+44)</option>
                                    <option value="253DJ">Jibuti (+253)</option>
                                    <option value="687NC">Kaledonia Baru (+687)</option>
                                    <option value="855KH">Kamboja (+855)</option>
                                    <option value="237CM">Kamerun (+237)</option>
                                    <option value="1CA">Kanada (+1)</option>
                                    <option value="7KZ">Kazakstan (+7)</option>
                                    <option value="254KE">Kenya (+254)</option>
                                    <option value="358AX">Kepulauan Aland (+358)</option>
                                    <option value="1KY">Kepulauan Cayman (+1)</option>
                                    <option value="61CC">Kepulauan Cocos (Keeling) (+61)</option>
                                    <option value="682CK">Kepulauan Cook (+682)</option>
                                    <option value="500FK">Kepulauan Falkland (+500)</option>
                                    <option value="298FO">Kepulauan Faroe (+298)</option>
                                    <option value="1MP">Kepulauan Mariana Utara (+1)</option>
                                    <option value="692MH">Kepulauan Marshall (+692)</option>
                                    <option value="672NF">Kepulauan Norfolk (+672)</option>
                                    <option value="64PN">Kepulauan Pitcairn (+64)</option>
                                    <option value="677SB">Kepulauan Solomon (+677)</option>
                                    <option value="47SJ">Kepulauan Svalbard dan Jan Mayen (+47)</option>
                                    <option value="1TC">Kepulauan Turks dan Caicos (+1)</option>
                                    <option value="1VI">Kepulauan Virgin Amerika Serikat (+1)</option>
                                    <option value="1VG">Kepulauan Virgin Britania Raya (+1)</option>
                                    <option value="681WF">Kepulauan Wallis dan Futuna (+681)</option>
                                    <option value="996KG">Kirgistan (+996)</option>
                                    <option value="686KI">Kiribati (+686)</option>
                                    <option value="57CO">Kolombia (+57)</option>
                                    <option value="269KM">Komoro (+269)</option>
                                    <option value="82KR">Korea Selatan (+82)</option>
                                    <option value="383XK">Kosovo (+383)</option>
                                    <option value="506CR">Kosta Rika (+506)</option>
                                    <option value="385HR">Kroasia (+385)</option>
                                    <option value="53CU">Kuba (+53)</option>
                                    <option value="965KW">Kuwait (+965)</option>
                                    <option value="856LA">Laos (+856)</option>
                                    <option value="371LV">Latvia (+371)</option>
                                    <option value="961LB">Lebanon (+961)</option>
                                    <option value="266LS">Lesotho (+266)</option>
                                    <option value="231LR">Liberia (+231)</option>
                                    <option value="218LY">Libia (+218)</option>
                                    <option value="423LI">Liechtenstein (+423)</option>
                                    <option value="370LT">Lituania (+370)</option>
                                    <option value="352LU">Luksemburg (+352)</option>
                                    <option value="853MO">Makau (+853)</option>
                                    <option value="389MK">Makedonia Utara (+389)</option>
                                    <option value="261MG">Madagaskar (+261)</option>
                                    <option value="960MV">Maladewa (+960)</option>
                                    <option value="265MW">Malawi (+265)</option>
                                    <option value="60MY">Malaysia (+60)</option>
                                    <option value="223ML">Mali (+223)</option>
                                    <option value="356MT">Malta (+356)</option>
                                    <option value="212MA">Maroko (+212)</option>
                                    <option value="596MQ">Martinik (+596)</option>
                                    <option value="222MR">Mauritania (+222)</option>
                                    <option value="230MU">Mauritius (+230)</option>
                                    <option value="262YT">Mayotte (+262)</option>
                                    <option value="52MX">Meksiko (+52)</option>
                                    <option value="20EG">Mesir (+20)</option>
                                    <option value="691FM">Mikronesia (+691)</option>
                                    <option value="373MD">Moldova (+373)</option>
                                    <option value="377MC">Monako (+377)</option>
                                    <option value="976MN">Mongolia (+976)</option>
                                    <option value="382ME">Montenegro (+382)</option>
                                    <option value="1MS">Montserrat (+1)</option>
                                    <option value="258MZ">Mozambik (+258)</option>
                                    <option value="95MM">Myanmar (Burma) (+95)</option>
                                    <option value="264NA">Namibia (+264)</option>
                                    <option value="674NR">Nauru (+674)</option>
                                    <option value="977NP">Nepal (+977)</option>
                                    <option value="227NE">Niger (+227)</option>
                                    <option value="234NG">Nigeria (+234)</option>
                                    <option value="505NI">Nikaragua (+505)</option>
                                    <option value="683NU">Niue (+683)</option>
                                    <option value="47NO">Norwegia (+47)</option>
                                    <option value="968OM">Oman (+968)</option>
                                    <option value="92PK">Pakistan (+92)</option>
                                    <option value="680PW">Palau (+680)</option>
                                    <option value="507PA">Panama (+507)</option>
                                    <option value="675PG">Papua Nugini (+675)</option>
                                    <option value="595PY">Paraguay (+595)</option>
                                    <option value="51PE">Peru (+51)</option>
                                    <option value="48PL">Polandia (+48)</option>
                                    <option value="689PF">Polinesia Prancis (+689)</option>
                                    <option value="351PT">Portugal (+351)</option>
                                    <option value="33FR">Prancis (+33)</option>
                                    <option value="1PR">Puerto Riko (+1)</option>
                                    <option value="44IM">Pulau Man (+44)</option>
                                    <option value="61CX">Pulau Natal (+61)</option>
                                    <option value="974QA">Qatar (+974)</option>
                                    <option value="236CF">Republik Afrika Tengah (+236)</option>
                                    <option value="1DO">Republik Dominika (+1)</option>
                                    <option value="262RE">Réunion (+262)</option>
                                    <option value="40RO">Rumania (+40)</option>
                                    <option value="7RU">Rusia (+7)</option>
                                    <option value="250RW">Rwanda (+250)</option>
                                    <option value="212EH">Sahara Barat (+212)</option>
                                    <option value="590BL">Saint Barthélemy (+590)</option>
                                    <option value="290SH">Saint Helena (+290)</option>
                                    <option value="1KN">Saint Kitts dan Nevis (+1)</option>
                                    <option value="1LC">Saint Lucia (+1)</option>
                                    <option value="590MF">Saint Martin (+590)</option>
                                    <option value="508PM">Saint Pierre dan Miquelon (+508)</option>
                                    <option value="1VC">Saint Vincent dan Grenadine (+1)</option>
                                    <option value="685WS">Samoa (+685)</option>
                                    <option value="1AS">Samoa Amerika (+1)</option>
                                    <option value="378SM">San Marino (+378)</option>
                                    <option value="239ST">Sao Tome dan Principe (+239)</option>
                                    <option value="64NZ">Selandia Baru (+64)</option>
                                    <option value="221SN">Senegal (+221)</option>
                                    <option value="381RS">Serbia (+381)</option>
                                    <option value="248SC">Seychelles (+248)</option>
                                    <option value="232SL">Sierra Leone (+232)</option>
                                    <option value="65SG">Singapura (+65)</option>
                                    <option value="1SX">Sint Maarten (+1)</option>
                                    <option value="357CY">Siprus (+357)</option>
                                    <option value="421SK">Slovakia (+421)</option>
                                    <option value="386SI">Slovenia (+386)</option>
                                    <option value="252SO">Somalia (+252)</option>
                                    <option value="34ES">Spanyol (+34)</option>
                                    <option value="94LK">Sri Lanka (+94)</option>
                                    <option value="249SD">Sudan (+249)</option>
                                    <option value="211SS">Sudan Selatan (+211)</option>
                                    <option value="597SR">Suriname (+597)</option>
                                    <option value="46SE">Swedia (+46)</option>
                                    <option value="41CH">Swiss (+41)</option>
                                    <option value="886TW">Taiwan (+886)</option>
                                    <option value="992TJ">Tajikistan (+992)</option>
                                    <option value="238CV">Tanjung Verde (+238)</option>
                                    <option value="255TZ">Tanzania (+255)</option>
                                    <option value="66TH">Thailand (+66)</option>
                                    <option value="670TL">Timor Leste (+670)</option>
                                    <option value="86CN">Tiongkok (+86)</option>
                                    <option value="228TG">Togo (+228)</option>
                                    <option value="690TK">Tokelau (+690)</option>
                                    <option value="676TO">Tonga (+676)</option>
                                    <option value="1TT">Trinidad dan Tobago (+1)</option>
                                    <option value="216TN">Tunisia (+216)</option>
                                    <option value="90TR">Turki (+90)</option>
                                    <option value="993TM">Turkimenistan (+993)</option>
                                    <option value="688TV">Tuvalu (+688)</option>
                                    <option value="256UG">Uganda (+256)</option>
                                    <option value="380UA">Ukraina (+380)</option>
                                    <option value="971AE">Uni Emirat Arab (+971)</option>
                                    <option value="598UY">Uruguay (+598)</option>
                                    <option value="998UZ">Uzbekistan (+998)</option>
                                    <option value="678VU">Vanuatu (+678)</option>
                                    <option value="379VA">Vatikan (+379)</option>
                                    <option value="58VE">Venezuela (+58)</option>
                                    <option value="84VN">Vietnam (+84)</option>
                                    <option value="246IO">Wilayah Inggris di Samudra Hindia (+246)</option>
                                    <option value="970PS">Wilayah Palestina (+970)</option>
                                    <option value="967YE">Yaman (+967)</option>
                                    <option value="962JO">Yordania (+962)</option>
                                    <option value="30GR">Yunani (+30)</option>
                                    <option value="260ZM">Zambia (+260)</option>
                                    <option value="263ZW">Zimbabwe (+263)</option>
                                </select>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6 absolute top-[50%] translate-y-[-50%] right-[20px]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <input type="number"
                                class="w-full p-4 border-[1px] border-black/[0.1] rounded-es-lg rounded-ee-lg font-[400]"
                                placeholder="Nomor telepon">
                        </div>
                        <p class="text-[13px]">Kami akan menelepon atau mengirim SMS guna mengonfirmasikan nomor Anda. Tarif
                            standar SMS dan data
                            berlaku. <span class="underline">Kebijakan Privasi</span></p>
                        <button
                            class="bg-gradient-to-r from-[#E92153] to-[#DE105E] w-full p-3 px-6 rounded-md text-white text-center text-[15px] font-bold">Lanjutkan</button>
                    </div>
                    <div class="border-[0.5px] border-black/[0.1] relative w-full">
                        <h3
                            class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-2 px-6 text-[14px]">
                            atau</h3>
                    </div>
                    <div class="w-full flex flex-col gap-4">
                        <div class="grid grid-cols-3 gap-4 w-full">
                            <div
                                class="cursor-pointer w-full border-[1px] border-black/[0.5] rounded-lg flex items-center justify-center p-4 text-2xl">
                                <i class="fa-brands fa-square-facebook"></i>
                            </div>
                            <div
                                class="cursor-pointer w-full border-[1px] border-black/[0.5] rounded-lg flex items-center justify-center p-4 text-2xl">
                                <i class="fa-brands fa-google"></i>
                            </div>
                            <div
                                class="cursor-pointer w-full border-[1px] border-black/[0.5] rounded-lg flex items-center justify-center p-4 text-2xl">
                                <i class="fa-brands fa-apple"></i>
                            </div>
                        </div>
                        <div
                            class="cursor-pointer w-full border-[1px] border-black/[0.5] rounded-lg flex items-center justify-center py-2 text-2xl relative">
                            <p class="font-[400] text-[14px]">Lanjutkan dengan email</p>
                            <i class="fa-regular fa-envelope absolute top-[50%] left-[20px] translate-y-[-50%]"></i>
                        </div>
                    </div>
                </div>
                <div
                    class="md:p-6 md:border-[1px] md:border-black/[0.1] rounded-lg flex flex-col gap-6 w-full md:max-w-[500px] md:sticky top-[20px]">
                    <div class="">
                        <div class="flex items-start justify-start gap-2">
                            <div class="">
                                <img :src="dataProduct.thumbnail" alt=""
                                    class="w-[150px] h-[120px] rounded-lg object-cover">
                            </div>
                            <div class="flex justify-between flex-col h-[120px] text-left md:text-left">
                                <div>
                                    <h4>{{ dataProduct.title }}</h4>
                                    <span class="text-[12px] font-[400] text-black/[0.8]">{{ dataProduct.brand }} - {{
                                        dataProduct.category }}</span>
                                </div>
                                <div class="flex items-center gap-4">
                                    <div class="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        <p class="text-[13px]">{{ dataProduct.rating }}</p>
                                    </div>
                                    <i class="fa-solid fa-circle text-[3px]"></i>
                                    <div class="flex items-center gap-2">
                                        <i class="fa-solid fa-medal text-[10px]"></i>
                                        <p class="text-[12px]">Hos Teladan</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <hr>
                    <div class="flex flex-col gap-6 w-full md:hidden">
                        <h4 class="font-[500] text-2xl">Detail Pemesanan</h4>
                        <div class="flex flex-col gap-1 relative w-full">
                            <h5 class="font-[600] text-[16px] text-black/[0.8]">Produk</h5>
                            <p class="font-[400] text-[15px] text-black">{{ dataProduct.title }}</p>
                            <p class="absolute top-[0%] translate-y-[-50%] right-[0px] font-[500] text-[16px] underline">
                                Edit</p>
                        </div>
                        <div class="flex flex-col gap-2 relative w-full">
                            <h5 class="font-[600] text-[16px] text-black/[0.8]">Brand</h5>
                            <p class="font-[400] text-[15px] text-black">{{ dataProduct.brand }}</p>
                            <p class="absolute top-[0%] translate-y-[-50%] right-[0px] font-[500] text-[16px] underline">
                                Edit</p>
                        </div>
                    </div>
                    <hr>
                    <div class="flex flex-col gap-6">
                        <h4 class="font-[600] text-xl text-black/[0.8] text-left">Perincian harga</h4>
                        <div class=" flex items-center justify-between">
                            <p>$. {{ (dataProduct.price * 1).toLocaleString() }}.00</p>
                            <p>$. {{ (dataProduct.price * 1).toLocaleString() }}.00</p>
                        </div>
                    </div>
                    <hr>
                    <div class="">
                        <div class="font-[13px] font-[600] flex items-center justify-between text-black/[0.8]">
                            <h4>Total (<span class="underline">IDR</span>)</h4>
                            <p>$. {{ (dataProduct.price * 1).toLocaleString() }}.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-0 left-0 w-full border-t-[1px] border-black/[0.1] relative">
            <footer
                class="w-11/12 mx-auto flex items-center justify-between bg-white p-3 flex-col md:flex-row md:gap-0 gap-4">
                <div class="">
                    <div class="flex text-[14px] font-[400] text-black/[0.8] items-center gap-3">
                        <i class="fa-regular fa-copyright"></i>
                        <p>2023 Airbnb, inc.</p>
                        <i class="fa-solid fa-circle text-[3px]"></i>
                        <p>Privasi</p>
                        <i class="fa-solid fa-circle text-[3px]"></i>
                        <p>Ketentuan</p>
                        <i class="fa-solid fa-circle text-[3px]"></i>
                        <p>Peta situs</p>
                    </div>
                </div>
                <div class="flex items-center gap-4 font-[500]">
                    <div class="flex items-center gap-2 text-[14px]">
                        <i class="fa-solid fa-globe"></i>
                        <p>Bahasa indonesia (ID)</p>
                    </div>
                    <div class="flex items-center gap-2 text-[14px]">
                        <i class="fa-solid fa-globe"></i>
                        <p>Rp IDR</p>
                    </div>
                    <div class="flex items-center gap-2 text-[14px]">
                        <p>Dukungan dan sumber informasi</p>
                        <i class="fa-solid fa-chevron-up"></i>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            layouts: {
                header: "header",
                footer: "footer"
            },
            dataProduct: [],
            quantity: 0,
            dataq:null,
        }
    },
    async created() {
        this.getProductData();
    },
    computed: {
        getData() {
            this.handleOrder
        }
    },
    methods: {
        async getProductData() {
            const route = useRoute();
            const id = route.params.id;
            try {
                const res = await axios.get("https://dummyjson.com/products/" + id);
                this.dataProduct = await res.data;
            } catch (error) {
                console.log(res);
                console.log(error);
            }
        },
        handleOrder(input) {
            this.quantity = input;
        },
    },
    mounted(){
        console.log(this.$store.state.dataCard)
    }
}
</script>