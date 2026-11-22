(function () {
  "use strict";

  const copy = {
    tr: {
      Services: "Hizmetler",
      Insights: "İçgörüler",
      Solutions: "Çözümler",
      Platform: "İşleyiş",
      "Contact ↗": "İletişim ↗",
      "How It Works": "Nasıl Çalışır",
      Founders: "Kurucular",
      "Book a Call ↗": "Görüşme Planla ↗",
      "Cross-border trade coordination": "Sınır ötesi ticaret koordinasyonu",
      "Interactive globe showing trade connections; drag to rotate":
        "Ticaret bağlantılarını gösteren etkileşimli küre; döndürmek için sürükleyin",
      "Supplier check: magnifying glass and business buildings":
        "Tedarikçi kontrolü: büyüteç ve iş yeri binaları",
      "Payment milestones: transaction checkpoints and secure lock":
        "Ödeme kilometre taşları: işlem kontrol noktaları ve güvenli kilit",
      "Construction and building materials": "İnşaat ve yapı malzemeleri",
      "Trade corridor illustration for Africa, Türkiye, and China, with Africa–Türkiye as the initial focus":
        "Afrika, Türkiye ve Çin için ticaret koridoru görseli; başlangıç odağı Afrika–Türkiye",
      "Trade connections across Africa, Türkiye, and China; initial focus is Africa–Türkiye":
        "Afrika, Türkiye ve Çin arasındaki ticaret bağlantıları; ilk odak Afrika–Türkiye",
      "GlobxLink works in the operational middle between agreement and delivery — helping businesses bring structure, visibility, and better coordination to cross-border trade.":
        "GlobxLink, anlaşma ile teslimat arasındaki operasyonel aşamada çalışarak işletmelerin sınır ötesi ticarete yapı, görünürlük ve daha iyi koordinasyon kazandırmasına yardımcı olur.",
      "Discuss Your Trade Requirement ↗": "Ticaret İhtiyacınızı Görüşelim ↗",
      "Counterparty checks": "Karşı taraf kontrolleri",
      "Execution visibility": "Uygulama görünürlüğü",
      "Africa ↔ Türkiye corridor": "Afrika ↔ Türkiye koridoru",
      "Our Services": "Hizmetlerimiz",
      "Two ways in. One coordinated path.": "İki başlangıç noktası. Tek koordineli yol.",
      "Most trade work starts with one of two needs — getting a transaction ready to run, or finding the right provider. Both can lead to coordinated execution through the middle of trade. Start with the Assessment for an end-to-end transaction; choose a Provider Request when you only need to find or check a provider.":
        "Ticaret ihtiyaçları genellikle iki noktadan başlar: bir işlemi yürütmeye hazırlamak veya doğru sağlayıcıyı bulmak. Her iki ihtiyaç da ticaretin operasyonel aşamasında koordinasyona dönüşebilir. İşlemin tamamı için Değerlendirme ile başlayın; yalnızca sağlayıcı bulmak veya kontrol etmek istiyorsanız Sağlayıcı Talebi’ni seçin.",
      "Recommended · Start here": "Önerilen · Buradan başlayın",
      "Trade Readiness & Coordination Assessment": "Ticaret Hazırlık ve Koordinasyon Değerlendirmesi",
      "A structured review of one cross-border transaction before you commit further.":
        "Daha ileri taahhütlerde bulunmadan önce tek bir sınır ötesi işlemin yapılandırılmış incelemesi.",
      "Clarify what is confirmed, unconfirmed, and exposed": "Doğrulanan, doğrulanmayan ve risk taşıyan noktaları netleştirin",
      "Review corridor, specifications, terms, documents, and milestones": "Koridoru, özellikleri, koşulları, belgeleri ve kilometre taşlarını inceleyin",
      "Prioritise the next steps and likely constraints": "Sonraki adımlara ve olası kısıtlara öncelik verin",
      "Explore the Assessment →": "Değerlendirmeyi inceleyin →",
      "The express lane": "Hızlı başlangıç",
      "Find a Provider": "Sağlayıcı Bulun",
      "A lighter way in when you have a defined need and want a relevant provider shortlist.":
        "İhtiyacınız belirliyse ve uygun sağlayıcılardan oluşan bir kısa liste istiyorsanız daha yalın bir başlangıç.",
      "Share product or service, location, quantity, and timing": "Ürün veya hizmeti, konumu, miktarı ve zamanlamayı paylaşın",
      "Review potential providers against your stated requirements": "Olası sağlayıcıları belirttiğiniz gereksinimlere göre inceleyin",
      "See which checks were made and what still needs confirming": "Hangi kontrollerin yapıldığını ve nelerin doğrulanması gerektiğini görün",
      "Explore Provider Requests →": "Sağlayıcı Taleplerini inceleyin →",
      "Supplier introductions where available": "Uygun olduğunda tedarikçi tanıştırmaları",
      "Supplier and counterparty checks against available evidence": "Mevcut kanıtlara göre tedarikçi ve karşı taraf kontrolleri",
      "Payment-milestone mapping — buyer and supplier define terms; GlobxLink does not hold or move funds":
        "Ödeme kilometre taşlarının eşleştirilmesi — koşulları alıcı ve tedarikçi belirler; GlobxLink fon tutmaz veya aktarmaz",
      "Quality and quantity checkpoints, with the parties or an appointed inspector":
        "Taraflar veya görevlendirilen denetçiyle kalite ve miktar kontrol noktaları",
      "Shipment-readiness confirmation": "Sevkiyata hazırlık teyidi",
      "On-the-ground coordination where arranged": "Düzenlendiği durumlarda sahada koordinasyon",
      "Construction & Building Materials": "İnşaat ve Yapı Malzemeleri",
      "Packaging & Industrial Supplies": "Ambalaj ve Endüstriyel Malzemeler",
      "Packaging materials and industrial supplies. Specifications, availability, and lead times matter.":
        "Ambalaj malzemeleri ve endüstriyel tedarikler. Özellikler, bulunabilirlik ve teslim süreleri önemlidir.",
      "Our initial commercial focus is the Africa–Türkiye corridor. Different geographies bring different documentation, timing, language, and operational considerations; a clear coordination framework helps make those moving parts visible.":
        "İlk ticari odağımız Afrika–Türkiye koridorudur. Farklı coğrafyalar farklı belge, zamanlama, dil ve operasyon gereksinimleri getirir; açık bir koordinasyon çerçevesi bu unsurları görünür kılar.",
      "Africa ↔ Türkiye · Initial focus": "Afrika ↔ Türkiye · İlk odak",
      "China · Broader trade context": "Çin · Daha geniş ticaret bağlamı",
      "Concept view": "Kavramsal görünüm",
      "How coordination works — a concept view.": "Koordinasyon nasıl işler — kavramsal bir görünüm.",
      "GlobxLink is a coordination service. This illustrative interface describes a possible way to organize the work; it is not a live product or trade record.":
        "GlobxLink bir koordinasyon hizmetidir. Bu örnek arayüz, işin nasıl düzenlenebileceğini gösterir; canlı bir ürün veya ticaret kaydı değildir.",
      "Available-evidence checks": "Mevcut kanıtlara dayalı kontroller",
      "Progress visibility": "İlerleme görünürlüğü",
      "Concept · Workflow overview · Organized checkpoints · Visible handoffs":
        "Kavram · İş akışı özeti · Düzenli kontrol noktaları · Görünür devirler",
      "Practical questions for cross-border buyers.": "Sınır ötesi alıcılar için pratik sorular.",
      "Clear, useful starting points for evaluating providers and preparing a transaction.":
        "Sağlayıcıları değerlendirmek ve işlemi hazırlamak için açık ve faydalı başlangıç noktaları.",
      "BUYER CHECKLIST": "ALICI KONTROL LİSTESİ",
      "What should buyers check before paying an overseas supplier?":
        "Alıcılar yurt dışındaki bir tedarikçiye ödeme yapmadan önce neleri kontrol etmeli?",
      "Build a practical pre-payment review around identity, evidence, terms, documents, and agreed checkpoints.":
        "Kimlik, kanıt, koşullar, belgeler ve kararlaştırılmış kontrol noktalarını içeren pratik bir ödeme öncesi inceleme yapın.",
      "Read the article →": "Makaleyi okuyun →",
      "PROVIDER DISCOVERY": "SAĞLAYICI ARAŞTIRMASI",
      "Why finding a supplier is not the same as finding a capable supplier":
        "Tedarikçi bulmak neden yetkin bir tedarikçi bulmakla aynı değildir?",
      "Turn a broad sourcing request into criteria that can be assessed and confirmed.":
        "Genel bir tedarik talebini değerlendirilebilir ve doğrulanabilir ölçütlere dönüştürün.",
      "PRODUCTION PLANNING": "ÜRETİM PLANLAMASI",
      "Understanding MOQ, production capacity, and lead times":
        "Minimum sipariş miktarı, üretim kapasitesi ve teslim sürelerini anlamak",
      "Learn how minimum orders, capacity, and schedule assumptions affect a supplier brief.":
        "Minimum siparişlerin, kapasitenin ve takvim varsayımlarının tedarikçi talebini nasıl etkilediğini öğrenin.",
      "Visit the Insights hub →": "İçgörüler merkezini ziyaret edin →",
      "The Team": "Ekip",
      "The Team →": "Ekip →",
      "Skip to content": "İçeriğe geç",
      "People working across the middle of trade.": "Ticaretin operasyonel aşamasında çalışan ekip.",
      "We started GlobxLink to address the operational realities of cross-border trade through practical coordination and clearer handoffs.":
        "GlobxLink'i, sınır ötesi ticaretin operasyonel gerçeklerine pratik koordinasyon ve daha açık devirlerle yanıt vermek için kurduk.",
      "A team of six across China, Türkiye, and Africa — plus remote engineering — with people joining as we partner and hire.":
        "Çin, Türkiye ve Afrika'da altı kişilik bir ekip ve uzaktan çalışan mühendislik ekibi — ortaklıklar ve işe alımlarla büyüyoruz.",
      "Founder focused on facilitating cross-border trade between African and Turkish businesses, coordinating supplier interactions and day-to-day execution across language, culture, and operational complexity.":
        "Afrika ve Türkiye'deki işletmeler arasında sınır ötesi ticareti kolaylaştırmaya odaklanan kurucu; dil, kültür ve operasyonel karmaşıklık boyunca tedarikçi etkileşimlerini ve günlük uygulamayı koordine eder.",
      "Product engineer leading the design of the GlobxLink coordination-workspace concept — milestone structure, documentation flow, and partner integrations. Background in financial-services systems where settlement evidence is non-negotiable.":
        "GlobxLink koordinasyon çalışma alanı kavramının tasarımına liderlik eden ürün mühendisi — kilometre taşı yapısı, belge akışı ve iş ortağı entegrasyonları. Mutabakat kanıtlarının vazgeçilmez olduğu finansal hizmet sistemlerinde deneyim sahibidir.",
      "Systems engineer responsible for verification tooling and workflows. Focus on the underlying technical work that makes counterparty checks, document routing, and audit trails reliable enough to depend on in real transactions.":
        "Kontrol araçları ve iş akışlarından sorumlu sistem mühendisi. Karşı taraf kontrollerini, belge yönlendirmesini ve denetim izlerini gerçek işlemlerde güvenilebilecek hale getiren teknik çalışmalara odaklanır.",
      "Tell us about the corridor, product, and current stage of the transaction.":
        "Koridoru, ürünü ve işlemin mevcut aşamasını anlatın.",
      "Choose the service that best matches your need, then tell us the corridor, product, and current stage of the transaction.":
        "İhtiyacınıza en uygun hizmeti seçin; ardından koridoru, ürünü ve işlemin mevcut aşamasını belirtin.",
      "Provider Request": "Sağlayıcı Talebi",
      "Trade Readiness Assessment": "Ticaret Hazırlık Değerlendirmesi",
      Partnerships: "İş Ortaklıkları",
      "Prepare your inquiry": "Talebinizi hazırlayın",
      "Share the essentials so the right service can be discussed.":
        "Doğru hizmeti görüşebilmek için temel bilgileri paylaşın.",
      "Your name": "Adınız",
      Company: "Şirket",
      "Company name": "Şirket adı",
      "Business email": "İş e-posta adresi",
      Country: "Ülke",
      "Select an inquiry type": "Talep türünü seçin",
      "General Enquiry": "Genel Talep",
      Message: "Mesaj",
      "Tell us about the corridor, product, timing, and current stage.":
        "Koridoru, ürünü, zamanlamayı ve mevcut aşamayı anlatın.",
      "I have read the": "Okudum:",
      "Privacy Notice": "Gizlilik Bildirimi",
      "Download inquiry draft ↗": "Talep taslağını indir ↗",
      "Your inquiry draft has been downloaded. It has not been sent to GlobxLink.":
        "Talep taslağınız indirildi. GlobxLink'e gönderilmedi.",
      "This form creates a draft on your device and does not send data. A verified business email or a connected backend is needed before online submissions can be enabled.":
        "Bu form cihazınızda bir taslak oluşturur ve veri göndermez. Çevrimiçi gönderimler açılmadan önce doğrulanmış bir iş e-posta adresi veya bağlı bir arka uç gerekir.",
      "GlobxLink coordinates cross-border trade. It is not a marketplace, freight forwarder, customs broker, or payment provider, and does not guarantee delivery, verification of all suppliers, or transaction outcomes.":
        "GlobxLink sınır ötesi ticareti koordine eder. Bir pazaryeri, nakliye komisyoncusu, gümrük müşaviri veya ödeme sağlayıcısı değildir; teslimatı, tüm tedarikçilerin doğrulanmasını veya işlem sonuçlarını garanti etmez.",
      "A coordination service for the middle of cross-border trade — where clear expectations, visibility, and practical follow-through matter.":
        "Sınır ötesi ticaretin merkezinde; net beklentilerin, görünürlüğün ve uygulama takibinin önem taşıdığı bir koordinasyon hizmeti.",
    },
    fr: {
      Services: "Services",
      Insights: "Analyses",
      Solutions: "Solutions",
      Platform: "Plateforme",
      "Contact ↗": "Contact ↗",
      "How It Works": "Fonctionnement",
      Founders: "Fondateurs",
      "Book a Call ↗": "Planifier un appel ↗",
      "Cross-border trade coordination": "Coordination du commerce transfrontalier",
      "Interactive globe showing trade connections; drag to rotate":
        "Globe interactif montrant les liens commerciaux ; faites glisser pour le faire tourner",
      "Supplier check: magnifying glass and business buildings":
        "Vérification du fournisseur : loupe et immeubles de bureaux",
      "Payment milestones: transaction checkpoints and secure lock":
        "Jalons de paiement : points de contrôle de transaction et cadenas sécurisé",
      "Construction and building materials": "Construction et matériaux du bâtiment",
      "Trade corridor illustration for Africa, Türkiye, and China, with Africa–Türkiye as the initial focus":
        "Illustration des corridors commerciaux entre l’Afrique, Türkiye et la Chine, avec l’Afrique–Türkiye comme priorité initiale",
      "Trade connections across Africa, Türkiye, and China; initial focus is Africa–Türkiye":
        "Liens commerciaux entre l’Afrique, Türkiye et la Chine ; priorité initiale au corridor Afrique–Türkiye",
      "GlobxLink works in the operational middle between agreement and delivery — helping businesses bring structure, visibility, and better coordination to cross-border trade.":
        "GlobxLink intervient au cœur opérationnel, entre l’accord et la livraison, pour aider les entreprises à structurer, rendre visible et mieux coordonner leurs échanges transfrontaliers.",
      "Discuss Your Trade Requirement ↗": "Parlons de votre besoin commercial ↗",
      "Counterparty checks": "Contrôles des contreparties",
      "Execution visibility": "Visibilité sur l’exécution",
      "Africa ↔ Türkiye corridor": "Corridor Afrique ↔ Türkiye",
      "Our Services": "Nos services",
      "Two ways in. One coordinated path.": "Deux points d’entrée. Un parcours coordonné.",
      "Most trade work starts with one of two needs — getting a transaction ready to run, or finding the right provider. Both can lead to coordinated execution through the middle of trade. Start with the Assessment for an end-to-end transaction; choose a Provider Request when you only need to find or check a provider.":
        "La plupart des besoins commerciaux commencent par la préparation d’une transaction ou la recherche du bon prestataire. Les deux peuvent mener à une exécution coordonnée. Choisissez l’Évaluation pour une transaction complète ou une Demande de prestataire pour trouver ou examiner un prestataire.",
      "Recommended · Start here": "Recommandé · Commencez ici",
      "Trade Readiness & Coordination Assessment": "Évaluation de préparation et de coordination commerciale",
      "A structured review of one cross-border transaction before you commit further.":
        "Un examen structuré d’une transaction transfrontalière avant tout nouvel engagement.",
      "Clarify what is confirmed, unconfirmed, and exposed": "Clarifier les éléments confirmés, non confirmés et exposés",
      "Review corridor, specifications, terms, documents, and milestones": "Examiner le corridor, les spécifications, les conditions, les documents et les jalons",
      "Prioritise the next steps and likely constraints": "Définir les priorités et les contraintes probables",
      "Explore the Assessment →": "Découvrir l’évaluation →",
      "The express lane": "Parcours express",
      "Find a Provider": "Trouver un prestataire",
      "A lighter way in when you have a defined need and want a relevant provider shortlist.":
        "Une approche simplifiée pour un besoin défini et une sélection de prestataires pertinents.",
      "Share product or service, location, quantity, and timing": "Préciser le produit ou service, le lieu, la quantité et le calendrier",
      "Review potential providers against your stated requirements": "Évaluer les prestataires potentiels selon vos critères",
      "See which checks were made and what still needs confirming": "Voir les contrôles effectués et les éléments restant à confirmer",
      "Explore Provider Requests →": "Découvrir les demandes de prestataire →",
      "Supplier introductions where available": "Mises en relation avec des fournisseurs, si disponibles",
      "Supplier and counterparty checks against available evidence": "Contrôles des fournisseurs et contreparties selon les éléments disponibles",
      "Payment-milestone mapping — buyer and supplier define terms; GlobxLink does not hold or move funds":
        "Cartographie des jalons de paiement — l’acheteur et le fournisseur définissent les conditions ; GlobxLink ne détient ni ne transfère de fonds",
      "Quality and quantity checkpoints, with the parties or an appointed inspector":
        "Points de contrôle qualité et quantité avec les parties ou un inspecteur désigné",
      "Shipment-readiness confirmation": "Confirmation de la préparation à l’expédition",
      "On-the-ground coordination where arranged": "Coordination sur place lorsqu’elle est convenue",
      "Construction & Building Materials": "Construction et matériaux du bâtiment",
      "Packaging & Industrial Supplies": "Emballages et fournitures industrielles",
      "Packaging materials and industrial supplies. Specifications, availability, and lead times matter.":
        "Emballages et fournitures industrielles. Les spécifications, la disponibilité et les délais sont essentiels.",
      "Our initial commercial focus is the Africa–Türkiye corridor. Different geographies bring different documentation, timing, language, and operational considerations; a clear coordination framework helps make those moving parts visible.":
        "Notre priorité commerciale initiale est le corridor Afrique–Türkiye. Les différences de documentation, de calendrier, de langue et d’opérations nécessitent un cadre de coordination clair.",
      "Africa ↔ Türkiye · Initial focus": "Afrique ↔ Türkiye · Priorité initiale",
      "China · Broader trade context": "Chine · Contexte commercial plus large",
      "Concept view": "Vue conceptuelle",
      "How coordination works — a concept view.": "Comment fonctionne la coordination — vue conceptuelle.",
      "GlobxLink is a coordination service. This illustrative interface describes a possible way to organize the work; it is not a live product or trade record.":
        "GlobxLink est un service de coordination. Cette interface illustrative montre une façon possible d’organiser le travail ; il ne s’agit pas d’un produit actif ni de données commerciales réelles.",
      "Available-evidence checks": "Contrôles selon les éléments disponibles",
      "Progress visibility": "Visibilité sur l’avancement",
      "Concept · Workflow overview · Organized checkpoints · Visible handoffs":
        "Concept · Vue du processus · Points de contrôle organisés · Transferts visibles",
      "Practical questions for cross-border buyers.": "Questions pratiques pour les acheteurs transfrontaliers.",
      "Clear, useful starting points for evaluating providers and preparing a transaction.":
        "Des repères clairs pour évaluer des prestataires et préparer une transaction.",
      "BUYER CHECKLIST": "LISTE DE CONTRÔLE ACHETEUR",
      "What should buyers check before paying an overseas supplier?":
        "Que vérifier avant de payer un fournisseur à l’étranger ?",
      "Build a practical pre-payment review around identity, evidence, terms, documents, and agreed checkpoints.":
        "Préparez une revue avant paiement portant sur l’identité, les preuves, les conditions, les documents et les points de contrôle convenus.",
      "Read the article →": "Lire l’article →",
      "PROVIDER DISCOVERY": "RECHERCHE DE PRESTATAIRE",
      "Why finding a supplier is not the same as finding a capable supplier":
        "Pourquoi trouver un fournisseur ne signifie pas trouver un fournisseur compétent",
      "Turn a broad sourcing request into criteria that can be assessed and confirmed.":
        "Transformez une demande générale en critères évaluables et vérifiables.",
      "PRODUCTION PLANNING": "PLANIFICATION DE LA PRODUCTION",
      "Understanding MOQ, production capacity, and lead times":
        "Comprendre la quantité minimale, la capacité et les délais",
      "Learn how minimum orders, capacity, and schedule assumptions affect a supplier brief.":
        "Comprenez l’effet des minimums de commande, de la capacité et des délais sur un brief fournisseur.",
      "Visit the Insights hub →": "Visiter le centre d’analyses →",
      "The Team": "L’équipe",
      "The Team →": "L’équipe →",
      "Skip to content": "Aller au contenu",
      "People working across the middle of trade.": "Une équipe au cœur des opérations commerciales.",
      "We started GlobxLink to address the operational realities of cross-border trade through practical coordination and clearer handoffs.":
        "Nous avons créé GlobxLink pour répondre aux réalités opérationnelles du commerce transfrontalier grâce à une coordination concrète et des relais plus clairs.",
      "A team of six across China, Türkiye, and Africa — plus remote engineering — with people joining as we partner and hire.":
        "Une équipe de six personnes en Chine, Türkiye et Afrique, avec une équipe d’ingénierie à distance, qui s’agrandit au fil des partenariats et recrutements.",
      "Founder focused on facilitating cross-border trade between African and Turkish businesses, coordinating supplier interactions and day-to-day execution across language, culture, and operational complexity.":
        "Fondateur spécialisé dans la facilitation du commerce entre entreprises africaines et turques, la coordination des fournisseurs et des opérations dans des contextes linguistiques et culturels variés.",
      "Product engineer leading the design of the GlobxLink coordination-workspace concept — milestone structure, documentation flow, and partner integrations. Background in financial-services systems where settlement evidence is non-negotiable.":
        "Ingénieur produit chargé de concevoir le concept d’espace de coordination GlobxLink — jalons, flux documentaire et intégrations partenaires. Expérience des systèmes financiers où les preuves de règlement sont indispensables.",
      "Systems engineer responsible for verification tooling and workflows. Focus on the underlying technical work that makes counterparty checks, document routing, and audit trails reliable enough to depend on in real transactions.":
        "Ingénieur systèmes responsable des outils et processus de contrôle. Il travaille sur les aspects techniques qui rendent les contrôles, le routage documentaire et les pistes d’audit fiables pour les transactions.",
      "Tell us about the corridor, product, and current stage of the transaction.":
        "Décrivez le corridor, le produit et l’étape actuelle de la transaction.",
      "Choose the service that best matches your need, then tell us the corridor, product, and current stage of the transaction.":
        "Choisissez le service adapté à votre besoin, puis indiquez le corridor, le produit et l’étape actuelle de la transaction.",
      "Provider Request": "Demande de prestataire",
      "Trade Readiness Assessment": "Évaluation de préparation commerciale",
      Partnerships: "Partenariats",
      "Prepare your inquiry": "Préparer votre demande",
      "Share the essentials so the right service can be discussed.":
        "Partagez les informations essentielles pour discuter du service adapté.",
      "Your name": "Votre nom",
      Company: "Entreprise",
      "Company name": "Nom de l’entreprise",
      "Business email": "E-mail professionnel",
      Country: "Pays",
      "Select an inquiry type": "Sélectionner un type de demande",
      "General Enquiry": "Demande générale",
      Message: "Message",
      "Tell us about the corridor, product, timing, and current stage.":
        "Décrivez le corridor, le produit, le calendrier et l’étape actuelle.",
      "I have read the": "J’ai lu l’avis de",
      "Privacy Notice": "confidentialité",
      "Download inquiry draft ↗": "Télécharger le brouillon ↗",
      "Your inquiry draft has been downloaded. It has not been sent to GlobxLink.":
        "Votre brouillon a été téléchargé. Il n’a pas été envoyé à GlobxLink.",
      "This form creates a draft on your device and does not send data. A verified business email or a connected backend is needed before online submissions can be enabled.":
        "Ce formulaire crée un brouillon sur votre appareil sans envoyer de données. Une adresse professionnelle vérifiée ou un serveur adapté est nécessaire avant d’activer l’envoi en ligne.",
      "GlobxLink coordinates cross-border trade. It is not a marketplace, freight forwarder, customs broker, or payment provider, and does not guarantee delivery, verification of all suppliers, or transaction outcomes.":
        "GlobxLink coordonne le commerce transfrontalier. Ce n’est ni une place de marché, ni un transporteur, ni un commissionnaire en douane, ni un prestataire de paiement, et ne garantit ni la livraison, ni la vérification de tous les fournisseurs, ni les résultats des transactions.",
      "A coordination service for the middle of cross-border trade — where clear expectations, visibility, and practical follow-through matter.":
        "Un service de coordination au cœur du commerce transfrontalier, où la clarté des attentes, la visibilité et le suivi concret comptent.",
    },
  };

  Object.assign(copy.tr, {
    Corridors: "Koridorlar",
    "Privacy Notice": "Gizlilik Bildirimi",
    "GlobxLink · Services": "GlobxLink · Hizmetler",
    "GlobxLink · Privacy": "GlobxLink · Gizlilik",
    "GlobxLink services": "GlobxLink hizmetleri",
    "Two ways in. One coordinated path.": "İki başlangıç noktası. Tek koordineli yol.",
    "Most trade work starts with one of two needs: getting a transaction ready to run, or finding the right provider. Both can lead to coordinated execution through the middle of trade.":
      "Ticaret ihtiyaçları genellikle iki noktadan başlar: bir işlemi yürütmeye hazırlamak veya doğru sağlayıcıyı bulmak. Her iki ihtiyaç da ticaretin operasyonel aşamasında koordinasyona dönüşebilir.",
    "Explore this service →": "Bu hizmeti inceleyin →",
    "Choose a Trade Readiness & Coordination Assessment or a Provider Request for your cross-border trade need.":
      "Sınır ötesi ticaret ihtiyacınız için Ticaret Hazırlık ve Koordinasyon Değerlendirmesini veya Sağlayıcı Talebini seçin.",
    "Services | GlobxLink": "Hizmetler | GlobxLink",
    "Find a Provider (Provider Request) | GlobxLink":
      "Sağlayıcı Bulun (Sağlayıcı Talebi) | GlobxLink",
    "Trade Readiness & Coordination Assessment | GlobxLink":
      "Ticaret Hazırlığı ve Koordinasyon Değerlendirmesi | GlobxLink",
    "Know what your transaction needs before you commit to it.":
      "Taahhütte bulunmadan önce işleminizin ihtiyaçlarını öğrenin.",
    "Businesses with a specific cross-border transaction — sourcing, negotiating terms, in execution, or resolving an issue — who want it to proceed with fewer surprises.":
      "Belirli bir sınır ötesi işlemi bulunan ve tedarik, koşul müzakeresi, uygulama veya sorun çözümü aşamalarında daha az sürprizle ilerlemek isteyen işletmeler.",
    "Between agreement and delivery, requirements drift, documents lag, responsibilities blur, and changes do not reach everyone. Many of these problems are visible early if someone is looking for them.":
      "Anlaşma ile teslimat arasında gereksinimler değişebilir, belgeler gecikebilir, sorumluluklar belirsizleşebilir ve güncellemeler herkese ulaşmayabilir. Bu sorunların çoğu erken takip edilirse görülebilir.",
    "A structured review of one transaction: corridor and markets, product and specifications, counterparty status, commercial terms, documentation, milestones, and the main constraint most likely to delay or disrupt it.":
      "Tek bir işlemin yapılandırılmış incelemesi: koridor ve pazarlar, ürün ve özellikleri, karşı tarafın durumu, ticari koşullar, belgeler, kilometre taşları ve gecikmeye ya da kesintiye yol açabilecek temel kısıt.",
    "A clear read of what is confirmed, what is unconfirmed, and what is exposed; a prioritised list of what to address; and a defined next step — including, where it fits, moving into ongoing coordination.":
      "Doğrulanan, doğrulanmayan ve risk taşıyan noktaların açık özeti; ele alınması gereken konuların öncelik listesi ve uygun olduğunda devam eden koordinasyona geçişi içeren belirli bir sonraki adım.",
    "Share a short brief on one transaction": "Bir işlem hakkında kısa bilgi paylaşın",
    "Complete a structured assessment": "Yapılandırılmış değerlendirmeyi tamamlayın",
    "Review findings and the next step": "Bulguları ve sonraki adımı gözden geçirin",
    "Optionally agree a coordination engagement": "İsteğe bağlı olarak koordinasyon çalışmasını kararlaştırın",
    "Message “ASSESSMENT” with your corridor and product, or use the enquiry form and select Trade Readiness Assessment.":
      "Koridorunuzu ve ürününüzü belirterek “DEĞERLENDİRME” mesajı gönderin veya talep formunda Ticaret Hazırlık Değerlendirmesini seçin.",
    "GlobxLink coordinates — it does not hold or move funds, clear customs, or forward freight, and it does not guarantee outcomes. Scope and any further work are agreed before commitments are made.":
      "GlobxLink koordinasyon sağlar. Fon tutmaz veya aktarmaz, gümrük işlemi yapmaz, yük taşımacılığı üstlenmez ve sonuç garantisi vermez. Kapsam ve ek çalışmalar taahhüt öncesinde kararlaştırılır.",
    "Find a Provider (Provider Request)": "Sağlayıcı Bulun (Sağlayıcı Talebi)",
    "When you just need the right provider — a lighter way in.":
      "Yalnızca doğru sağlayıcıyı arıyorsanız daha kolay bir başlangıç.",
    "Businesses that only need to find or check a provider for a defined requirement, and are not yet working on a full transaction.":
      "Henüz kapsamlı bir işlem yürütmeyen, belirli bir ihtiyaca uygun sağlayıcı bulmak veya mevcut sağlayıcıyı kontrol etmek isteyen işletmeler.",
    "“Can you find me a supplier?” is easy to ask and hard to answer well. A shortlist is only as good as the brief behind it: requirements, location, quantity, timing, budget, and the evidence a provider must be able to show.":
      "“Bana bir tedarikçi bulabilir misiniz?” diye sormak kolay, doğru yanıtlamak zordur. Kısa listenin niteliği; gereksinimleri, konumu, miktarı, zamanlamayı, bütçeyi ve sağlayıcının sunması gereken kanıtları içeren talebe bağlıdır.",
    "We identify potential providers, assess them against your stated requirements, and prepare a shortlist. Availability, pricing, capability, and terms are confirmed per request, not assumed; we do not imply every provider is verified.":
      "Olası sağlayıcıları belirler, belirtilen gereksinimlere göre değerlendirir ve kısa liste hazırlarız. Uygunluk, fiyat, yeterlilik ve koşullar varsayılmaz; her talep için ayrıca doğrulanır. Her sağlayıcının doğrulandığı iddia edilmez.",
    "A short, relevant shortlist matched to your brief, with the checks we were able to make and what still needs confirming.":
      "Talebinize uygun kısa bir liste, yapılabilen kontroller ve doğrulanması gereken noktalar.",
    "Send a clear brief: product or service, location, quantity, timing, and essential conditions":
      "Ürün veya hizmeti, konumu, miktarı, zamanlamayı ve temel koşulları içeren açık bir talep gönderin",
    "We assess potential providers and prepare a shortlist": "Olası sağlayıcıları değerlendirir ve kısa liste hazırlarız",
    "You review the options and available evidence": "Seçenekleri ve mevcut kanıtları gözden geçirin",
    "Message “PROVIDER REQUEST” with a short brief, or use the enquiry form and select Provider Request.":
      "Kısa talebinizle “SAĞLAYICI TALEBİ” mesajı gönderin veya talep formunda Sağlayıcı Talebini seçin.",
    "If a provider request becomes a live transaction involving terms, documents, milestones, or delivery, it can move into a Trade Readiness & Coordination engagement. Discovery is the way in; coordination is the value.":
      "Sağlayıcı talebi koşullar, belgeler, kilometre taşları veya teslimat içeren bir işleme dönüşürse Ticaret Hazırlığı ve Koordinasyon çalışmasına geçilebilir. Sağlayıcı arayışı başlangıçtır; değer koordinasyondadır.",
    "Request this service ↗": "Bu hizmeti talep edin ↗",
    "Who it’s for": "Kimler için",
    "The problem": "Sorun",
    Scope: "Kapsam",
    Deliverables: "Teslimatlar",
    Process: "Süreç",
    "How to request": "Nasıl talep edilir",
    "Service boundaries": "Hizmet sınırları",
    "Open the enquiry form →": "Talep formunu açın →",
    "Insight not found | GlobxLink": "İçerik bulunamadı | GlobxLink",
    "Practical questions for cross-border buyers.":
      "Sınır ötesi alıcılar için pratik sorular.",
    "Read clear starting points for evaluating providers and preparing a transaction. Every trade and provider is different; confirm details for your specific request.":
      "Sağlayıcıları değerlendirmek ve işlemi hazırlamak için açık başlangıç noktalarını okuyun. Her ticaret ve sağlayıcı farklıdır; talebinize özgü ayrıntıları doğrulayın.",
    "Insights articles": "İçgörü yazıları",
    "Read the article →": "Yazıyı okuyun →",
    "Insights | GlobxLink": "İçgörüler | GlobxLink",
    "Privacy Notice | GlobxLink": "Gizlilik Bildirimi | GlobxLink",
    "How the GlobxLink website inquiry draft handles information in your browser.":
      "GlobxLink talep taslağının tarayıcınızdaki bilgileri nasıl işlediği.",
    "The current enquiry form runs in your browser and creates a text file for you to download.":
      "Mevcut talep formu tarayıcınızda çalışır ve indirmeniz için bir metin dosyası oluşturur.",
    "Information in the inquiry draft": "Talep taslağındaki bilgiler",
    "If you complete the form, the name, company, business email, country, inquiry type, and message you enter are assembled into a text file on your device. The form does not send this information to GlobxLink or store it on a GlobxLink server.":
      "Formu doldurursanız adınız, şirketiniz, iş e-posta adresiniz, ülkeniz, talep türünüz ve mesajınız cihazınızda bir metin dosyasında birleştirilir. Form bu bilgileri GlobxLink'e göndermez veya GlobxLink sunucusunda saklamaz.",
    "Your choices": "Seçenekleriniz",
    "You choose whether to download, keep, or share the draft. Review the file before sending it through another channel and avoid including sensitive information that is not needed for an initial enquiry.":
      "Taslağı indirip indirmemeye, saklamaya veya paylaşmaya siz karar verirsiniz. Başka bir kanaldan göndermeden önce dosyayı inceleyin ve ilk talep için gerekmeyen hassas bilgileri eklemeyin.",
    "Future changes": "Gelecekteki değişiklikler",
    "Online submission will only be enabled after a verified business contact and an appropriate data-handling process are configured. This notice must be reviewed and updated before that change.":
      "Çevrimiçi gönderim, doğrulanmış bir iş iletişim adresi ve uygun bir veri işleme süreci oluşturulduktan sonra etkinleştirilecektir. Bu değişiklikten önce bildirim gözden geçirilmeli ve güncellenmelidir.",
    "Return to the inquiry form": "Talep formuna dön",
    "← Return to the inquiry form": "← Talep formuna dön",
    "GlobxLink | Ticaretin Merkezi": "GlobxLink | Ticaretin Merkezi",
  });

  Object.assign(copy.fr, {
    Corridors: "Corridors",
    "GlobxLink · Services": "GlobxLink · Services",
    "GlobxLink · Privacy": "GlobxLink · Confidentialité",
    "GlobxLink services": "Les services GlobxLink",
    "Two ways in. One coordinated path.": "Deux points d’entrée. Un parcours coordonné.",
    "Most trade work starts with one of two needs: getting a transaction ready to run, or finding the right provider. Both can lead to coordinated execution through the middle of trade.":
      "La plupart des besoins commerciaux commencent par la préparation d’une transaction ou la recherche du bon prestataire. Les deux peuvent mener à une exécution coordonnée.",
    "Explore this service →": "Découvrir ce service →",
    "Choose a Trade Readiness & Coordination Assessment or a Provider Request for your cross-border trade need.":
      "Choisissez une évaluation de préparation et de coordination commerciale ou une demande de prestataire selon votre besoin transfrontalier.",
    "Services | GlobxLink": "Services | GlobxLink",
    "Find a Provider (Provider Request) | GlobxLink":
      "Trouver un prestataire (demande de prestataire) | GlobxLink",
    "Trade Readiness & Coordination Assessment | GlobxLink":
      "Évaluation de préparation et de coordination commerciale | GlobxLink",
    "Know what your transaction needs before you commit to it.":
      "Identifiez les besoins de votre transaction avant de vous engager.",
    "Businesses with a specific cross-border transaction — sourcing, negotiating terms, in execution, or resolving an issue — who want it to proceed with fewer surprises.":
      "Entreprises ayant une transaction transfrontalière précise et souhaitant avancer avec moins d’imprévus, de la recherche à l’exécution ou à la résolution d’un problème.",
    "Between agreement and delivery, requirements drift, documents lag, responsibilities blur, and changes do not reach everyone. Many of these problems are visible early if someone is looking for them.":
      "Entre l’accord et la livraison, les besoins évoluent, les documents prennent du retard, les responsabilités deviennent floues et les changements ne sont pas transmis à tous. Un suivi précoce permet d’identifier bon nombre de ces problèmes.",
    "A structured review of one transaction: corridor and markets, product and specifications, counterparty status, commercial terms, documentation, milestones, and the main constraint most likely to delay or disrupt it.":
      "Examen structuré d’une transaction : corridor et marchés, produit et spécifications, situation de la contrepartie, conditions commerciales, documents, jalons et principal risque de retard ou de perturbation.",
    "A clear read of what is confirmed, what is unconfirmed, and what is exposed; a prioritised list of what to address; and a defined next step — including, where it fits, moving into ongoing coordination.":
      "Synthèse des éléments confirmés, non confirmés et exposés, liste priorisée des points à traiter et prochaine étape définie, avec possibilité de poursuivre par une coordination continue.",
    "Share a short brief on one transaction": "Présentez brièvement une transaction",
    "Complete a structured assessment": "Réalisez une évaluation structurée",
    "Review findings and the next step": "Examinez les résultats et la prochaine étape",
    "Optionally agree a coordination engagement": "Convenez, si besoin, d’un accompagnement de coordination",
    "Message “ASSESSMENT” with your corridor and product, or use the enquiry form and select Trade Readiness Assessment.":
      "Envoyez « ÉVALUATION » avec votre corridor et votre produit, ou sélectionnez l’évaluation de préparation commerciale dans le formulaire.",
    "GlobxLink coordinates — it does not hold or move funds, clear customs, or forward freight, and it does not guarantee outcomes. Scope and any further work are agreed before commitments are made.":
      "GlobxLink coordonne les échanges, mais ne détient ni ne transfère de fonds, ne dédouane pas les marchandises, n’organise pas leur transport et ne garantit aucun résultat. Le périmètre et tout travail complémentaire sont convenus avant engagement.",
    "Find a Provider (Provider Request)": "Trouver un prestataire (demande de prestataire)",
    "When you just need the right provider — a lighter way in.":
      "Un parcours simplifié pour trouver le prestataire adapté.",
    "Businesses that only need to find or check a provider for a defined requirement, and are not yet working on a full transaction.":
      "Entreprises qui souhaitent trouver ou évaluer un prestataire pour un besoin précis, sans gérer encore une transaction complète.",
    "“Can you find me a supplier?” is easy to ask and hard to answer well. A shortlist is only as good as the brief behind it: requirements, location, quantity, timing, budget, and the evidence a provider must be able to show.":
      "« Pouvez-vous me trouver un fournisseur ? » est facile à demander, mais difficile à traiter correctement. La qualité d’une sélection dépend du brief : besoins, lieu, quantité, calendrier, budget et justificatifs attendus.",
    "We identify potential providers, assess them against your stated requirements, and prepare a shortlist. Availability, pricing, capability, and terms are confirmed per request, not assumed; we do not imply every provider is verified.":
      "Nous identifions des prestataires potentiels, les évaluons selon vos critères et préparons une sélection. La disponibilité, les prix, les capacités et les conditions sont vérifiés pour chaque demande, sans présumer que chaque prestataire est vérifié.",
    "A short, relevant shortlist matched to your brief, with the checks we were able to make and what still needs confirming.":
      "Une sélection ciblée correspondant à votre brief, avec les vérifications effectuées et les points restant à confirmer.",
    "Send a clear brief: product or service, location, quantity, timing, and essential conditions":
      "Envoyez un brief précis : produit ou service, lieu, quantité, calendrier et conditions essentielles",
    "We assess potential providers and prepare a shortlist": "Nous évaluons les prestataires potentiels et préparons une sélection",
    "You review the options and available evidence": "Vous examinez les options et les éléments disponibles",
    "Message “PROVIDER REQUEST” with a short brief, or use the enquiry form and select Provider Request.":
      "Envoyez « DEMANDE DE PRESTATAIRE » avec un brief concis ou sélectionnez cette option dans le formulaire.",
    "If a provider request becomes a live transaction involving terms, documents, milestones, or delivery, it can move into a Trade Readiness & Coordination engagement. Discovery is the way in; coordination is the value.":
      "Si la recherche devient une transaction portant sur des conditions, des documents, des jalons ou une livraison, elle peut évoluer vers un accompagnement de préparation et de coordination commerciale.",
    "Request this service ↗": "Demander ce service ↗",
    "Who it’s for": "À qui s’adresse ce service",
    "The problem": "Le problème",
    Scope: "Périmètre",
    Deliverables: "Livrables",
    Process: "Processus",
    "How to request": "Comment faire une demande",
    "Service boundaries": "Limites du service",
    "Open the enquiry form →": "Ouvrir le formulaire de demande →",
    "Practical questions for cross-border buyers.":
      "Questions pratiques pour les acheteurs transfrontaliers.",
    "Read clear starting points for evaluating providers and preparing a transaction. Every trade and provider is different; confirm details for your specific request.":
      "Découvrez des repères clairs pour évaluer des prestataires et préparer une transaction. Chaque opération et chaque prestataire sont différents ; vérifiez les détails propres à votre demande.",
    "Insights articles": "Articles d’analyse",
    "Read the article →": "Lire l’article →",
    "Insights | GlobxLink": "Analyses | GlobxLink",
    "Privacy Notice | GlobxLink": "Avis de confidentialité | GlobxLink",
    "How the GlobxLink website inquiry draft handles information in your browser.":
      "Comment le brouillon de demande du site GlobxLink traite les informations dans votre navigateur.",
    "The current enquiry form runs in your browser and creates a text file for you to download.":
      "Le formulaire actuel fonctionne dans votre navigateur et crée un fichier texte à télécharger.",
    "Information in the inquiry draft": "Informations du brouillon de demande",
    "If you complete the form, the name, company, business email, country, inquiry type, and message you enter are assembled into a text file on your device. The form does not send this information to GlobxLink or store it on a GlobxLink server.":
      "Si vous remplissez le formulaire, votre nom, votre entreprise, votre e-mail professionnel, votre pays, le type de demande et votre message sont réunis dans un fichier texte sur votre appareil. Le formulaire n’envoie pas ces informations à GlobxLink et ne les stocke pas sur ses serveurs.",
    "Your choices": "Vos choix",
    "You choose whether to download, keep, or share the draft. Review the file before sending it through another channel and avoid including sensitive information that is not needed for an initial enquiry.":
      "Vous choisissez de télécharger, conserver ou partager le brouillon. Relisez le fichier avant de l’envoyer par un autre canal et évitez d’y inclure des informations sensibles inutiles pour une première demande.",
    "Future changes": "Évolutions futures",
    "Online submission will only be enabled after a verified business contact and an appropriate data-handling process are configured. This notice must be reviewed and updated before that change.":
      "L’envoi en ligne ne sera activé qu’après la mise en place d’un contact professionnel vérifié et d’un processus adapté de traitement des données. Le présent avis devra être révisé et mis à jour avant cette évolution.",
    "Return to the inquiry form": "Retour au formulaire de demande",
    "← Return to the inquiry form": "← Retour au formulaire de demande",
  });

  window.gxlLandingCopy = copy;

  let languageControl = document.getElementById("gxl-language");
  if (!languageControl) return;

  const textNodes = [];
  const attributes = [];
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();

  function collectPageContent() {
    textNodes.length = 0;
    attributes.length = 0;

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      if (!node.nodeValue.trim()) continue;
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const original = originalText.get(node);
      const source = original.trim();
      if (Object.values(copy).some((locale) => locale[source])) {
        textNodes.push({
          node,
          source,
          leading: original.match(/^\s*/)[0],
          trailing: original.match(/\s*$/)[0],
        });
      }
    }

    for (const element of document.body.querySelectorAll(
      "[alt], [placeholder], [aria-label], [title]",
    )) {
      let sources = originalAttributes.get(element);
      if (!sources) {
        sources = new Map();
        originalAttributes.set(element, sources);
      }
      for (const name of ["alt", "placeholder", "aria-label", "title"]) {
        if (!element.hasAttribute(name)) continue;
        if (!sources.has(name)) sources.set(name, element.getAttribute(name));
        const source = sources.get(name);
        if (Object.values(copy).some((locale) => locale[source])) {
          attributes.push({ element, name, source });
        }
      }
    }
  }

  function applyLanguage() {
    if (!languageControl) return;
    const language = languageControl.value;
    const locale = copy[language] || {};

    for (const entry of textNodes) {
      entry.node.nodeValue =
        entry.leading + (locale[entry.source] || entry.source) + entry.trailing;
    }
    for (const entry of attributes) {
      entry.element.setAttribute(
        entry.name,
        locale[entry.source] || entry.source,
      );
    }

    const descriptions = {
      en: "GlobxLink coordinates cross-border trade through a Trade Readiness & Coordination Assessment and Provider Request service.",
      tr: "GlobxLink, Ticaret Hazırlık ve Koordinasyon Değerlendirmesi ile Sağlayıcı Talebi hizmetleri aracılığıyla sınır ötesi ticareti koordine eder.",
      fr: "GlobxLink coordonne le commerce transfrontalier grâce à l’évaluation de préparation commerciale et aux demandes de prestataires.",
    };
    if (location.pathname === "/") {
      const description = descriptions[language];
      for (const selector of [
        'meta[name="description"]',
        'meta[property="og:description"]',
      ]) {
        document.querySelector(selector)?.setAttribute("content", description);
      }
    }
  }

  function bindLanguageControl() {
    const current = document.getElementById("gxl-language");
    if (current === languageControl) return;
    languageControl.removeEventListener("change", applyLanguage);
    languageControl = current;
    if (languageControl) {
      languageControl.addEventListener("change", applyLanguage);
    }
  }

  collectPageContent();
  languageControl.addEventListener("change", applyLanguage);
  window.addEventListener("gxl-language-updated", applyLanguage);
  window.addEventListener("gxl-page-changed", () => {
    bindLanguageControl();
    collectPageContent();
  });
  applyLanguage();
})();
