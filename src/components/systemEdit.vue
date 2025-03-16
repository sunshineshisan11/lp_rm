<template>
	<div class="main">
		<!-- <el-page-header :icon="ArrowLeft" size="40">
		    <template #content>
		      <span class="text-large font-600 mr-3"> Title </span>
		    </template>
		  </el-page-header> -->
		<el-icon class="back" size="40" @click="router.back()">
			<ArrowLeftBold />
		</el-icon>
		<div v-if="type == 1">
			<article v-if="langStr == 'zh'">
				在love
				party，我們非常嚴肅地保護會員的隱私。我們始終一貫地管理網站上所有的個人主頁、照片和所使用的語言，並儘一切所能保護你的隱私和安全。然而，我們要提醒你：網上安全也是你的責任，這非常重要。所以要小心，三思而後行。保護自己的安全！
				不要向任何第三方- 即使是您的朋友- 分享或透露您的密碼。如果您丟失或洩露您的密碼，可能會危及您的私人數據。如果您的個人檔案被黑客入侵，請您通過我們的反饋頁面向我們團隊進行舉報。
				當您對新認識的人還不太了解時，請您不要輕易洩露個人信息。這包括透露您的電子郵件地址，即時通信的聯繫方式，全名及URL。請您千萬不要告訴他人您的財務信息，如信用卡資料等。
				有些騙子會假冒我們公司或其他公司的代表要求您為非love party網站直接提供的所謂獎品的快遞或服務付款，因此請您一定要特別警惕。尤其請您要注意的是，當有人說他們有困難而向您要錢時- 這種情況通常是騙局。
				如果您遇到任何不恰當的行為，點擊舉報違規行為的鏈接後，我們團隊會馬上收到該報告。如果您與某位會員交流時覺得不自在，您也能找到阻止該會員的選項。不要忍受任何無禮或騷擾行為-
				阻止該會員或向我們的客戶服務團隊舉報。我們會盡快處理這些事宜，我們擁有一個完善的監管系統對這方面進行監控和質量控制。
				關於線下見面的提示
				當您與剛認識的新會員交談時，問他們要最近拍的照片- 最好是在過去4個星期內拍的
				千萬不要迫使自己去與對方見面；只有當您準備好的時候才可以去見面。
				把您打算去的地方告訴您的朋友，並且讓他們給您打電話或發短信以確認您的安全。請您確保帶上電量充滿並且餘額足夠的手機，並且及時把見面的情況和何時安全到家告知你的朋友。
				請您自己安排前往和離開見面地點的交通工具- 不要在對方或自己的家裡見面。最好永遠不要洩露您的住址，除非您與對方已經非常熟悉。
				請您確保將第一次見面安排在白天以及公共場所，並且在您清醒時！請您千萬不要在見面時喝太多酒，並且時時將自己的隨身物品和飲品放在自己的眼前。
			</article>
			<article v-if="langStr == 'jp'">
				love party
				では、会員のプライバシーを非常に厳格に保護しています。当社はウェブサイト上のすべての個人ホームページ、写真、および使用言語を一貫して管理し、あなたのプライバシーとセキュリティを保護するためにできる限りのことを行っています。ただし、オンラインセキュリティもあなたの責任であることをお知らせします。これは非常に重要です。ですから、慎重に、よく考えてから行動してください。自身のセキュリティを守ってください！
				どんな第三者にも、たとえあなたの友人であっても、パスワードを共有または明かさないでください。パスワードを失ったり漏洩したりすると、あなたのプライベートデータが危険にさらされる可能性があります。あなたの個人プロフィールがハッキングされた場合は、当社のフィードバックページを通じて当社チームに通報してください。
				新しく知り合った人にまだ詳しく知らないうちは、個人情報を軽々しく漏らさないでください。これには、あなたのメールアドレス、即時メッセージングの連絡先情報、本名、および URL
				の開示が含まれます。決して他人にあなたの財務情報、たとえばクレジットカード情報などを告げないでください。
				一部の詐欺師は、当社や他の会社の代表者になりすまして、love party
				ウェブサイトが直接提供していないとされる所謂賞品の配送料やサービス料を支払うよう要求することがあります。ですから、特に注意してください。特に、誰かが困っていると言ってあなたに金を要求する場合には注意してください。このようなケースは通常、詐欺です。
				不適切な行為に遭遇した場合は、違反行為を通報するリンクをクリックすると、当社チームにすぐに報告が届きます。ある会員とのやり取りで不快感を覚えた場合も、その会員をブロックするオプションを見つけることができます。無礼な行為や迷惑行為に耐えないでください。その会員をブロックするか、当社のカスタマーサービスチームに通報してください。当社はできるだけ早くこれらの事案を処理します。当社には、これらの点について監視と品質管理を行うための整備された監督システムがあります。
				オフラインでの面会に関するヒント
				新しく知り合った会員と話すときは、彼らに最近撮った写真を求めてください。できれば過去 4 週間以内に撮ったものが望ましいです。
				無理に相手と面会することはしないでください。あなたが十分に準備ができているときにのみ面会してください。
				あなたが行く予定の場所を友人に伝え、彼らにあなたのセキュリティを確認するために電話をかけてもらうか、メッセージを送ってもらってください。充電が完了し、十分な残高がある携帯電話を持っていくことを確認し、面会の状況といつ無事に家に戻ったかを友人に知らせてください。
				面会場所への往復の交通手段を自分で手配してください。相手や自分の家で面会しないでください。おそらく、あなたが相手と非常に親しくなるまでは、住所を明かさないことが望ましいです。
				最初の面会は日中で、公共の場所で行うことを確認し、あなたが気がはっきりしているときに行ってください。面会時にたくさん飲むことは絶対にしないでください。また、常に自分の持ち物と飲み物を目の届くところに置いてください。
			</article>
			<article v-if="langStr == 'ko'">
				love party에서는 회원님의 개인 정보 보호를 매우 엄격하게 진행합니다. 저희는 웹 사이트의 모든 개인 홈페이지, 사진 및 사용 언어를 일관되게 관리하며 회원님의 개인 정보와 안전을
				보호하기 위해 가능한 모든 것을 노력합니다. 그러나 온라인 안전도 회원님의 책임임을 알려드립니다. 이는 매우 중요합니다. 그러니 조심하고, 삼고 사고한 후 행동하십시오. 스스로의 안전을
				지켜주세요!
				어떤 제 3자에게도, 심지어 귀하의 친구에게도 비밀번호를 공유하거나 공개하지 마십시오. 비밀번호를 분실하거나 유출하면 귀하의 개인 데이터가 위험에 빠질 수 있습니다. 귀하의 개인 프로필이
				해킹당한 경우 our의 피드백 페이지를 통해 our 팀에 신고해 주십시오.
				새로운 친구를 아직 잘 모를 때 개인 정보를 가볍게 유출하지 마십시오. 여기에 포함되는 것은 귀하의 이메일 주소, 즉시 통신 연락처 정보, 성명 및 URL입니다. 절대 다른 사람에게
				귀하의 재정 정보, 예를 들어 신용 카드 정보 등을 알리지 마십시오.
				어떤 사기꾼들은 저희 회사나 다른 회사의 대표자 이름을 빌려 love party 웹 사이트에서 직접 제공하지 않는 소위 상품의 배송료나 서비스 비용을 지불하라고 요청할 수 있습니다.
				그러니 특히 주의하십시오. 특히 어떤 사람이 어려움에 처해 있다고 말하고 돈을 요청할 때는 주의하십시오. 이러한 경우 대부분은 사기입니다.
				부적절한 행위를 만난 경우 규제 위반 행위 신고 링크를 클릭하면 our 팀이 바로 보고를 받게 됩니다. 어떤 회원과의 교류에서 불쾌감을 느끼는 경우에도 해당 회원을 차단하는 옵션을 찾을
				수 있습니다. 무례하거나 괴롭히는 행위를 참지 마십시오. 해당 회원을 차단하거나 our 고객 서비스 팀에 신고하십시오. 저희는 가능한 빨리 이러한 문제를 처리할 것입니다. 저희는 이에
				대한 감독과 품질 관리 시스템이 잘 갖추어져 있습니다.
				오프라인 만남에 대한 팁
				새로운 회원과 이야기를 나눌 때 최근에 찍은 사진을 요청하십시오. 가능하면 지난 4 주 이내에 찍은 것이 좋습니다.
				강제로 만나지 마십시오. 당신이 준비가 될 때만 만나십시오.
				가고자 하는 장소를 친구에게 알리고 안전을 확인하기 위해 전화를 걸거나 문자를 보내도록 합니다. 충전이 완료되고 잔액이 충분한 휴대폰을 가져가도록 확인하고 만남의 상황과 안전하게 집에
				돌아온 시간을 친구에게 알려주십시오.
				만남 장소로 가고 오는 교통 수단을 스스로 계획하십시오. 상대방이나 자신의 집에서 만나지 마십시오. 대부분 자신과 상대방이 아주 친해질 때까지 주소를 알리지 않는 것이 좋습니다.
				첫 만남은 낮에 공공장소에서 하고 자신이 똑똑할 때에만 만나십시오. 만남 때 너무 많이 술을 마시지 마십시오. 그리고 자신의 소지품과 음료수를 항상 시야 내에 두십시오.
			</article>
			<article v-if="langStr == 'vi'">
				Trong Love Party, chúng tôi rất cẩn thận trong việc bảo vệrivacy của thành viên. Chúng tôi luôn quản lý
				một cách nhất quán tất cả các trang cá nhân, ảnh và ngôn ngữ sử dụng trên trang web, đồng thời làm mọi
				thứ có thể để bảo vệrivacy và an toàn của bạn. Tuy nhiên, chúng tôi muốn nhắc nhở bạn rằng an toàn trên
				mạng cũng là trách nhiệm của bạn, điều này rất quan trọng. Vì vậy, hãy cẩn thận và suy nghĩ kỹ trước khi
				hành động. Bảo vệ sự an toàn của bản thân!
				Đừng chia sẻ hoặc tiết lộ mật khẩu của bạn cho bất kỳ bên thứ ba nào - ngay cả những người bạn thân của
				bạn. Nếu bạn mất hoặc tiết lộ mật khẩu, có thể gây nguy hiểm cho dữ liệu cá nhân của bạn. Nếu hồ sơ cá
				nhân của bạn bị hacker xâm nhập, xin vui lòng báo cáo cho nhóm của chúng tôi thông qua trang phản hồi
				của chúng tôi.
				Khi bạn chưa biết rõ về người bạn mới quen, đừng dễ dàng tiết lộ thông tin cá nhân. Điều này bao gồm
				việc tiết lộ địa chỉ email, phương thức liên lạc qua tin nhắn tức thời, họ và tên đầy đủ và URL của bạn.
				Xin vui lòng tuyệt đối không nói cho người khác về thông tin tài chính của bạn, chẳng hạn như thông tin
				thẻ tín dụng.
				Một số kẻ lừa đảo có thể giả mạo là đại diện của công ty chúng tôi hoặc các công ty khác yêu cầu bạn trả
				tiền cho việc giao hàng hoặc dịch vụ của những 膺 thưởng giả định mà không phải là những gì được cung cấp
				trực tiếp bởi trang web Love Party. Do đó, xin vui lòng phải rất cảnh giác. Đặc biệt, xin lưu ý rằng,
				khi có người nói rằng họ gặp khó khăn và yêu cầu bạn cho tiền - những trường hợp như vậy thường là một
				dấu trick.
				Nếu bạn gặp bất kỳ hành vi không phù hợp nào, hãy nhấp vào liên kết để báo cáo hành vi vi phạm, sau đó
				nhóm của chúng tôi sẽ nhận được báo cáo đó ngay lập tức. Nếu bạn cảm thấy không thoải mái khi giao tiếp
				với một thành viên nào đó, bạn cũng có thể tìm thấy tùy chọn để chặn thành viên đó. Đừng chịu đựng bất
				kỳ hành vi bất lịch sự hoặc quấy rối nào - chặn thành viên đó hoặc báo cáo cho nhóm dịch vụ khách hàng
				của chúng tôi. Chúng tôi sẽ xử lý những vấn đề này càng sớm càng tốt, chúng tôi có một hệ thống giám sát
				hoàn thiện để giám sát và kiểm soát chất lượng về vấn đề này.
				Gợi ý về cuộc gặp offline:
				Khi bạn nói chuyện với một thành viên mới quen, yêu cầu họ cho những ảnh chụp gần đây - tốt nhất là
				những ảnh được chụp trong vòng 4 tuần trước.
				Đừng buộc bản thân phải gặp người kia; Chỉ gặp nhau khi bạn đã chuẩn bị sẵn.
				Nói cho những người bạn của bạn biết nơi bạn dự định đi, và để họ gọi điện thoại hoặc gửi tin nhắn để
				xác nhận sự an toàn của bạn. Xin vui lòng đảm bảo mang theo điện thoại di động có pin đầy và số dư đủ,
				đồng thời thông báo cho những người bạn của bạn về tình trạng cuộc gặp và khi nào bạn đã trở về nhà an
				toàn một cách kịp thời.
				Sắp xếp phương tiện đi lại đến và từ địa điểm cuộc gặp một cách tự do - đừng gặp nhau tại nhà của người
				kia hoặc nhà của bản thân. Tốt nhất là không bao giờ tiết lộ địa chỉ của bạn, trừ khi bạn đã rất quen
				với người kia.
				Xin vui lòng đảm bảo sắp xếp cuộc gặp đầu tiên vào ban ngày và tại những nơi công 眾，đồng thời khi bạn
				tỉnh táo! Xin vui lòng tuyệt đối không uống quá nhiều rượu trong thời gian cuộc gặp, và luôn giữ đồ đạc
				và đồ uống của mình trong tầm nhìn của bản thân.
			</article>
			<article v-if="langStr == 'en'">
				At love party, we take the protection of our members' privacy very seriously. We consistently manage all
				personal homepages, photos, and the languages used on the website, and do everything we can to safeguard
				your privacy and security. However, we would like to remind you that online safety is also your
				responsibility, and this is very important. So be careful and think twice before you act. Protect your
				own safety!
				Don't share or disclose your password to any third party - even your friends. If you lose or leak your
				password, it may put your private data at risk. If your personal profile is hacked, please report it to
				our team through our feedback page.
				When you don't know much about the new people you've just met, don't disclose your personal information
				easily. This includes revealing your email address, instant messaging contact information, full name,
				and URL. Please never tell others your financial information, such as credit card details.
				Some scammers may pretend to be representatives of our company or other companies and ask you to pay for
				the so-called prizes' express delivery or services that are not directly provided by the love party
				website. Therefore, please be especially vigilant. In particular, please note that when someone says
				they are in trouble and asks you for money - this situation is usually a scam.
				If you encounter any inappropriate behavior, click on the link to report the violation, and our team
				will receive the report immediately. If you feel uncomfortable when communicating with a certain member,
				you can also find the option to block that member. Don't tolerate any rude or harassing behavior - block
				the member or report it to our customer service team. We will deal with these matters as soon as
				possible. We have a complete supervision system to monitor and control the quality in this regard.
				Tips for offline meetings
				When you talk to a new member you've just met, ask them for recent photos - preferably taken within the
				last four weeks.
				Never force yourself to meet the other person; Only meet when you are ready.
				Tell your friends where you plan to go, and let them call or text you to confirm your safety. Please
				make sure to bring a fully charged mobile phone with sufficient balance, and inform your friends in a
				timely manner about the situation of the meeting and when you get home safely.
				Arrange your own transportation to and from the meeting place - don't meet at the other person's or your
				own home. It's best never to disclose your address unless you are already very familiar with the other
				person.
				Please make sure to arrange the first meeting during the daytime and in a public place, and when you are
				sober! Please never drink too much alcohol during the meeting, and always keep your personal belongings
				and drinks in your sight.
			</article>
		</div>
		<div v-if="type == 2">
			<article v-if="langStr == 'zh'">
				love party訂立了有關網站服務（以下簡稱服務）的下述協議（“使用條款”）。無論誰使用我們的服務，都被視為已同意遵守我們的使用條款。
				1.同意使用條款
				本協議（使用條款）包括現在和未來所經營的網站及客戶端。通過使用此服務，無論您是否註冊成為love
				party的會員（以下簡稱為會員），您將被視為已經同意這些使用條款。如果您不同意此服務條款，請您停止使用我們的服務。
				2. 合格要求
				年齡未滿18歲的未成年人不得使用我們的服務。通過使用我們的服務，您已聲明並保證您有權利和能力遵守使用條款的所有規定。
				3.使用條款的變更
				love party有權在無需事先通知的情況下，變更本使用條款。您可以定期查看服務條款的變更情況。當我們對使用條款進行變更後，如果您使用我們的服務，無論您瀏覽與否，即視為您同意這些變更。
				4. 隱私
				love party尊重網站訪問者的隱私權。服務的使用應遵循我們的隱私權政策。 love party的合作夥伴同意遵循隱私權政策的規定。
				5. 服務變更
				love party可以自行決定增加，刪除或修改服務功能或各項服務，而無需事先通知。
				6. 訂製
				a) 支付方式
				您的支付條款將基於您的支付方式上，支付條款由您和金融機構，信用卡發行機構或其他您選擇的支付服務提供商（支付服務提供商）之間的協定來決定。如果love
				party不接受您的“支付服務提供商”所提供的付款服務，您同意根據需要支付所有金額。您同意為使用我們的服務，支付所有的應付賬款。如果您的賬款已付，您可以請求我們取消您的已付賬款的狀態，一旦您的賬戶被取消，你的已付費狀態將在您最後支付的日期時終止。已付費狀態不能轉讓。
				love party的已付費狀態是最終銷售，不能退款。有爭議的費用應在您購買服務後的60天內上報給love party。如對於您的已付費狀態有何疑問，請聯繫我們。
				b)服務續約
				您在love party網站訂製的服務將不會自動續約。您可以聯繫我們的客服團隊，隨時變更或重新訂製。如果您選擇重新訂製，您的訂製服務在到期後將不能自動續約。在訂製期滿前取消訂製的，不能得到退款。
				c)免費試用和其他促銷
				任何免費試用或其他促銷方式，可使訂製者在特定的試用期限使用我們的服務。如果促銷條款規定使用者需要訂製服務，您應該在試用期之前取消訂製，以避免交付訂製費。
				7.通過合作夥伴加入love party
				如果您通過love party的合作夥伴註冊使用我們的服務，並且love party與其合作夥伴進行合作，提供該服務。你將有使用該服務的會員權利，並且love
				party有權轉移您的會員資格或將您的已付款賬戶轉移到love party的類似服務項目內。
				8. 社區內容
				所有的服務內容都應該遵循社區內容指南的要求。您同意不發布，傳送，分發或鏈接任何涉及違法，騷擾，毀謗，威脅，有害，猥褻，悖逆，誹謗，詆毀他人名譽，以及侵犯別人隱私的內容，也不發送其他寧人不悅或侵害其他人或團體權益的內容。未經知識產權人的書面同意，不得使用他人的知識產權，包括受版權和商標權保護的資料，變更或未變更的知識產權，其他人的非版權文本或圖片等。
				love party將不為會員所發的任何郵件或群討論帖的內容負責，也不對第三方或會員提供的任何信息，商品或服務負責。使用我們的服務，即表明您同意：在以下情況下，love
				party將不對您或其他人負責：例如：任何方的威脅，誹謗，猥褻，下流，攻擊或違法行為 ，或侵權行為，包括違法使用知識產權。 love party不擁有您提供給所有信息（包括回饋和建議），或您在love
				party所發布，下載，輸入或提交的所有信息（“提交的信息”）。然而，如果您在我們的網站或客戶端上發布，上傳，輸入，提供或提交信息，即表明您給予love party永久不可撤銷並且可轉讓的權利，love
				party有權複製，使用，儲存，修改，編輯，翻譯或發布任何或全部您所提交的信息，並且無需支付信息的使用費。 love party沒有義務發布或使用您所提交的信息，並且love
				party可以隨時自行決定刪除您所提交的信息。你在本網站發布，下載，輸入或提交信息，即表明您擁有您所發布信息的控制權。對於您的信息被刪除，無效或儲存失敗，love party和其合作方將不為此負責。
				9.會員賬戶
				一旦您註冊了我們的服務，您將會收到一個賬號和密碼，您應對您的賬戶和密碼保密，並對您賬戶相關的所有活動負責。一旦註冊成為會員，您將為您檔案的所有信息負責。禁止在檔案或網站服務項目中發布色情或其他淫穢的內容，因為這樣會威脅您的會員身份。對於love
				party網站的會員進行的線下約會，love party將不負任何責任。您同意love party向您發送郵件（涉及服務信息（包括變更升級），新功能或事件，使用服務的意見和建議）。
				10. 受版權保護和商標權保護的材料
				love party網站的內容均受版權保護Copyright© 2023-2026。
				11.免責聲明
				在love party網站或通過love party（或love party的代理商或合作方）發布的資料，均按“現有”和“現存”提供。它並無各種明示或暗示的保證和條件。 love
				party不控制第三方所提供的任何信息，產品或服務。您明確同意，使用服務將獨自承擔風險。根據適用法例的最大容許程度：love
				party就所有明確或隱含保證做出免責聲明，而此等保證範圍包括但不限於隱含的可銷售性及特殊用途合適性保證；love party並不保證所提供的服務能滿足您的需求，也不保證服務將不中斷，適時，安全或正確無誤。
				love party不為服務使用和使用的結果做擔保。 love party也不保證本網站或服務項目不含任何病毒，或其他有害組件。 love party不保證或聲明：保持網站傳送信息的機密性。 love
				party不保證網站翻譯的準確和完整。 love party不為以下做擔保：通過本網站購買或獲得的任何商品或服務，或在本網站做廣告或贊助的商品或服務，或任何通過本網站所進行的交易。 love
				party不對您從love party或其服務中所獲得的信息做任何明示的保證（無論口頭還是書面）
			</article>
			<article v-if="langStr == 'jp'">
				Love Party
				は、ウェブサイトのサービス（以下、「サービス」という）に関する以下の協定（「利用規約」）を定めています。当社のサービスを利用するすべての方は、本利用規約を遵守することに同意したものと見なされます。

				利用規約の同意
				本協定（利用規約）は、現在および将来運営するウェブサイトおよびクライアントを対象としています。本サービスを利用することにより、Love Party
				の会員（以下、「会員」という）に登録されているかどうかに関わらず、あなたはこれらの利用規約に同意したものと見なされます。もしこのサービス規約に同意できない場合は、当社のサービスの利用を中止してください。
				適格要件
				18 歳未満の未成年者は、当社のサービスを利用することができません。当社のサービスを利用することにより、あなたは利用規約のすべての規定を遵守する権利と能力を有することを宣言し、保証するものとします。
				利用規約の変更
				Love Party
				は、事前の通知なしに本利用規約を変更する権利を有します。あなたは定期的にサービス規約の変更状況を確認することができます。当社が利用規約を変更した後、あなたが当社のサービスを利用する場合、閲覧の有無に関わらず、あなたはこれらの変更に同意したものと見なされます。
				プライバシー
				Love Party は、ウェブサイトの訪問者のプライバシーを尊重します。サービスの利用は、当社のプライバシーポリシーに従うものとします。Love Party
				のパートナーは、プライバシーポリシーの規定を遵守することに同意しています。
				サービスの変更
				Love Party は、事前の通知なしに、サービス機能または各種サービスを追加、削除または変更することができます。
				契約
				a) 支払い方法
				あなたの支払い条件は、あなたの支払い方法に基づき、あなたと金融機関、クレジットカード発行機関またはあなたが選択した支払いサービスプロバイダー（支払いサービスプロバイダー）との間の協定によって決定されます。もし
				Love Party
				があなたの「支払いサービスプロバイダー」が提供する支払いサービスを受け付けない場合、あなたは必要に応じてすべての金額を支払うことに同意するものとします。あなたは当社のサービスを利用するために、すべての支払い義務を負うことに同意します。もしあなたの支払いが完了した場合、あなたは当社に支払い済みのステータスを解除するよう請求することができます。一旦あなたのアカウントが解除されると、あなたの支払い済みステータスは最後の支払い日に終了します。支払い済みステータスは譲渡できません。Love
				Party の支払い済みステータスは最終販売であり、返金はできません。異議のある費用は、サービスを購入した日から 60 日以内に Love Party
				に報告する必要があります。あなたの支払い済みステータスに関する疑問がある場合は、当社にご連絡ください。

				b) サービスの更新
				あなたが Love Party
				ウェブサイトで契約したサービスは自動更新されません。あなたは当社のカスタマーサービスチームに連絡して、いつでも契約内容を変更または再契約することができます。もしあなたが再契約を選択した場合、あなたの契約サービスは期限満了後に自動更新されません。契約期間満了前に契約を解除した場合、返金はできません。

				c) 無料トライアルとその他のプロモーション
				無料トライアルまたはその他のプロモーションにより、契約者は特定のトライアル期間中に当社のサービスを利用することができます。もしプロモーション条項に使用者がサービスを契約する必要があると規定されている場合、あなたはトライアル期間前に契約を解除して、契約料の支払いを避ける必要があります。

				パートナーを通じた Love Party への加入
				あなたが Love Party のパートナーを通じて当社のサービスを登録し、Love Party
				がそのパートナーと協力して該当サービスを提供する場合、あなたは該当サービスの会員権利を有することになり、Love Party はあなたの会員資格を移転したり、あなたの支払い済みアカウントを Love
				Party の類似サービス項目に移転する権利を有します。
				コミュニティコンテンツ
				すべてのサービスコンテンツは、コミュニティコンテンツガイドラインの要件に従う必要があります。あなたは、違法、嫌がらせ、誹謗、脅迫、有害、猥褻、悖逆、名誉毀損、他人の名誉を傷つける内容、および他人のプライバシーを侵害する内容を含む、または他の人や団体の権益を侵害する不快な内容を発布、送信、配布またはリンクすることに同意しません。知的財産権者の書面による同意がない場合、他人の知的財産権、著作権および商標権によって保護される資料、変更または未変更の知的財産権、他人の非著作権テキストまたは画像などを使用することはできません。Love
				Party
				は、会員が送信するいかなるメールまたはグループディスカッションの内容にも責任を負わず、第三者または会員が提供するいかなる情報、商品またはサービスにも責任を負いません。当社のサービスを利用することにより、あなたは以下の場合に
				Love Party があなたまたは他の人に対して責任を負わないことに同意するものとします。例えば、いかなる者の脅迫、誹謗、猥褻、下品、攻撃または違法行為、または知的財産権の違法使用を含む侵害行為。Love
				Party は、あなたが提供するすべての情報（フィードバックや提案を含む）、またはあなたが Love Party
				で発布、ダウンロード、入力または提出するすべての情報（「提出情報」）を所有しません。しかし、あなたが当社のウェブサイトまたはクライアントで情報を発布、アップロード、入力、提供または提出することにより、あなたは
				Love Party に対して、あなたが提出した情報の一部または全部を複製、使用、保存、変更、編集、翻訳または発布する永久的かつ取消不能で譲渡可能な権利を与えることになり、Love Party
				は情報の使用料を支払う必要はありません。Love Party は、あなたが提出した情報を発布または使用する義務を負わず、Love Party
				はいつでも独自の判断であなたが提出した情報を削除することができます。あなたが本ウェブサイトで情報を発布、ダウンロード、入力または提出することにより、あなたはあなたが発布した情報の管理権を有することを表明するものとします。あなたの情報が削除されたり、無効になったり、保存に失敗したりした場合、Love
				Party およびそのパートナーはこれに対して責任を負いません。
				会員アカウント
				あなたが当社のサービスに登録すると、あなたはアカウントとパスワードを受け取ります。あなたはあなたのアカウントとパスワードを秘密にするとともに、あなたのアカウントに関連するすべての活動に責任を負うものとします。会員に登録されると、あなたはあなたのプロファイルのすべての情報に責任を負うことになります。プロファイルまたはウェブサイトのサービス項目に色情またはその他の猥褻な内容を発布することは禁止されており、これはあなたの会員資格を脅かす可能性があります。Love
				Party ウェブサイトの会員が行うオフラインのデートについて、Love Party は一切の責任を負いません。あなたは、Love Party
				があなたに対してメール（サービス情報（変更やアップグレードを含む）、新機能またはイベント、サービスの利用に関する意見や提案を含む）を送信することに同意するものとします。
				著作権および商標権によって保護される資料
				Love Party ウェブサイトのコンテンツはすべて著作権によって保護されています（Copyright © 2023 - 2026）。
				免責事項
				Love Party ウェブサイトまたは Love Party（または Love Party
				の代理店もしくはパートナー）を通じて発布される資料は、「現状のまま」および「現存するまま」で提供されます。これには、明示または暗示のさまざまな保証や条件は含まれていません。Love Party
				は、第三者が提供するいかなる情報、製品またはサービスも管理していません。あなたは、サービスの利用について独自にリスクを負うことに明確に同意するものとします。適用法令の最大限の許容範囲に基づき、Love
				Party はすべての明示または暗示の保証について免責を宣言し、これらの保証の範囲には、限定されないが、暗示の販売可能性および特定の用途に適合する保証が含まれます。Love Party
				は、提供するサービスがあなたの要求を満たすことを保証せず、サービスが中断せず、適時、安全または正確であることを保証しません。Love Party は、サービスの利用および利用結果について保証しません。Love
				Party は、本ウェブサイトまたはサービス項目にウイルスまたはその他の有害なコンポーネントが含まれていないことを保証しません。Love Party
				は、ウェブサイトを通じて送信される情報の機密性を保持することを保証または表明しません。Love Party は、ウェブサイトの翻訳が正確かつ完全であることを保証しません。Love Party
				は、本ウェブサイトを通じて購入または取得したいかなる商品またはサービス、または本ウェブサイトで広告またはスポンサーされている商品またはサービス、または本ウェブサイトを通じて行われるいかなる取引についても保証しません。Love
				Party は、あなたが Love Party またはそのサービスから得た情報について、明示の保証（口頭または書面）を一切行いません。
			</article>
			<article v-if="langStr == 'ko'">
				Love Party는 웹사이트 서비스(이하 '서비스'라 함)의 다음과 같은 계약(「이용 약관」)을 정했습니다. 우리 서비스를 이용하는 모든 분은 이 이용 약관을 준수하는 데 동의한 것으로
				간주됩니다.

				이용 약관 동의
				이 계약(이용 약관)은 현재 및 미래에 운영되는 웹사이트와 클라이언트를 포함합니다. 이 서비스를 이용함으로써, Love Party의 회원(이하 '회원'이라 함)으로 등록 여부와 관계없이,
				귀하는 이 이용 약관에 동의한 것으로 간주됩니다. 만약 이 서비스 약관에 동의하지 않는다면, 우리 서비스 이용을 중단해 주세요.
				적격 요건
				만 18세 미만의 미성년자는 우리 서비스를 이용할 수 없습니다. 우리 서비스를 이용함으로써, 귀하는 이용 약관의 모든 규정을 준수할 권리와 능력이 있음을 선언하고 보장합니다.
				이용 약관 변경
				Love Party는 사전 통지 없이 이 이용 약관을 변경할 권리가 있습니다. 귀하는 정기적으로 서비스 약관의 변경 사항을 확인할 수 있습니다. 우리가 이용 약관을 변경한 후, 귀하가
				우리 서비스를 이용하면, 조회 여부와 관계없이, 귀하는 이러한 변경 사항에 동의한 것으로 간주됩니다.
				개인 정보 보호
				Love Party는 웹사이트 방문자의 개인 정보 보호를 존중합니다. 서비스 이용은 우리의 개인 정보 보호 정책을 따라야 합니다. Love Party의 파트너는 개인 정보 보호 정책의
				규정을 준수하기로 동의합니다.
				서비스 변경
				Love Party는 사전 통지 없이 서비스 기능이나 각종 서비스를 추가, 삭제 또는 수정할 수 있습니다.
				구독
				a) 결제 방식
				귀하의 결제 조건은 귀하의 결제 방식에 따라 결정되며, 이는 귀하와 금융 기관, 신용 카드 발급 기관 또는 귀하가 선택한 결제 서비스 제공자(결제 서비스 제공자) 간의 계약에 의해
				결정됩니다. 만약 Love Party가 귀하의 '결제 서비스 제공자'가 제공하는 결제 서비스를 받아들이지 않는다면, 귀하는 필요에 따라 모든 금액을 결제할 것에 동의합니다. 귀하는 우리
				서비스 이용에 대해 모든 미지급 금액을 결제할 것에 동의합니다. 만약 귀하의 계좌가 결제 완료된 경우, 귀하는 우리에게 결제 완료 상태를 취소하도록 요청할 수 있습니다. 일단 귀하의
				계정이 취소되면, 귀하의 결제 완료 상태는 마지막 결제일에 종료됩니다. 결제 완료 상태는 양도할 수 없습니다. Love Party의 결제 완료 상태는 최종 판매이며, 환불이 불가합니다.
				논란의 여지가 있는 요금은 서비스를 구매한 후 60일 이내에 Love Party에 신고해야 합니다. 귀하의 결제 완료 상태에 대한 문의 사항이 있으면, 우리에게 연락해 주세요.


				b) 서비스 갱신
				귀하가 Love Party 웹사이트에서 구독한 서비스는 자동으로 갱신되지 않습니다. 귀하는 우리의 고객 서비스 팀에 연락하여 언제든지 구독 내용을 변경하거나 재구독할 수 있습니다. 만약
				귀하가 재구독을 선택하면, 귀하의 구독 서비스는 만료 후 자동으로 갱신되지 않습니다. 구독 기간 만료 전에 구독을 취소한 경우, 환불이 불가합니다.

				c) 무료 체험 및 기타 프로모션
				어떠한 무료 체험 또는 기타 프로모션 방식으로도 구독자는 특정 체험 기간 동안 우리 서비스를 이용할 수 있습니다. 만약 프로모션 조항에 사용자가 서비스를 구독해야 한다는 규정이 있다면,
				귀하는 체험 기간 전에 구독을 취소하여 구독료를 지불하지 않도록 해야 합니다.

				파트너를 통한 Love Party 가입
				만약 귀하가 Love Party의 파트너를 통해 우리 서비스에 등록하고, Love Party가 해당 파트너와 협력하여 해당 서비스를 제공하는 경우, 귀하는 해당 서비스의 회원 권리를
				가지게 되며, Love Party은 귀하의 회원 자격을 이전하거나 귀하의 결제된 계정을 Love Party의 유사한 서비스 항목으로 이전할 권리가 있습니다.
				커뮤니티 콘텐츠
				모든 서비스 콘텐츠는 커뮤니티 콘텐츠 가이드라인의 요구 사항을 따라야 합니다. 귀하는 불법, 괴롭힘, 중상, 위협, 유해, 음란, 반역, 명예 훼손, 다른 사람의 명성을 훼손하는 내용,
				그리고 다른 사람의 개인 정보를 침해하는 내용을 포함한 어떠한 내용도 게시, 전송, 배포 또는 링크하지 않을 것에 동의합니다. 또한 다른 사람이나 단체의 권익을 침해하는 불쾌한 내용도
				보내지 않습니다. 지적 재산권 소유자의 서면 동의 없이 다른 사람의 지적 재산권, 저작권 및 상표권으로 보호되는 자료, 변경되거나 변경되지 않은 지적 재산권, 다른 사람의 비저작권 텍스트
				또는 이미지 등을 사용할 수 없습니다. Love Party은 회원이 보낸 어떠한 이메일이나 그룹 토론 글의 내용에 대해 책임을 지지 않으며, 제3자나 회원이 제공하는 어떠한 정보, 상품
				또는 서비스에 대해서도 책임을 지지 않습니다. 우리 서비스를 이용함으로써, 귀하는 다음과 같은 경우에 Love Party가 귀하나 다른 사람에 대해 책임을 지지 않는다는 사실에
				동의합니다. 예를 들어, 어떤 사람의 위협, 중상, 음란, 비열, 공격 또는 불법 행위, 또는 지적 재산권의 불법 사용을 포함한 침해 행위. Love Party은 귀하가 제공하는 모든
				정보(피드백 및 제안 포함), 또는 귀하가 Love Party에서 게시, 다운로드, 입력 또는 제출한 모든 정보(「제출된 정보」)를 소유하지 않습니다. 그러나 만약 귀하가 우리 웹사이트나
				클라이언트에서 정보를 게시, 업로드, 입력, 제공 또는 제출하면, 귀하는 Love Party에게 귀하가 제출한 정보의 일부 또는 전부를 복제, 사용, 저장, 수정, 편집, 번역 또는
				게시할 수 있는 영구적이고 철회 불가능하며 양도 가능한 권리를 부여하는 것입니다. 그리고 Love Party은 정보 사용료를 지불할 필요가 없습니다. Love Party은 귀하가 제출한
				정보를 게시하거나 사용할 의무가 없으며, 언제든지 자의로 귀하가 제출한 정보를 삭제할 수 있습니다. 귀하가 이 웹사이트에서 정보를 게시, 다운로드, 입력 또는 제출하면, 귀하는 귀하가
				게시한 정보에 대한 통제권을 가지고 있다는 것을 나타냅니다. 귀하의 정보가 삭제되거나 무효화되거나 저장에 실패한 경우, Love Party와 그 파트너는 이에 대해 책임을 지지 않습니다.
				회원 계정
				일단 귀하가 우리 서비스에 등록하면, 귀하는 계정과 비밀번호를 받게 됩니다. 귀하는 귀하의 계정과 비밀번호를 비밀리에 유지하고, 귀하의 계정과 관련된 모든 활동에 대해 책임을 져야
				합니다. 회원으로 등록되면, 귀하는 귀하의 프로필의 모든 정보에 대해 책임을 져야 합니다. 프로필이나 웹사이트 서비스 항목에 음란 또는 기타 불쾌한 내용을 게시하는 것은 금지되며, 이는
				귀하의 회원 자격을 위협할 수 있습니다. Love Party 웹사이트의 회원이 하는 오프라인 데이트에 대해, Love Party은 어떠한 책임도 지지 않습니다. 귀하는 Love
				Party이 귀하에게 이메일(서비스 정보(변경 및 업그레이드 포함), 새로운 기능 또는 이벤트, 서비스 이용에 대한 의견 및 제안 포함)을 보내는 것에 동의합니다.
				저작권 및 상표권으로 보호되는 자료
				Love Party 웹사이트의 콘텐츠는 모두 저작권(Copyright © 2023 - 2026)으로 보호됩니다.
				면책 조항
				Love Party 웹사이트 또는 Love Party(또는 Love Party의 대리인이나 파트너)를 통해 게시된 자료는 '현 상태 그대로' 및 '현재 존재하는 대로' 제공됩니다. 이에는
				다양한 명시적 또는 암시적 보증 및 조건이 없습니다. Love Party은 제3자가 제공하는 어떠한 정보, 제품 또는 서비스도 통제하지 않습니다. 귀하는 서비스 이용에 대해 독자적으로
				위험을 감수할 것에 명확히 동의합니다. 적용 법률의 최대 허용 범위에 따라, Love Party은 모든 명시적 또는 암시적 보증에 대해 면책을 선언하며, 이러한 보증의 범위에는 제한 없이
				암시된 판매 가능성 및 특정 용도 적합성 보증이 포함됩니다. Love Party은 제공하는 서비스가 귀하의 요구 사항을 충족할 것이라고 보장하지 않으며, 서비스가 중단되지 않고, 적시에,
				안전하게 또는 정확하게 제공될 것이라고 보장하지 않습니다. Love Party은 서비스 이용 및 이용 결과에 대해 보증하지 않습니다. Love Party은 이 웹사이트나 서비스 항목에
				바이러스나 기타 유해한 구성 요소가 포함되어 있지 않다고 보장하지 않습니다. Love Party은 웹사이트를 통해 전송되는 정보의 기밀성을 유지한다고 보장하거나 선언하지 않습니다.
				Love Party은 웹사이트 번역의 정확성과 완전성을 보장하지 않습니다. Love Party은 이 웹사이트를 통해 구매하거나 획득한 어떠한 상품 또는 서비스, 또는 이 웹사이트에서
				광고하거나 스폰서하는 상품 또는 서비스, 또는 이 웹사이트를 통해 이루어지는 어떠한 거래에 대해 보증하지 않습니다. Love Party은 귀하가 Love Party 또는 그 서비스에서
				얻은 정보에 대해 어떠한 명시적 보증(구두 또는 서면)을 하지 않습니다.
			</article>
			<article v-if="langStr == 'vi'">
				Love Party đã thiết lập thỏa thuận sau đây (được gọi là "Điều khoản sử dụng") liên quan đến dịch vụ
				trang web (sau đây được gọi tắt là "dịch vụ"). Bất kỳ ai sử dụng dịch vụ của chúng tôi đều được coi là
				đã đồng ý tuân thủ Điều khoản sử dụng của chúng tôi.

				Đồng ý Điều khoản sử dụng
				Thỏa thuận này (Điều khoản sử dụng) bao gồm cả trang web và ứng dụng khách hàng được vận hành hiện tại
				và trong tương lai. Bằng cách sử dụng dịch vụ này, cho dù bạn có đăng ký trở thành thành viên của Love
				Party (sau đây được gọi tắt là "thành viên") hay không, bạn sẽ được coi là đã đồng ý với các Điều khoản
				sử dụng này. Nếu bạn không đồng ý với Điều khoản dịch vụ này, vui lòng ngừng sử dụng dịch vụ của chúng
				tôi.
				Yêu cầu đủ điều kiện
				Những người chưa đủ 18 tuổi không được sử dụng dịch vụ của chúng tôi. Bằng cách sử dụng dịch vụ của
				chúng tôi, bạn đã tuyên bố và đảm bảo rằng bạn có quyền và khả năng tuân thủ tất cả các quy định trong
				Điều khoản sử dụng.
				Thay đổi Điều khoản sử dụng
				Love Party có quyền thay đổi Điều khoản sử dụng này mà không cần phải thông báo trước. Bạn có thể xem
				định kỳ các thay đổi của Điều khoản dịch vụ. Khi chúng tôi thay đổi Điều khoản sử dụng, nếu bạn sử dụng
				dịch vụ của chúng tôi, cho dù bạn có xem hay không, điều đó được coi là bạn đã đồng ý với các thay đổi
				này.
				Bảo mật
				Love Party tôn trọng quyền riêng tư của những người truy cập trang web. Việc sử dụng dịch vụ phải tuân
				theo Chính sách bảo mật của chúng tôi. Các đối tác của Love Party đồng ý tuân theo các quy định trong
				Chính sách bảo mật.
				Thay đổi dịch vụ
				Love Party có thể quyết định tự do tăng, xóa hoặc sửa đổi các chức năng dịch vụ hoặc các dịch vụ khác mà
				không cần phải thông báo trước.
				Đăng ký sử dụng
				a) Phương thức thanh toán
				Điều khoản thanh toán của bạn sẽ dựa trên phương thức thanh toán của bạn, và các điều khoản thanh toán
				được xác định bởi thỏa thuận giữa bạn và các tổ chức tài chính, tổ chức phát hành thẻ tín dụng hoặc các
				nhà cung cấp dịch vụ thanh toán khác mà bạn lựa chọn (nhà cung cấp dịch vụ thanh toán). Nếu Love Party
				không chấp nhận dịch vụ thanh toán được cung cấp bởi "nhà cung cấp dịch vụ thanh toán" của bạn, bạn đồng
				ý thanh toán tất cả các khoản tiền cần phải trả theo yêu cầu. Bạn đồng ý thanh toán tất cả các khoản nợ
				phải trả cho việc sử dụng dịch vụ của chúng tôi. Nếu bạn đã thanh toán khoản nợ của mình, bạn có thể yêu
				cầu chúng tôi hủy trạng thái đã thanh toán của bạn. Một khi tài khoản của bạn bị hủy, trạng thái đã
				thanh toán của bạn sẽ kết thúc vào ngày thanh toán cuối cùng. Trạng thái đã thanh toán không thể được
				chuyển nhượng. Trạng thái đã thanh toán của Love Party là giao dịch cuối cùng và không được hoàn tiền.
				Các khoản phí gây tranh cãi phải được báo cáo cho Love Party trong vòng 60 ngày kể từ khi bạn mua dịch
				vụ. Nếu bạn có bất kỳ câu hỏi nào về trạng thái đã thanh toán của mình, vui lòng liên hệ với chúng tôi.


				b) Gia hạn dịch vụ
				Dịch vụ bạn đăng ký sử dụng trên trang web Love Party sẽ không được gia hạn tự động. Bạn có thể liên hệ
				với đội ngũ dịch vụ khách hàng của chúng tôi để thay đổi hoặc đăng ký sử dụng lại bất kỳ lúc nào. Nếu
				bạn chọn đăng ký sử dụng lại, dịch vụ đăng ký của bạn sẽ không được gia hạn tự động sau khi hết hạn. Nếu
				bạn hủy đăng ký trước khi hết thời hạn đăng ký, sẽ không được hoàn tiền.

				c) Thử dùng miễn phí và các chương trình khuyến mãi khác
				Bất kỳ hình thức thử dùng miễn phí hoặc các chương trình khuyến mãi khác đều cho phép người đăng ký sử
				dụng dịch vụ của chúng tôi trong một thời gian thử dùng cụ thể. Nếu các điều khoản khuyến mãi quy định
				rằng người sử dụng phải đăng ký sử dụng dịch vụ, bạn nên hủy đăng ký trước thời gian thử dùng để tránh
				phải thanh toán phí đăng ký.

				Tham gia Love Party thông qua đối tác
				Nếu bạn đăng ký sử dụng dịch vụ của chúng tôi thông qua đối tác của Love Party và Love Party hợp tác với
				đối tác đó để cung cấp dịch vụ đó, bạn sẽ có quyền sử dụng dịch vụ như một thành viên. Đồng thời, Love
				Party có quyền chuyển đổi tư cách thành viên của bạn hoặc chuyển tài khoản đã thanh toán của bạn sang
				các dịch vụ tương tự của Love Party.
				Nội dung cộng đồng
				Tất cả Nội dung dịch vụ phải tuân theo hướng dẫn về Nội dung cộng đồng. Bạn đồng ý không đăng tải,
				truyền tải, phân phối hoặc tạo liên kết đến bất kỳ Nội dung nào liên quan đến hành vi bất hợp pháp, quấy
				rối, slander, đe dọa, có hại, bạo lực, trái luật, slander, bồi bại danh dự người khác, cũng như vi phạm
				quyền riêng tư của người khác, cũng như không gửi bất kỳ Nội dung nào gây khó chịu hoặc xâm phạm quyền
				lợi của người khác hoặc tổ chức. Không được sử dụng quyền sở hữu trí tuệ của người khác, bao gồm các tài
				liệu được bảo vệ bởi bản quyền và quyền thương hiệu, quyền sở hữu trí tuệ đã thay đổi hoặc chưa thay
				đổi, văn bản hoặc hình ảnh không có bản quyền của người khác, nếu không có sự đồng ý bằng văn bản của
				chủ sở hữu quyền sở hữu trí tuệ. Love Party sẽ không chịu trách nhiệm cho bất kỳ Nội dung nào trong các
				email hoặc bài thảo luận nhóm do thành viên gửi, cũng như không chịu trách nhiệm cho bất kỳ thông tin,
				hàng hóa hoặc dịch vụ nào được cung cấp bởi bên thứ ba hoặc thành viên. Bằng cách sử dụng dịch vụ của
				chúng tôi, bạn đồng ý rằng: trong các trường hợp sau, Love Party sẽ không chịu trách nhiệm đối với bạn
				hoặc người khác: ví dụ như: hành vi đe dọa, slander, bạo lực, tục tĩu, tấn công hoặc bất hợp pháp của
				bất kỳ bên nào, hoặc hành vi vi phạm quyền, bao gồm việc sử dụng bất hợp pháp quyền sở hữu trí tuệ. Love
				Party không sở hữu tất cả thông tin bạn cung cấp (bao gồm phản hồi và đề xuất), hoặc tất cả thông tin
				bạn đăng tải, tải xuống, nhập vào hoặc gửi lên trên Love Party (được gọi là "thông tin đã gửi"). Tuy
				nhiên, nếu bạn đăng tải, tải lên, nhập vào, cung cấp hoặc gửi thông tin trên trang web hoặc ứng dụng
				khách hàng của chúng tôi, điều đó có nghĩa là bạn cấp cho Love Party quyền sử dụng vĩnh viễn, không thể
				thu hồi và có thể chuyển nhượng, quyền sao chép, sử dụng, lưu trữ, sửa đổi, biên tập, dịch hoặc đăng tải
				bất kỳ hoặc tất cả thông tin bạn đã gửi, và không cần phải trả phí sử dụng thông tin. Love Party không
				có nghĩa vụ đăng tải hoặc sử dụng thông tin bạn đã gửi, và Love Party có thể tự quyết định xóa thông tin
				bạn đã gửi bất kỳ lúc nào. Bằng cách đăng tải, tải xuống, nhập vào hoặc gửi thông tin trên trang web
				này, bạn cho thấy rằng bạn có quyền kiểm soát thông tin bạn đã đăng tải. Nếu thông tin của bạn bị xóa,
				vô hiệu hóa hoặc lưu trữ thất bại, Love Party và các đối tác của nó sẽ không chịu trách nhiệm về điều
				đó.
				Tài khoản thành viên
				Khi bạn đăng ký dịch vụ của chúng tôi, bạn sẽ nhận được một tài khoản và mật khẩu. Bạn phải giữ bí mật
				tài khoản và mật khẩu của bạn và chịu trách nhiệm cho tất cả các hoạt động liên quan đến tài khoản của
				bạn. Khi đăng ký thành thành viên, bạn sẽ chịu trách nhiệm cho tất cả thông tin trong hồ sơ của bạn.
				Đăng tải nội dung 色情 hoặc 淫秽 khác trong hồ sơ hoặc các mục dịch vụ trang web là bị cấm, bởi vì điều đó
				sẽ đe dọa đến tư cách thành viên của bạn. Love Party sẽ không chịu bất kỳ trách nhiệm nào về các cuộc
				hẹn offline của thành viên trên trang web Love Party. Bạn đồng ý Love Party gửi email cho bạn (liên quan
				đến thông tin dịch vụ (bao gồm thay đổi và nâng cấp), tính năng mới hoặc sự kiện, ý kiến và đề xuất về
				việc sử dụng dịch vụ).
				Tài liệu được bảo vệ bởi bản quyền và quyền thương hiệu
				Nội dung trên trang web Love Party đều được bảo vệ bởi bản quyền (Copyright © 2023 - 2026).
				Phản ánh trách nhiệm
				Tài liệu được đăng trên trang web Love Party hoặc thông qua Love Party (hoặc đại lý hoặc đối tác của
				Love Party) đều được cung cấp theo "trạng thái hiện có" và "trạng thái hiện tại". Nó không có các bảo 證
				và điều kiện 明示 hoặc ngụ ý khác nhau. Love Party không kiểm soát bất kỳ thông tin, sản phẩm hoặc dịch vụ
				nào được cung cấp bởi bên thứ ba. Bạn đồng ý rõ ràng rằng việc sử dụng dịch vụ sẽ phải chịu rủi ro một
				mình. Theo mức độ cho phép lớn nhất của các luật và quy định áp dụng: Love Party sẽ phát biểu bản 声明兔責
				cho tất cả các bảo 證明示 hoặc ngụ ý, và phạm vi các bảo 證 này bao gồm nhưng không giới hạn đến bảo 證 về
				tính bán được và tính phù hợp cho mục đích cụ thể được ngụ ý; Love Party không đảm bảo rằng dịch vụ được
				cung cấp sẽ đáp ứng nhu cầu của bạn, cũng không đảm bảo rằng dịch vụ sẽ không bị gián đoạn, phù hợp thời
				điểm, an toàn hoặc chính xác. Love Party không đảm bảo việc sử dụng dịch vụ và kết quả sử dụng dịch vụ.
				Love Party cũng không đảm bảo rằng trang web hoặc các mục dịch vụ không chứa bất kỳ virus hoặc các thành
				phần có hại khác. Love Party không đảm bảo hoặc phát biểu rằng: giữ bí mật thông tin được truyền trên
				trang web. Love Party không đảm bảo độ chính xác và độ đầy đủ của bản dịch trang web. Love Party không
				đảm bảo những điều sau: bất kỳ sản phẩm hoặc dịch vụ nào được mua hoặc 獲得 thông qua trang web này, hoặc
				sản phẩm hoặc dịch vụ được quảng cáo hoặc tài trợ trên trang web này, hoặc bất kỳ giao dịch nào được
				thực hiện thông qua trang web này. Love Party không đưa ra bất kỳ bảo 證明示 nào (cho dù là bằng lời nói
				hoặc bằng văn bản) về thông tin bạn 獲得 từ Love Party hoặc dịch vụ của nó.
			</article>
			<article v-if="langStr == 'en'">
				Love Party has established the following agreement (the "Terms of Use") regarding the website services
				(hereinafter referred to as the "Services"). Anyone who uses our Services will be deemed to have agreed
				to abide by our Terms of Use.

				Agreement to the Terms of Use
				This agreement (the Terms of Use) covers the websites and clients that are currently operated and those
				to be operated in the future. By using this Service, whether or not you register as a member of Love
				Party (hereinafter referred to as a "Member"), you will be deemed to have agreed to these Terms of Use.
				If you do not agree to these Service Terms, please stop using our Services.
				Eligibility Requirements
				Minors under the age of 18 are not allowed to use our Services. By using our Services, you have declared
				and guaranteed that you have the right and ability to comply with all the provisions of the Terms of
				Use.
				Changes to the Terms of Use
				Love Party reserves the right to change these Terms of Use without prior notice. You can regularly check
				for changes to the Service Terms. After we have made changes to the Terms of Use, if you use our
				Services, regardless of whether you have browsed the changes or not, you will be deemed to have agreed
				to these changes.
				Privacy
				Love Party respects the privacy rights of website visitors. The use of the Service should comply with
				our Privacy Policy. Love Party's partners agree to abide by the provisions of the Privacy Policy.
				Service Changes
				Love Party may, at its sole discretion, add, delete, or modify the Service functions or various Services
				without prior notice.
				Subscription
				a) Payment Method
				Your payment terms will be based on your chosen payment method, and the payment terms will be determined
				by the agreement between you and the financial institution, credit card issuer, or other payment service
				provider you select (Payment Service Provider). If Love Party does not accept the payment service
				provided by your "Payment Service Provider", you agree to pay all amounts as required. You agree to pay
				all outstanding amounts for using our Services. If you have already paid your account, you can request
				us to cancel your paid status. Once your account is cancelled, your paid status will terminate on the
				date of your last payment. The paid status cannot be transferred. Love Party's paid status is a final
				sale and is not refundable. Disputed fees should be reported to Love Party within 60 days after you
				purchase the Service. If you have any questions about your paid status, please contact us.


				b) Service Renewal
				The Service you subscribed to on the Love Party website will not be automatically renewed. You can
				contact our customer service team to change or re-subscribe at any time. If you choose to re-subscribe,
				your subscribed Service will not be automatically renewed after it expires. If you cancel the
				subscription before the subscription period expires, you will not be eligible for a refund.

				c) Free Trial and Other Promotions
				Any free trial or other promotional means may allow subscribers to use our Services for a specific trial
				period. If the promotional terms stipulate that the user needs to subscribe to the Service, you should
				cancel the subscription before the trial period expires to avoid paying the subscription fee.

				Joining Love Party through Partners
				If you register to use our Services through Love Party's partner, and Love Party cooperates with its
				partner to provide the Service, you will have the membership rights to use the Service, and Love Party
				has the right to transfer your membership qualification or transfer your paid account to similar Service
				items of Love Party.
				Community Content
				All Service content should comply with the requirements of the Community Content Guidelines. You agree
				not to publish, transmit, distribute, or link to any content that involves illegal activities,
				harassment, defamation, threats, harm, obscenity, rebellion, slander, damage to others' reputations, and
				infringement of others' privacy, nor to send other content that is unpleasant or infringes on the rights
				and interests of others or groups. Without the written consent of the intellectual property owner, you
				shall not use the intellectual property of others, including materials protected by copyright and
				trademark rights, changed or unchanged intellectual property, non-copyrighted texts or images of others,
				etc.


				Love Party will not be responsible for the content of any emails or group discussion posts sent by
				Members, nor will it be responsible for any information, goods, or services provided by third parties or
				Members. By using our Services, you agree that Love Party will not be liable to you or others in the
				following situations: for example, any party's threatening, defamatory, obscene, vulgar, offensive, or
				illegal acts, or infringement acts, including the illegal use of intellectual property. Love Party does
				not own all the information you provide (including feedback and suggestions), or all the information you
				publish, download, enter, or submit on Love Party ("Submitted Information"). However, if you publish,
				upload, enter, provide, or submit information on our website or client, it means that you grant Love
				Party the right to copy, use, store, modify, edit, translate, or publish any or all of the information
				you submit, which is permanent, irrevocable, and transferable, and Love Party does not need to pay a
				usage fee for the information. Love Party has no obligation to publish or use the information you
				submit, and Love Party may, at its sole discretion, delete the information you submit at any time. By
				publishing, downloading, entering, or submitting information on this website, you represent that you
				have control over the information you publish. Love Party and its partners will not be responsible for
				the deletion, invalidation, or failure of storage of your information.

				Member Account
				Once you register for our Services, you will receive an account and a password. You should keep your
				account and password confidential and be responsible for all activities related to your account. Once
				you register as a Member, you will be responsible for all the information in your profile. It is
				prohibited to publish pornographic or other obscene content in your profile or website service items, as
				this may threaten your membership status. Love Party will not be responsible for any offline dating
				activities of Members of the Love Party website. You agree that Love Party may send you emails
				(involving service information (including changes and upgrades), new functions or events, opinions and
				suggestions on using the Service).
				Materials Protected by Copyright and Trademark Rights
				The content of the Love Party website is protected by copyright (Copyright © 2023-2026).
				Disclaimer
				The materials published on the Love Party website or through Love Party (or Love Party's agents or
				partners) are provided "as is" and "as available". It does not come with any express or implied
				warranties and conditions. Love Party does not control any information, products, or services provided
				by third parties. You expressly agree that the use of the Service will be at your sole risk. To the
				maximum extent permitted by applicable laws: Love Party disclaims all express or implied warranties, and
				the scope of such warranties includes but is not limited to the implied warranties of merchantability
				and fitness for a particular purpose; Love Party does not guarantee that the provided Service will meet
				your needs, nor does it guarantee that the Service will be uninterrupted, timely, secure, or error-free.
				Love Party does not warrant the use of the Service and the results of its use. Love Party also does not
				guarantee that the website or Service items are free from any viruses or other harmful components. Love
				Party does not guarantee or represent that it will maintain the confidentiality of the information
				transmitted on the website. Love Party does not guarantee the accuracy and completeness of the website
				translation. Love Party does not warrant the following: any goods or services purchased or obtained
				through this website, or goods or services advertised or sponsored on this website, or any transactions
				conducted through this website. Love Party does not make any express warranties (whether oral or
				written) regarding the information you obtain from Love Party or its Services.
			</article>
		</div>
		<div v-if="type == 3">
			<article v-if="langStr == 'zh'">
				love party尊重用戶的隱私權，並製定隱私政策，保護您的隱私權。隱私政策包括：love
				party的用戶情況，我們所收集的信息，怎樣利用這些信息，以及與誰分享這些信息。當您使用我們的網站或服務，或與我們進行商務交易時，我們建議你仔細閱讀“隱私政策”。通過使用我們的網站，表明您已接受本保密協議的規定。
				love party非常重視網絡隱私。如果您對該隱私政策有任何疑問，請聯繫我們。
				未滿18歲的人士
				love party不會故意收集或保存未滿18歲人士的個人驗證信息或非個人驗證信息，本網站下的任何項目均不面向未滿18歲的人士開放。如果你未滿18歲，請停止使用或禁止進入本網站或服務。如果love
				party獲悉所收集的信息中有未滿18歲人士的個人驗證信息，本網站將採取合理的步驟，刪除該信息。
				我們所收集的信息
				我們收集並處理以下信息：您填寫的相關信息（包括您的個人信息，聯繫信息，以及當您創建會員檔案時所填寫的其他檔案信息）。同時，我們也收集以下信息：當你自由填寫顧客調查表，提供反饋和參與競爭時，所提供的相關信息。如果您與我們聯繫，我們會記錄你的通信信息。交易信息包括您從我們網站定購有關產品和服務的信息。瀏覽我們網站的訪客，並且他們的信息已被記錄的，可以有權以相同的信息登錄，並有權更正信息或查看有關該信息的政策和規則。訪客可以直接與我們聯繫。
				其他方收集的信息
				我們允許第三方（包括我們的授權服務提供商，廣告公司和廣告網站）在我們的網站上發表廣告。如果你打開一個鏈接（例如一個廣告標誌），這將使你將離開我們的網站，登錄其他的網站，如果你隨後在其他網站上提供信息，我們將不能控制該信息的使用。本隱私政策將不對其他網站或廣告商的信息保密負責。對於其他網站如何使用你的信息，love
				party也將不為此負擔任何責任。
				我們怎樣使用收集的信息？
				我們按以下方式使用所收集的用戶信息：管理您的用戶賬戶（包括：通知您任何匹配的對象，提示，通告，更新資料或促銷活動）幫助你訂製個性化的網站回訪向您提供您所詢問的信息，產品或服務，或者你感興趣的信息進行市場分析和調查幫助我們改進服務結構，佈局和適用性
				我們與誰分享所收集的信息
				我們可能在特定方面將您的信息與第三方分享，例如：當您從我們網站訂製服務時，我們提供你的信息給第三方進行付款處理。但是我們將控制第三方使用您的信息，並對此負責。我們有可能將您的某些信息透露給我們的合作公司，以便向您提供服務，例如：郵件或聊天功能服務。為了提供這些服務，我們必須將您的信息（包括您的love
				party用戶名和email地址）提供給我們的合作夥伴。
				變更隱私政策
				我們經常審核“隱私政策”，並在此頁面公佈政策的變更信息。我們鼓勵會員經常審核我們的隱私政策，以便更好地了解我們所收集的信息，以及我們怎樣運用信息，以及在何種情況下使用信息，與他人分享信息。
				怎樣聯繫我們
				如果您對於本隱私政策或對於我們的信息處理方式有何疑問，或對於我們透露信息給第三方（為了直銷的目的）有疑問，請通過email或信件與聯繫我們。
			</article>
			<article v-if="langStr == 'jp'">
				Love Party はユーザーのプライバシー権を尊重し、プライバシーポリシーを策定して、あなたのプライバシー権を保護します。プライバシーポリシーには、Love Party
				のユーザーの状況、当社が収集する情報、それらの情報をどのように利用するか、および誰とそれらの情報を共有するかが含まれます。当社のウェブサイトまたはサービスを使用する場合、または当社と商取引を行う場合、「プライバシーポリシー」を慎重に読むことをお勧めします。当社のウェブサイトを使用することにより、あなたは本秘密保持契約の規定を受け入れたことになります。Love
				Party はネットワークプライバシーを非常に重視しています。もしこのプライバシーポリシーに関する疑問があれば、当社にご連絡ください。
				18 歳未満の方々

				Love Party は、故意に 18 歳未満の方々の個人識別情報または非個人識別情報を収集または保存しません。当ウェブサイトの下のどんな項目も 18 歳未満の方々には開放されていません。もしあなたが 18
				歳未満であれば、当ウェブサイトまたはサービスの使用を停止し、またはアクセスを禁止してください。Love Party が収集した情報の中に 18
				歳未満の方々の個人識別情報があることを知った場合、当ウェブサイトは合理的な措置を講じて、その情報を削除します。
				当社が収集する情報

				当社は以下の情報を収集し、処理します：あなたが記入した関連情報（あなたの個人情報、連絡先情報、およびあなたが会員プロファイルを作成するときに記入したその他のプロファイル情報を含む）。同時に、当社は以下の情報も収集します：あなたが自由に顧客アンケートを記入し、フィードバックを提供し、競争に参加するときに提供される関連情報。もしあなたが当社に連絡した場合、当社はあなたの通信情報を記録します。取引情報には、当社のウェブサイトから注文した関連製品とサービスの情報が含まれます。当社のウェブサイトを訪問し、その情報が記録された訪問者は、同じ情報でログインする権利があり、情報を訂正する権利や、その情報に関するポリシーと規則を閲覧する権利があります。訪問者は直接当社に連絡することができます。
				他の側が収集する情報

				当社は第三者（当社の承認を得たサービスプロバイダー、広告会社、および広告サイトを含む）に当社のウェブサイト上で広告を掲載することを許可しています。もしあなたがリンク（例えば広告マーク）を開いた場合、それによりあなたは当社のウェブサイトを離れ、他のウェブサイトにログインすることになります。もしあなたがその後他のウェブサイトで情報を提供した場合、当社はその情報の使用を制御することができません。本プライバシーポリシーは、他のウェブサイトや広告主の情報の機密保持について責任を負いません。他のウェブサイトがあなたの情報をどのように使用するかについて、Love
				Party も一切の責任を負いません。
				当社は収集した情報をどのように使用するのか？

				当社は収集したユーザー情報を以下のように使用します：

				あなたのユーザーアカウントを管理する（通知内容には、一致する相手、アラート、お知らせ、情報の更新、またはキャンペーンを含む）
				あなたがカスタマイズしたウェブサイトの再訪問を助ける
				あなたが問い合わせた情報、製品またはサービス、またはあなたが興味を持つ情報を提供する
				市場分析と調査を行う
				当社のサービスの構造、レイアウト、および適用性を改善するために役立つ

				当社は誰と収集した情報を共有するのか

				当社は特定の状況であなたの情報を第三者と共有する場合があります。例えば、あなたが当社のウェブサイトからサービスを購入する場合、当社はあなたの情報を第三者に提供して支払い処理を行わせます。しかし、当社は第三者があなたの情報を使用することを制御し、それについて責任を負います。当社はあなたの特定の情報を当社の提携会社に開示する可能性があり、それによりあなたにサービスを提供するためです。例えば、メールまたはチャット機能のサービスです。これらのサービスを提供するために、当社はあなたの情報（あなたの
				Love Party ユーザー名とメールアドレスを含む）を当社のパートナーに提供しなければなりません。
				プライバシーポリシーの変更

				当社は定期的に「プライバシーポリシー」を見直し、このページにポリシーの変更情報を公開します。当社は会員に対して、当社が収集する情報、当社が情報をどのように利用するか、およびどのような状況で情報を使用し、誰と情報を共有するかをより良く理解するために、定期的に当社のプライバシーポリシーを見直すことを奨励します。
				当社にどのように連絡するのか

				もし本プライバシーポリシーや当社の情報処理方法に関する疑問がある場合、または当社が第三者に情報を開示すること（直営販売の目的のため）に関する疑問がある場合は、メールまたは郵便で当社に連絡してください。
			</article>
			<article v-if="langStr == 'ko'">
				Love Party는 사용자의 개인 정보 보호 권리를 존중하며 개인 정보 보호 정책을 수립하여 당신의 개인 정보 보호 권리를 보호합니다. 개인 정보 보호 정책에는 Love Party의
				사용자 상황, 우리가 수집하는 정보, 이 정보를 어떻게 활용하는지, 그리고 누구와 이 정보를 공유하는지가 포함됩니다. 우리 웹사이트나 서비스를 사용하거나 우리와 상거래를 할 때, 우리는
				"개인 정보 보호 정책"을 철저하게 읽기를 권유합니다. 우리 웹사이트를 사용함으로써, 당신은 이 비밀 보호 계약의 규정을 수용한 것으로 간주됩니다. Love Party는 네트워크 개인
				정보 보호를 매우 중요시합니다. 만약 이 개인 정보 보호 정책에 대한 질문이 있다면, 우리에게 연락해 주세요.
				만 18세 미만의 분들

				Love Party는 의도적으로 만 18세 미만의 분들의 개인 식별 정보나 비개인 식별 정보를 수집하거나 보관하지 않습니다. 이 웹사이트의 어떤 항목도 만 18세 미만의 분들에게는
				열려있지 않습니다. 만약 당신이 만 18세 미만이라면, 이 웹사이트나 서비스의 사용을 중지하거나 액세스를 금지해 주세요. Love Party가 수집한 정보 중 만 18세 미만의 분들의
				개인 식별 정보가 있다는 것을 알게 되면, 이 웹사이트는 합리적인 조치를 취해 해당 정보를 삭제할 것입니다.
				우리가 수집하는 정보

				우리는 다음과 같은 정보를 수집하고 처리합니다: 당신이 기입한 관련 정보(당신의 개인 정보, 연락처 정보, 그리고 당신이 회원 프로필을 생성할 때 기입한 기타 프로필 정보 포함).
				동시에, 우리는 다음과 같은 정보도 수집합니다: 당신이 자유롭게 고객 설문을 기입하고, 피드백을 제공하며, 경쟁에 참여할 때 제공되는 관련 정보. 만약 당신이 우리에게 연락한다면, 우리는
				당신의 통신 정보를 기록합니다. 거래 정보에는 우리 웹사이트에서 주문한 관련 제품과 서비스의 정보가 포함됩니다. 우리 웹사이트를 방문하고 그 정보가 기록된 방문자는 같은 정보로 로그인할
				권리가 있으며, 정보를 수정할 권리나 해당 정보에 대한 정책과 규칙을 조회할 권리가 있습니다. 방문자는 직접 우리에게 연락할 수 있습니다.
				다른 측에서 수집하는 정보

				우리는 제3자(우리의 승인을 받은 서비스 제공자, 광고 회사, 및 광고 웹사이트 포함)가 우리 웹사이트에 광고를 게재할 수 있도록 허용합니다. 만약 당신이 링크(예: 광고 표시)를 열면,
				그로 인해 당신은 우리 웹사이트를 떠나 다른 웹사이트에 로그인하게 됩니다. 만약 당신이 그 후 다른 웹사이트에서 정보를 제공한다면, 우리가 그 정보의 사용을 제어할 수 없습니다. 이 개인
				정보 보호 정책은 다른 웹사이트나 광고주가 정보를 비밀리에 보관하는 데에 대해 책임을 지지 않습니다. 다른 웹사이트가 당신의 정보를 어떻게 사용하는지에 대해 Love Party도 어떠한
				책임도 지지 않습니다.
				우리가 수집한 정보를 어떻게 사용하나?

				우리는 수집한 사용자 정보를 다음과 같이 사용합니다:

				당신의 사용자 계정을 관리합니다(통지 내용에는 일치하는 상대, 알림, 공지사항, 정보 업데이트 또는 캠페인 포함)
				당신이 맞춤 설정한 웹사이트의 재방문을 돕습니다.
				당신이 문의한 정보, 제품 또는 서비스, 또는 당신이 관심을 가진 정보를 제공합니다.
				시장 분석과 조사를 수행합니다.
				우리 서비스의 구조, 계열 및 적용성을 개선하는 데 도움을 줍니다.

				우리가 누구와 수집한 정보를 공유하나?

				우리는 특정한 상황에서 당신의 정보를 제3자와 공유할 수 있습니다. 예를 들어, 당신이 우리 웹사이트에서 서비스를 구매하는 경우, 우리가 당신의 정보를 제3자에게 제공하여 결제 처리를
				수행합니다. 그러나 우리가 제3자가 당신의 정보를 사용하는 것을 통제하고, 이에 대해 책임을 집니다. 우리가 당신의 특정 정보를 우리의 제휴 회사에게 공개할 가능성이 있으며, 이는
				당신에게 서비스를 제공하기 위해서입니다. 예를 들어, 이메일 또는 채팅 기능 서비스입니다. 이러한 서비스를 제공하기 위해, 우리는 당신의 정보(당신의 Love Party 사용자 이름과
				이메일 주소 포함)를 우리의 파트너에게 제공해야 합니다.
				개인 정보 보호 정책의 변경

				우리는 정기적으로 "개인 정보 보호 정책"을 검토하고, 이 페이지에 정책의 변경 사항을 공개합니다. 우리 회원들에게 우리가 수집하는 정보, 우리가 정보를 어떻게 활용하는지, 그리고 어떤
				상황에서 정보를 사용하고 누구와 정보를 공유하는지에 대해 더 잘 이해하도록 정기적으로 우리의 개인 정보 보호 정책을 검토하도록 장려합니다.
				우리에게 어떻게 연락하나?

				만약 이 개인 정보 보호 정책이나 우리의 정보 처리 방법에 대한 질문이 있거나, 우리가 제3자에게 정보를 공개하는 것(직접 판매 목적)을 위한 질문이 있다면, 이메일이나 우편으로 우리에게
				연락해 주세요.
			</article>
			<article v-if="langStr == 'vi'">
				Love Party tôn trọng quyền riêng tư của người dùng và đã thiết lập Chính sách bảo mật để bảo vệ quyền
				riêng tư của bạn. Chính sách bảo mật bao gồm: tình trạng người dùng của Love Party, các thông tin mà
				chúng tôi thu thập, cách sử dụng các thông tin này và đối tượng mà chúng tôi chia sẻ các thông tin này.
				Khi bạn sử dụng trang web hoặc dịch vụ của chúng tôi, hoặc thực hiện các giao dịch thương mại với chúng
				tôi, chúng tôi khuyên bạn nên đọc kỹ "Chính sách bảo mật". Bằng cách sử dụng trang web của chúng tôi,
				bạn đã đồng ý tuân thủ các quy định của Hợp đồng bảo mật này. Love Party rất 看重 quyền riêng tư trên
				mạng. Nếu bạn có bất kỳ câu hỏi nào về Chính sách bảo mật này, vui lòng liên hệ với chúng tôi.
				Những người dưới 18 tuổi

				Love Party sẽ không cố tình thu thập hoặc lưu trữ các thông tin xác thực cá nhân hoặc các thông tin
				không xác thực cá nhân của những người dưới 18 tuổi. Không có bất kỳ mục nào trên trang web này được mở
				cho những người dưới 18 tuổi. Nếu bạn dưới 18 tuổi, vui lòng ngừng sử dụng hoặc không được truy cập vào
				trang web hoặc dịch vụ này. Nếu Love Party biết rằng trong các thông tin đã thu thập có các thông tin
				xác thực cá nhân của những người dưới 18 tuổi, trang web này sẽ thực hiện các bước hợp lý để xóa các
				thông tin đó.
				Các thông tin chúng tôi thu thập

				Chúng tôi thu thập và xử lý các thông tin sau: Các thông tin liên quan mà bạn điền vào (bao gồm thông
				tin cá nhân của bạn, thông tin liên lạc và các thông tin hồ sơ khác mà bạn điền vào khi tạo hồ sơ thành
				viên). Đồng thời, chúng tôi cũng thu thập các thông tin sau: Khi bạn tự do điền vào các cuộc khảo sát
				khách hàng, cung cấp phản hồi và tham gia vào các cuộc thi đua, các thông tin liên quan được cung cấp.
				Nếu bạn liên hệ với chúng tôi, chúng tôi sẽ ghi lại thông tin 통訊 của bạn. Thông tin giao dịch bao gồm
				các thông tin về sản phẩm và dịch vụ bạn đặt hàng từ trang web của chúng tôi. Những người truy cập vào
				trang web của chúng tôi và thông tin của họ đã được ghi lại có quyền đăng nhập với các thông tin giống
				nhau và có quyền sửa các thông tin hoặc xem các chính sách và quy tắc liên quan đến các thông tin đó.
				Những người truy cập có thể liên hệ trực tiếp với chúng tôi.
				Các thông tin thu thập bởi bên thứ ba

				Chúng tôi cho phép bên thứ ba (bao gồm những người cung cấp dịch vụ đượcủy quyền của chúng tôi, các công
				ty quảng cáo và các trang web quảng cáo) đăng quảng cáo trên trang web của chúng tôi. Nếu bạn mở một
				liên kết (ví dụ như một dấu hiệu quảng cáo), điều đó sẽ khiến bạn rời khỏi trang web của chúng tôi và
				đăng nhập vào các trang web khác. Nếu sau đó bạn cung cấp thông tin trên các trang web khác, chúng tôi
				sẽ không thể kiểm soát việc sử dụng các thông tin đó. Chính sách bảo mật này sẽ không chịu trách nhiệm
				về việc giữ bí mật các thông tin của các trang web khác hoặc các nhà quảng cáo. Love Party cũng sẽ không
				chịu bất kỳ trách nhiệm nào về việc các trang web khác sử dụng thông tin của bạn.
				Cách chúng tôi sử dụng các thông tin đã thu thập?

				Chúng tôi sử dụng các thông tin người dùng đã thu thập theo các cách sau: Quản lý tài khoản người dùng
				của bạn (bao gồm: Thông báo cho bạn về bất kỳ đối tượng phù hợp nào, các thông báo, thông cáo, cập nhật
				dữ liệu hoặc các hoạt động quảng cáo) Giúp bạn đặt lại truy cập trang web cá nhân hóa. Cung cấp cho bạn
				các thông tin, sản phẩm hoặc dịch vụ mà bạn đã hỏi, hoặc các thông tin mà bạn quan tâm. Thực hiện phân
				tích và 조 tra thị trường. Giúp chúng tôi cải thiện cấu trúc, bản đồ và tính phù hợp của dịch vụ.
				Chúng tôi sẽ chia sẻ các thông tin đã thu thập với ai?

				Chúng tôi có thể chia sẻ thông tin của bạn với bên thứ ba trong các trường hợp cụ thể, ví dụ như: Khi
				bạn đăng ký dịch vụ từ trang web của chúng tôi, chúng tôi cung cấp thông tin của bạn cho bên thứ ba để
				thực hiện việc xử lý thanh toán. Nhưng chúng tôi sẽ kiểm soát việc sử dụng thông tin của bạn bởi bên thứ
				ba và chịu trách nhiệm về điều đó. Chúng tôi có khả năng tiết lộ một số thông tin của bạn cho các công
				ty hợp tác của chúng tôi để cung cấp dịch vụ cho bạn, ví dụ như: Dịch vụ email hoặc chức năng chat. Để
				cung cấp các dịch vụ này, chúng tôi phải cung cấp thông tin của bạn (bao gồm tên người dùng Love Party
				và địa chỉ email của bạn) cho các đối tác của chúng tôi.
				Thay đổi Chính sách bảo mật

				Chúng tôi thường xuyên xem xét "Chính sách bảo mật" và công bố các thay đổi của chính sách trên trang
				này. Chúng tôi khuyến khích thành viên thường xuyên xem xét Chính sách bảo mật của chúng tôi để hiểu rõ
				hơn về các thông tin chúng tôi đã thu thập, cách chúng tôi sử dụng các thông tin và trong những trường
				hợp nào chúng tôi sử dụng và chia sẻ các thông tin với người khác.
				Cách liên hệ chúng tôi

				Nếu bạn có bất kỳ câu hỏi nào về Chính sách bảo mật này hoặc về cách chúng tôi xử lý các thông tin, hoặc
				về việc chúng tôi tiết lộ các thông tin cho bên thứ ba (để mục đích tiếp 銷), vui lòng liên hệ chúng tôi
				qua email
			</article>
			<article v-if="langStr == 'en'">
				Love Party respects users' privacy rights and has formulated a privacy policy to protect your privacy
				rights. The privacy policy includes information about Love Party's users, the information we collect,
				how we use this information, and with whom we share this information. When you use our website or
				services, or conduct business transactions with us, we recommend that you carefully read the "Privacy
				Policy". By using our website, you have indicated your acceptance of the provisions of this
				confidentiality agreement. Love Party attaches great importance to online privacy. If you have any
				questions about this privacy policy, please contact us.
				Persons Under 18 Years of Age

				Love Party will not deliberately collect or store the personal verification information or non-personal
				verification information of persons under 18 years of age. No items under this website are open to
				persons under 18 years of age. If you are under 18 years of age, please stop using or refrain from
				accessing this website or services. If Love Party becomes aware that the collected information contains
				the personal verification information of persons under 18 years of age, this website will take
				reasonable steps to delete such information.
				Information We Collect

				We collect and process the following information: relevant information you fill in (including your
				personal information, contact information, and other profile information you fill in when creating a
				member profile). At the same time, we also collect the following information: relevant information
				provided when you freely fill in customer surveys, provide feedback, and participate in competitions. If
				you contact us, we will record your communication information. Transaction information includes
				information about products and services you order from our website. Visitors to our website whose
				information has been recorded have the right to log in with the same information, and have the right to
				correct the information or view the policies and rules related to that information. Visitors can contact
				us directly.
				Information Collected by Other Parties

				We allow third parties (including our authorized service providers, advertising companies, and
				advertising websites) to place advertisements on our website. If you click on a link (such as an
				advertisement logo), it will cause you to leave our website and log in to other websites. If you
				subsequently provide information on other websites, we will not be able to control the use of that
				information. This privacy policy will not be responsible for the information confidentiality of other
				websites or advertisers. Love Party will also not bear any responsibility for how other websites use
				your information.
				How Do We Use the Collected Information?

				We use the collected user information in the following ways:

				Manage your user account (including: notifying you of any matching objects, prompts, announcements, data
				updates, or promotional activities)
				Help you customize personalized website 回访
				Provide you with the information, products, or services you inquire about, or the information you are
				interested in
				Conduct market analysis and research
				Help us improve the structure, layout, and applicability of our services

				With Whom Do We Share the Collected Information?

				We may share your information with third parties in specific situations. For example, when you subscribe
				to services from our website, we provide your information to third parties for payment processing.
				However, we will control the use of your information by third parties and be responsible for it. We may
				disclose certain information of yours to our partner companies to provide you with services, such as
				email or chat function services. To provide these services, we must provide your information (including
				your Love Party username and email address) to our partners.
				Changes to the Privacy Policy

				We regularly review the "Privacy Policy" and publish the policy changes on this page. We encourage
				members to regularly review our privacy policy to better understand the information we collect, how we
				use the information, and in what situations we use and share the information with others.
				How to Contact Us

				If you have any questions about this privacy policy or our information processing methods, or about our
				disclosure of information to third parties (for direct sales purposes), please contact us via email or
				letter.
			</article>
		</div>
	</div>
</template>

<script setup>
	import {
		useRouter,
		useRoute
	} from 'vue-router';
	import {
		ref,
		onMounted,
		onUnmounted,
		reactive,
		onBeforeMount
	} from 'vue';
	import {
		Carousel
	} from 'ant-design-vue';
	import mainApi from '../api/main.js'
	import {
		ElNotification
	} from 'element-plus'
	import {
		message
	} from 'ant-design-vue';
	import en from '../locales/en.js';
	import zh from '../locales/zh.js';
	import jp from '../locales/jp.js';
	import ko from '../locales/ko.js';
	import vi from '../locales/vi.js';
	const langs = {
		en,
		zh,
		jp,
		ko,
		vi
	}
	let lang = langs[localStorage.getItem('language')]
	const router = useRouter();
	const route = useRoute();
	console.log(router)
	const user = JSON.parse(localStorage.getItem('user'))
	if (!user) {
		router.replace('/login');
	}
	import {
		useCounterStore
	} from '../store/index';
	import mineApi from '../api/mine.js'

	const store = useCounterStore();
	const userInfo = ref({})
	const getUser = () => {
		mineApi.get_user({
			account: JSON.parse(localStorage.getItem('user')).account
		}).then(res => {
			if (res.code == 0) {
				const user = res.rows[0]
				console.log(user)
				delete user.password
				userInfo.value = user
				store.user = user
				console.log(store.user)
				const localUser = user
				localStorage.setItem('user', JSON.stringify(localUser))
			} else {
				message.error('fail');
			}
		})
	}
	//初始化用户信息
	getUser()
	let langStr = ref()
	langStr.value = localStorage.getItem('language')
	let type = ref()
	type.value = route.query.type
	console.log(type.value)
	onBeforeMount(() => {})
	onMounted(async () => {});
</script>

<style scoped>
	.back {
		position: absolute;
		left: 10px;
		top: 10px;
		z-index: 1;
	}

	article {
		text-align: left;
		text-indent: 2em;
	}

	.main {
		background-color: #7A71F1;
		height: 90vh;
		overflow: scroll;
		padding: 50px 10px;
		position: relative;
	}
</style>