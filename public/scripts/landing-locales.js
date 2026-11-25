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
      "International trade coordination": "Sınır ötesi ticaret koordinasyonu",
      "Interactive globe showing trade connections; drag to rotate":
        "Ticaret bağlantılarını gösteren etkileşimli küre; döndürmek için sürükleyin",
      "Supplier check: magnifying glass and business buildings":
        "Tedarikçi kontrolü: büyüteç ve iş yeri binaları",
      "Payment milestones: transaction checkpoints and secure lock":
        "Ödeme kilometre taşları: işlem kontrol noktaları ve güvenli kilit",
      "Construction and building materials": "İnşaat ve yapı malzemeleri",
      "Trade corridor illustration for Africa, Türkiye, and China, with Africa to Türkiye as the initial focus":
        "Afrika, Türkiye ve Çin için ticaret koridoru görseli; başlangıç odağı Afrika ile Türkiye",
      "Trade connections across Africa, Türkiye, and China; initial focus is Africa to Türkiye":
        "Afrika, Türkiye ve Çin arasındaki ticaret bağlantıları; ilk odak Afrika ile Türkiye",
      "GlobxLink works in the operational middle between agreement and delivery, helping businesses bring structure, visibility, and better coordination to international trade.":
        "GlobxLink, anlaşma ile teslimat arasındaki operasyonel aşamada çalışarak işletmelerin sınır ötesi ticarete yapı, görünürlük ve daha iyi koordinasyon kazandırmasına yardımcı olur.",
      "Discuss Your Trade Requirement ↗": "Ticaret İhtiyacınızı Görüşelim ↗",
      "Counterparty checks": "Karşı taraf kontrolleri",
      "Execution visibility": "Uygulama görünürlüğü",
      "Africa ↔ Türkiye corridor": "Afrika ↔ Türkiye koridoru",
      "Our Services": "Hizmetlerimiz",
      "Two ways in. One coordinated path.": "İki başlangıç noktası. Tek koordineli yol.",
      "Most trade work starts with one of two needs, getting a transaction ready to run, or finding the right provider. Both can lead to coordinated execution through the middle of trade. Start with the Assessment for a full transaction; choose a Provider Request when you only need to find or check a provider.":
        "Ticaret ihtiyaçları genellikle iki noktadan başlar: bir işlemi yürütmeye hazırlamak veya doğru sağlayıcıyı bulmak. Her iki ihtiyaç da ticaretin operasyonel aşamasında koordinasyona dönüşebilir. İşlemin tamamı için Değerlendirme ile başlayın; yalnızca sağlayıcı bulmak veya kontrol etmek istiyorsanız Sağlayıcı Talebi’ni seçin.",
      "Recommended · Start here": "Önerilen · Buradan başlayın",
      "Trade Readiness & Coordination Assessment": "Ticaret Hazırlık ve Koordinasyon Değerlendirmesi",
      "A structured review of one international transaction before you commit further.":
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
      "Payment milestone mapping, buyer and supplier define terms; GlobxLink does not hold or move funds":
        "Ödeme kilometre taşlarının eşleştirilmesi, koşulları alıcı ve tedarikçi belirler; GlobxLink fon tutmaz veya aktarmaz",
      "Quality and quantity checkpoints, with the parties or an appointed inspector":
        "Taraflar veya görevlendirilen denetçiyle kalite ve miktar kontrol noktaları",
      "Shipment readiness confirmation": "Sevkiyata hazırlık teyidi",
      "On site coordination where arranged": "Düzenlendiği durumlarda sahada koordinasyon",
      "Construction & Building Materials": "İnşaat ve Yapı Malzemeleri",
      "Packaging & Industrial Supplies": "Ambalaj ve Endüstriyel Malzemeler",
      "Packaging materials and industrial supplies. Specifications, availability, and lead times matter.":
        "Ambalaj malzemeleri ve endüstriyel tedarikler. Özellikler, bulunabilirlik ve teslim süreleri önemlidir.",
      "Our initial commercial focus is the Africa to Türkiye corridor. Different geographies bring different documentation, timing, language, and operational considerations; a clear coordination framework helps make those moving parts visible.":
        "İlk ticari odağımız Afrika ile Türkiye arasındaki koridordur. Farklı coğrafyalar farklı belge, zamanlama, dil ve operasyon gereksinimleri getirir; açık bir koordinasyon çerçevesi bu unsurları görünür kılar.",
      "Africa ↔ Türkiye · Initial focus": "Afrika ↔ Türkiye · İlk odak",
      "China · Broader trade context": "Çin · Daha geniş ticaret bağlamı",
      "Concept view": "Kavramsal görünüm",
      "How coordination works, a concept view.": "Koordinasyon nasıl işler, kavramsal bir görünüm.",
      "GlobxLink is a coordination service. This illustrative interface describes a possible way to organize the work; it is not a live product or trade record.":
        "GlobxLink bir koordinasyon hizmetidir. Bu örnek arayüz, işin nasıl düzenlenebileceğini gösterir; canlı bir ürün veya ticaret kaydı değildir.",
      "Available-evidence checks": "Mevcut kanıtlara dayalı kontroller",
      "Progress visibility": "İlerleme görünürlüğü",
      "Concept · Workflow overview · Organized checkpoints · Visible handoffs":
        "Kavram · İş akışı özeti · Düzenli kontrol noktaları · Görünür devirler",
      "Practical questions for international buyers.": "Sınır ötesi alıcılar için pratik sorular.",
      "Clear, useful starting points for evaluating providers and preparing a transaction.":
        "Sağlayıcıları değerlendirmek ve işlemi hazırlamak için açık ve faydalı başlangıç noktaları.",
      "BUYER CHECKLIST": "ALICI KONTROL LİSTESİ",
      "What should buyers check before paying an overseas supplier?":
        "Alıcılar yurt dışındaki bir tedarikçiye ödeme yapmadan önce neleri kontrol etmeli?",
      "Build a practical prepayment review around identity, evidence, terms, documents, and agreed checkpoints.":
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
      "We started GlobxLink to address the operational realities of international trade through practical coordination and clearer handoffs.":
        "GlobxLink'i, sınır ötesi ticaretin operasyonel gerçeklerine pratik koordinasyon ve daha açık devirlerle yanıt vermek için kurduk.",
      "A team of six across China, Türkiye, and Africa, plus remote engineering, with people joining as we partner and hire.":
        "Çin, Türkiye ve Afrika'da altı kişilik bir ekip ve uzaktan çalışan mühendislik ekibi, ortaklıklar ve işe alımlarla büyüyoruz.",
      "Founder focused on facilitating international trade between African and Turkish businesses, coordinating supplier interactions and daily execution across language, culture, and operational complexity.":
        "Afrika ve Türkiye'deki işletmeler arasında sınır ötesi ticareti kolaylaştırmaya odaklanan kurucu; dil, kültür ve operasyonel karmaşıklık boyunca tedarikçi etkileşimlerini ve günlük uygulamayı koordine eder.",
      "Product engineer leading the design of the GlobxLink coordination workspace concept, milestone structure, documentation flow, and partner integrations. Background in financial services systems where settlement evidence is essential.":
        "GlobxLink koordinasyon çalışma alanı kavramının tasarımına liderlik eden ürün mühendisi, kilometre taşı yapısı, belge akışı ve iş ortağı entegrasyonları. Mutabakat kanıtlarının vazgeçilmez olduğu finansal hizmet sistemlerinde deneyim sahibidir.",
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
      "Business email": "İş elektronik posta adresi",
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
        "Bu form cihazınızda bir taslak oluşturur ve veri göndermez. Çevrimiçi gönderimler açılmadan önce doğrulanmış bir iş elektronik posta adresi veya bağlı bir arka uç gerekir.",
      "GlobxLink coordinates international trade. It is not a marketplace, freight forwarder, customs broker, or payment provider, and does not guarantee delivery, verification of all suppliers, or transaction outcomes.":
        "GlobxLink sınır ötesi ticareti koordine eder. Bir pazaryeri, nakliye komisyoncusu, gümrük müşaviri veya ödeme sağlayıcısı değildir; teslimatı, tüm tedarikçilerin doğrulanmasını veya işlem sonuçlarını garanti etmez.",
      "A coordination service for the middle of international trade, where clear expectations, visibility, and practical follow through matter.":
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
      "International trade coordination": "Coordination du commerce transfrontalier",
      "Interactive globe showing trade connections; drag to rotate":
        "Globe interactif montrant les liens commerciaux ; faites glisser pour le faire tourner",
      "Supplier check: magnifying glass and business buildings":
        "Vérification du fournisseur : loupe et immeubles de bureaux",
      "Payment milestones: transaction checkpoints and secure lock":
        "Jalons de paiement : points de contrôle de transaction et cadenas sécurisé",
      "Construction and building materials": "Construction et matériaux du bâtiment",
      "Trade corridor illustration for Africa, Türkiye, and China, with Africa to Türkiye as the initial focus":
        "Illustration des corridors commerciaux entre l’Afrique, Türkiye et la Chine, avec l’Afrique et Türkiye comme priorité initiale",
      "Trade connections across Africa, Türkiye, and China; initial focus is Africa to Türkiye":
        "Liens commerciaux entre l’Afrique, Türkiye et la Chine ; priorité initiale au corridor entre l’Afrique et Türkiye",
      "GlobxLink works in the operational middle between agreement and delivery, helping businesses bring structure, visibility, and better coordination to international trade.":
        "GlobxLink intervient au cœur opérationnel, entre l’accord et la livraison, pour aider les entreprises à structurer, rendre visible et mieux coordonner leurs échanges transfrontaliers.",
      "Discuss Your Trade Requirement ↗": "Parlons de votre besoin commercial ↗",
      "Counterparty checks": "Contrôles des contreparties",
      "Execution visibility": "Visibilité sur l’exécution",
      "Africa ↔ Türkiye corridor": "Corridor Afrique ↔ Türkiye",
      "Our Services": "Nos services",
      "Two ways in. One coordinated path.": "Deux points d’entrée. Un parcours coordonné.",
      "Most trade work starts with one of two needs, getting a transaction ready to run, or finding the right provider. Both can lead to coordinated execution through the middle of trade. Start with the Assessment for a full transaction; choose a Provider Request when you only need to find or check a provider.":
        "La plupart des besoins commerciaux commencent par la préparation d’une transaction ou la recherche du bon prestataire. Les deux peuvent mener à une exécution coordonnée. Choisissez l’Évaluation pour une transaction complète ou une Demande de prestataire pour trouver ou examiner un prestataire.",
      "Recommended · Start here": "Recommandé · Commencez ici",
      "Trade Readiness & Coordination Assessment": "Évaluation de préparation et de coordination commerciale",
      "A structured review of one international transaction before you commit further.":
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
      "Payment milestone mapping, buyer and supplier define terms; GlobxLink does not hold or move funds":
        "Cartographie des jalons de paiement, l’acheteur et le fournisseur définissent les conditions ; GlobxLink ne détient ni ne transfère de fonds",
      "Quality and quantity checkpoints, with the parties or an appointed inspector":
        "Points de contrôle qualité et quantité avec les parties ou un inspecteur désigné",
      "Shipment readiness confirmation": "Confirmation de la préparation à l’expédition",
      "On site coordination where arranged": "Coordination sur place lorsqu’elle est convenue",
      "Construction & Building Materials": "Construction et matériaux du bâtiment",
      "Packaging & Industrial Supplies": "Emballages et fournitures industrielles",
      "Packaging materials and industrial supplies. Specifications, availability, and lead times matter.":
        "Emballages et fournitures industrielles. Les spécifications, la disponibilité et les délais sont essentiels.",
      "Our initial commercial focus is the Africa to Türkiye corridor. Different geographies bring different documentation, timing, language, and operational considerations; a clear coordination framework helps make those moving parts visible.":
        "Notre priorité commerciale initiale est le corridor entre l’Afrique et Türkiye. Les différences de documentation, de calendrier, de langue et d’opérations nécessitent un cadre de coordination clair.",
      "Africa ↔ Türkiye · Initial focus": "Afrique ↔ Türkiye · Priorité initiale",
      "China · Broader trade context": "Chine · Contexte commercial plus large",
      "Concept view": "Vue conceptuelle",
      "How coordination works, a concept view.": "Comment fonctionne la coordination, vue conceptuelle.",
      "GlobxLink is a coordination service. This illustrative interface describes a possible way to organize the work; it is not a live product or trade record.":
        "GlobxLink est un service de coordination. Cette interface illustrative montre une façon possible d’organiser le travail ; il ne s’agit pas d’un produit actif ni de données commerciales réelles.",
      "Available-evidence checks": "Contrôles selon les éléments disponibles",
      "Progress visibility": "Visibilité sur l’avancement",
      "Concept · Workflow overview · Organized checkpoints · Visible handoffs":
        "Concept · Vue du processus · Points de contrôle organisés · Transferts visibles",
      "Practical questions for international buyers.": "Questions pratiques pour les acheteurs transfrontaliers.",
      "Clear, useful starting points for evaluating providers and preparing a transaction.":
        "Des repères clairs pour évaluer des prestataires et préparer une transaction.",
      "BUYER CHECKLIST": "LISTE DE CONTRÔLE ACHETEUR",
      "What should buyers check before paying an overseas supplier?":
        "Que vérifier avant de payer un fournisseur à l’étranger ?",
      "Build a practical prepayment review around identity, evidence, terms, documents, and agreed checkpoints.":
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
      "We started GlobxLink to address the operational realities of international trade through practical coordination and clearer handoffs.":
        "Nous avons créé GlobxLink pour répondre aux réalités opérationnelles du commerce transfrontalier grâce à une coordination concrète et des relais plus clairs.",
      "A team of six across China, Türkiye, and Africa, plus remote engineering, with people joining as we partner and hire.":
        "Une équipe de six personnes en Chine, Türkiye et Afrique, avec une équipe d’ingénierie à distance, qui s’agrandit au fil des partenariats et recrutements.",
      "Founder focused on facilitating international trade between African and Turkish businesses, coordinating supplier interactions and daily execution across language, culture, and operational complexity.":
        "Fondateur spécialisé dans la facilitation du commerce entre entreprises africaines et turques, la coordination des fournisseurs et des opérations dans des contextes linguistiques et culturels variés.",
      "Product engineer leading the design of the GlobxLink coordination workspace concept, milestone structure, documentation flow, and partner integrations. Background in financial services systems where settlement evidence is essential.":
        "Ingénieur produit chargé de concevoir le concept d’espace de coordination GlobxLink, jalons, flux documentaire et intégrations partenaires. Expérience des systèmes financiers où les preuves de règlement sont indispensables.",
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
      "Business email": "Email professionnel",
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
      "GlobxLink coordinates international trade. It is not a marketplace, freight forwarder, customs broker, or payment provider, and does not guarantee delivery, verification of all suppliers, or transaction outcomes.":
        "GlobxLink coordonne le commerce transfrontalier. Ce n’est ni une place de marché, ni un transporteur, ni un commissionnaire en douane, ni un prestataire de paiement, et ne garantit ni la livraison, ni la vérification de tous les fournisseurs, ni les résultats des transactions.",
      "A coordination service for the middle of international trade, where clear expectations, visibility, and practical follow through matter.":
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
    "Choose a Trade Readiness & Coordination Assessment or a Provider Request for your international trade need.":
      "Sınır ötesi ticaret ihtiyacınız için Ticaret Hazırlık ve Koordinasyon Değerlendirmesini veya Sağlayıcı Talebini seçin.",
    "Services | GlobxLink": "Hizmetler | GlobxLink",
    "Find a Provider (Provider Request) | GlobxLink":
      "Sağlayıcı Bulun (Sağlayıcı Talebi) | GlobxLink",
    "Trade Readiness & Coordination Assessment | GlobxLink":
      "Ticaret Hazırlığı ve Koordinasyon Değerlendirmesi | GlobxLink",
    "Know what your transaction needs before you commit to it.":
      "Taahhütte bulunmadan önce işleminizin ihtiyaçlarını öğrenin.",
    "Businesses with a specific international transaction, sourcing, negotiating terms, in execution, or resolving an issue, who want it to proceed with fewer surprises.":
      "Belirli bir sınır ötesi işlemi bulunan ve tedarik, koşul müzakeresi, uygulama veya sorun çözümü aşamalarında daha az sürprizle ilerlemek isteyen işletmeler.",
    "Between agreement and delivery, requirements drift, documents lag, responsibilities blur, and changes do not reach everyone. Many of these problems are visible early if someone is looking for them.":
      "Anlaşma ile teslimat arasında gereksinimler değişebilir, belgeler gecikebilir, sorumluluklar belirsizleşebilir ve güncellemeler herkese ulaşmayabilir. Bu sorunların çoğu erken takip edilirse görülebilir.",
    "A structured review of one transaction: corridor and markets, product and specifications, counterparty status, commercial terms, documentation, milestones, and the main constraint most likely to delay or disrupt it.":
      "Tek bir işlemin yapılandırılmış incelemesi: koridor ve pazarlar, ürün ve özellikleri, karşı tarafın durumu, ticari koşullar, belgeler, kilometre taşları ve gecikmeye ya da kesintiye yol açabilecek temel kısıt.",
    "A clear read of what is confirmed, what is unconfirmed, and what is exposed; a prioritised list of what to address; and a defined next step, including, where it fits, moving into ongoing coordination.":
      "Doğrulanan, doğrulanmayan ve risk taşıyan noktaların açık özeti; ele alınması gereken konuların öncelik listesi ve uygun olduğunda devam eden koordinasyona geçişi içeren belirli bir sonraki adım.",
    "Share a short brief on one transaction": "Bir işlem hakkında kısa bilgi paylaşın",
    "Complete a structured assessment": "Yapılandırılmış değerlendirmeyi tamamlayın",
    "Review findings and the next step": "Bulguları ve sonraki adımı gözden geçirin",
    "Optionally agree a coordination engagement": "İsteğe bağlı olarak koordinasyon çalışmasını kararlaştırın",
    "Message “ASSESSMENT” with your corridor and product, or use the enquiry form and select Trade Readiness Assessment.":
      "Koridorunuzu ve ürününüzü belirterek “DEĞERLENDİRME” mesajı gönderin veya talep formunda Ticaret Hazırlık Değerlendirmesini seçin.",
    "GlobxLink coordinates, it does not hold or move funds, clear customs, or forward freight, and it does not guarantee outcomes. Scope and any further work are agreed before commitments are made.":
      "GlobxLink koordinasyon sağlar. Fon tutmaz veya aktarmaz, gümrük işlemi yapmaz, yük taşımacılığı üstlenmez ve sonuç garantisi vermez. Kapsam ve ek çalışmalar taahhüt öncesinde kararlaştırılır.",
    "Find a Provider (Provider Request)": "Sağlayıcı Bulun (Sağlayıcı Talebi)",
    "When you just need the right provider, a lighter way in.":
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
    "Practical questions for international buyers.":
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
      "Formu doldurursanız adınız, şirketiniz, iş elektronik posta adresiniz, ülkeniz, talep türünüz ve mesajınız cihazınızda bir metin dosyasında birleştirilir. Form bu bilgileri GlobxLink'e göndermez veya GlobxLink sunucusunda saklamaz.",
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
    "Choose a Trade Readiness & Coordination Assessment or a Provider Request for your international trade need.":
      "Choisissez une évaluation de préparation et de coordination commerciale ou une demande de prestataire selon votre besoin transfrontalier.",
    "Services | GlobxLink": "Services | GlobxLink",
    "Find a Provider (Provider Request) | GlobxLink":
      "Trouver un prestataire (demande de prestataire) | GlobxLink",
    "Trade Readiness & Coordination Assessment | GlobxLink":
      "Évaluation de préparation et de coordination commerciale | GlobxLink",
    "Know what your transaction needs before you commit to it.":
      "Identifiez les besoins de votre transaction avant de vous engager.",
    "Businesses with a specific international transaction, sourcing, negotiating terms, in execution, or resolving an issue, who want it to proceed with fewer surprises.":
      "Entreprises ayant une transaction transfrontalière précise et souhaitant avancer avec moins d’imprévus, de la recherche à l’exécution ou à la résolution d’un problème.",
    "Between agreement and delivery, requirements drift, documents lag, responsibilities blur, and changes do not reach everyone. Many of these problems are visible early if someone is looking for them.":
      "Entre l’accord et la livraison, les besoins évoluent, les documents prennent du retard, les responsabilités deviennent floues et les changements ne sont pas transmis à tous. Un suivi précoce permet d’identifier bon nombre de ces problèmes.",
    "A structured review of one transaction: corridor and markets, product and specifications, counterparty status, commercial terms, documentation, milestones, and the main constraint most likely to delay or disrupt it.":
      "Examen structuré d’une transaction : corridor et marchés, produit et spécifications, situation de la contrepartie, conditions commerciales, documents, jalons et principal risque de retard ou de perturbation.",
    "A clear read of what is confirmed, what is unconfirmed, and what is exposed; a prioritised list of what to address; and a defined next step, including, where it fits, moving into ongoing coordination.":
      "Synthèse des éléments confirmés, non confirmés et exposés, liste priorisée des points à traiter et prochaine étape définie, avec possibilité de poursuivre par une coordination continue.",
    "Share a short brief on one transaction": "Présentez brièvement une transaction",
    "Complete a structured assessment": "Réalisez une évaluation structurée",
    "Review findings and the next step": "Examinez les résultats et la prochaine étape",
    "Optionally agree a coordination engagement": "Convenez, si besoin, d’un accompagnement de coordination",
    "Message “ASSESSMENT” with your corridor and product, or use the enquiry form and select Trade Readiness Assessment.":
      "Envoyez « ÉVALUATION » avec votre corridor et votre produit, ou sélectionnez l’évaluation de préparation commerciale dans le formulaire.",
    "GlobxLink coordinates, it does not hold or move funds, clear customs, or forward freight, and it does not guarantee outcomes. Scope and any further work are agreed before commitments are made.":
      "GlobxLink coordonne les échanges, mais ne détient ni ne transfère de fonds, ne dédouane pas les marchandises, n’organise pas leur transport et ne garantit aucun résultat. Le périmètre et tout travail complémentaire sont convenus avant engagement.",
    "Find a Provider (Provider Request)": "Trouver un prestataire (demande de prestataire)",
    "When you just need the right provider, a lighter way in.":
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
    "Practical questions for international buyers.":
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
      "Si vous remplissez le formulaire, votre nom, votre entreprise, votre email professionnel, votre pays, le type de demande et votre message sont réunis dans un fichier texte sur votre appareil. Le formulaire n’envoie pas ces informations à GlobxLink et ne les stocke pas sur ses serveurs.",
    "Your choices": "Vos choix",
    "You choose whether to download, keep, or share the draft. Review the file before sending it through another channel and avoid including sensitive information that is not needed for an initial enquiry.":
      "Vous choisissez de télécharger, conserver ou partager le brouillon. Relisez le fichier avant de l’envoyer par un autre canal et évitez d’y inclure des informations sensibles inutiles pour une première demande.",
    "Future changes": "Évolutions futures",
    "Online submission will only be enabled after a verified business contact and an appropriate data-handling process are configured. This notice must be reviewed and updated before that change.":
      "L’envoi en ligne ne sera activé qu’après la mise en place d’un contact professionnel vérifié et d’un processus adapté de traitement des données. Le présent avis devra être révisé et mis à jour avant cette évolution.",
    "Return to the inquiry form": "Retour au formulaire de demande",
    "← Return to the inquiry form": "← Retour au formulaire de demande",
  });

  Object.assign(copy.tr, {
    About: "Hakkımızda",
    Contact: "İletişim",
    "The Middle of Trade": "Ticaretin Merkezi",
    "GlobxLink helps businesses bring structure, visibility, and coordination to what happens between agreement and delivery.":
      "GlobxLink, işletmelerin anlaşma ile teslimat arasında yaşanan süreçlere yapı, görünürlük ve koordinasyon kazandırmasına yardımcı olur.",
    "Discuss Your Trade Requirement ↗": "Ticaret İhtiyacınızı Görüşelim ↗",
    "Execution monitoring & inspection": "Uygulama takibi ve denetim",
    "Express lane": "Hızlı başlangıç",
    "Trade connections globe; drag to rotate": "Ticaret bağlantıları küresi; döndürmek için sürükleyin",
    "Packaging materials, industrial packaging, consumables, and business supplies":
      "Ambalaj malzemeleri, endüstriyel ambalajlar, sarf malzemeleri ve iş ihtiyaçları",
    "Most cross-border trade starts with one of two needs: finding a suitable provider or making an existing transaction ready for execution.":
      "Sınır ötesi ticaret genellikle iki ihtiyaçtan biriyle başlar: uygun bir sağlayıcı bulmak veya mevcut bir işlemi uygulamaya hazırlamak.",
    "GlobxLink supports both. We help businesses assess potential providers, structure transaction requirements, monitor agreed commitments, coordinate inspections where needed, and address execution issues.":
      "GlobxLink her iki ihtiyacı da destekler. İşletmelerin potansiyel sağlayıcıları değerlendirmesine, işlem gereksinimlerini yapılandırmasına, kararlaştırılan taahhütleri izlemesine, gerektiğinde denetimleri koordine etmesine ve uygulama sorunlarını ele almasına yardımcı oluruz.",
    "Start with a Trade Readiness & Coordination Assessment if you already have a transaction. Choose a Provider Request if you need help identifying suitable providers.":
      "Halihazırda bir işleminiz varsa Ticaret Hazırlık ve Koordinasyon Değerlendirmesi ile başlayın. Uygun sağlayıcıları belirleme konusunda yardıma ihtiyacınız varsa Sağlayıcı Talebi’ni seçin.",
    "A structured review of your transaction’s requirements, counterparties, commitments and potential execution risks — with a path into ongoing monitoring and coordination where needed.":
      "İşleminizin gereksinimlerini, karşı taraflarını, taahhütlerini ve olası uygulama risklerini yapılandırılmış biçimde inceleyerek gerektiğinde sürekli izleme ve koordinasyona geçiş imkânı sunar.",
    "Review of relevant provider claims and capabilities": "İlgili sağlayıcı iddialarının ve yetkinliklerinin incelenmesi",
    "Corridor-specific intelligence": "Koridora özgü bilgiler",
    "Payment milestone mapping": "Ödeme kilometre taşlarının eşleştirilmesi",
    "Product specifications and order requirements": "Ürün özellikleri ve sipariş gereksinimleri",
    "Documentation requirements and readiness": "Belge gereksinimleri ve hazırlık durumu",
    "Agreed execution milestones and checkpoints": "Kararlaştırılan uygulama kilometre taşları ve kontrol noktaları",
    "Production progress monitoring against agreed milestones": "Üretim ilerlemesinin kararlaştırılan kilometre taşlarına göre izlenmesi",
    "Basic physical checks by GlobxLink, including quantity, packaging, labels and visible product condition":
      "GlobxLink tarafından miktar, ambalaj, etiketler ve ürünün gözle görülebilen durumu dâhil temel fiziksel kontroller",
    "Coordination of specialised technical inspections through qualified inspection partners":
      "Uzman teknik denetimlerin yetkin denetim ortakları aracılığıyla koordine edilmesi",
    "Comparison of inspection findings against agreed specifications": "Denetim bulgularının kararlaştırılan özelliklerle karşılaştırılması",
    "Shipment-readiness checks and documentation follow-up": "Sevkiyata hazırlık kontrolleri ve belge takibi",
    "Evidence collection and documentation of identified discrepancies": "Kanıtların toplanması ve belirlenen farklılıkların belgelenmesi",
    "On-the-ground coordination where arranged": "Kararlaştırıldığı durumlarda sahada koordinasyon",
    "Greater visibility into whether agreed requirements are being met, with discrepancies identified and documented before they become bigger problems.":
      "Kararlaştırılan gereksinimlerin karşılanıp karşılanmadığı konusunda daha fazla görünürlük; farklılıkların büyümeden önce belirlenip belgelenmesi.",
    "Stakeholder communication and follow-up": "Paydaşlarla iletişim ve takip",
    "Follow-through on agreed responsibilities and commitments": "Kararlaştırılan sorumlulukların ve taahhütlerin takibi",
    "Coordination of corrective actions when discrepancies arise": "Farklılıklar ortaya çıktığında düzeltici faaliyetlerin koordine edilmesi",
    "Coordination with suppliers, buyers and relevant service providers": "Tedarikçiler, alıcılar ve ilgili hizmet sağlayıcılarla koordinasyon",
    "Logistics-related communication and handoff coordination": "Lojistikle ilgili iletişim ve devir koordinasyonu",
    "Documentation of decisions and outstanding actions": "Kararların ve tamamlanmamış işlerin belgelenmesi",
    "Execution issues become visible, documented and easier for the responsible parties to address.":
      "Uygulama sorunları görünür ve belgelenmiş hâle gelir; sorumlu tarafların ele alması kolaylaşır.",
    "Inspection & Field Checks": "Denetim ve Saha Kontrolleri",
    "From agreed requirements to physical checks": "Kararlaştırılan gereksinimlerden fiziksel kontrollere",
    "Agreements are only useful when both parties understand what needs to be delivered and whether it meets the agreed requirements.":
      "Anlaşmalar, ancak her iki taraf da neyin teslim edilmesi gerektiğini ve bunun kararlaştırılan gereksinimleri karşılayıp karşılamadığını anladığında işe yarar.",
    "GlobxLink can conduct basic physical checks directly, including quantity, packaging, labels and visible product condition.":
      "GlobxLink; miktar, ambalaj, etiketler ve ürünün gözle görülebilen durumu dâhil temel fiziksel kontrolleri doğrudan gerçekleştirebilir.",
    "For specialised technical requirements, we coordinate inspections through qualified inspection partners.":
      "Uzmanlık gerektiren teknik gereksinimler için denetimleri yetkin denetim ortakları aracılığıyla koordine ederiz.",
    "Findings are documented and compared against the agreed criteria, helping buyers and suppliers identify discrepancies and determine the next steps.":
      "Bulgular belgelenir ve kararlaştırılan ölçütlerle karşılaştırılır; böylece alıcılar ve tedarikçiler farklılıkları belirleyip sonraki adımlara karar verebilir.",
    "The scope of every inspection is agreed in advance. Basic field checks do not replace specialised technical testing or formal certification.":
      "Her denetimin kapsamı önceden kararlaştırılır. Temel saha kontrolleri, uzman teknik testlerin veya resmî sertifikasyonun yerine geçmez.",
    "Packaging & Industrial Supplies": "Ambalaj ve Endüstriyel Malzemeler",
    "Packaging materials, industrial packaging, consumables and essential business supplies. Product specifications, quality consistency and delivery requirements matter.":
      "Ambalaj malzemeleri, endüstriyel ambalajlar, sarf malzemeleri ve temel iş ihtiyaçları. Ürün özellikleri, kalite tutarlılığı ve teslimat gereksinimleri önemlidir.",
    "Our initial commercial focus is the Africa–Türkiye trade corridor, connecting businesses and opportunities across both markets. China remains part of our broader international trade context.":
      "İlk ticari odağımız, iki pazardaki işletmeleri ve fırsatları birbirine bağlayan Afrika–Türkiye ticaret koridorudur. Çin, daha geniş uluslararası ticaret bağlamımızın bir parçası olmaya devam eder.",
    "How coordination works, a concept view.": "Koordinasyon nasıl işler: kavramsal bir görünüm.",
    "GlobxLink is a coordination service. This illustrative concept shows one way to organise the work; it is not a live product or trade record.":
      "GlobxLink bir koordinasyon hizmetidir. Bu örnek konsept, işlerin düzenlenmesine yönelik bir yaklaşımı gösterir; canlı bir ürün veya ticaret kaydı değildir.",
    "Clarify requirements, roles and responsibilities.": "Gereksinimleri, rolleri ve sorumlulukları netleştirin.",
    "Organise milestones and execution checkpoints.": "Kilometre taşlarını ve uygulama kontrol noktalarını düzenleyin.",
    "Keep progress, inspection findings and documentation visible.": "İlerlemeyi, denetim bulgularını ve belgeleri görünür tutun.",
    "Identify discrepancies and coordinate follow-up actions.": "Farklılıkları belirleyin ve takip faaliyetlerini koordine edin.",
    "Illustrative coordination flow": "Örnek koordinasyon akışı",
    Illustrative: "Örnek",
    "Requirements and responsibilities": "Gereksinimler ve sorumluluklar",
    "Counterparty checks and available evidence": "Karşı taraf kontrolleri ve mevcut kanıtlar",
    Review: "İnceleme",
    "Agreed milestones": "Kararlaştırılan kilometre taşları",
    "Execution and inspection checkpoints": "Uygulama ve denetim kontrol noktaları",
    Structure: "Yapılandırma",
    "Progress and follow-up": "İlerleme ve takip",
    "Discrepancies and documentation": "Farklılıklar ve belgeler",
    Coordinate: "Koordinasyon",
    "Not a live product or trade record": "Canlı bir ürün veya ticaret kaydı değildir",
    "Planned role · Recruitment": "Planlanan pozisyon · İşe alım",
    "Operations / Field Coordination": "Operasyon / Saha Koordinasyonu",
    "Containers and checklist representing operations coordination":
      "Operasyon koordinasyonunu temsil eden konteynerler ve kontrol listesi",
    "Supports supplier follow-up, field coordination, execution monitoring and on-the-ground operational activities.":
      "Tedarikçi takibini, saha koordinasyonunu, uygulama izlemeyi ve sahadaki operasyonel faaliyetleri destekler.",
    "We help businesses move from commercial agreement to actual execution with greater structure, visibility and follow-through.":
      "İşletmelerin ticari anlaşmadan fiilî uygulamaya daha fazla yapı, görünürlük ve takip ile geçmesine yardımcı oluyoruz.",
    "Before execution, we help clarify requirements, assess counterparties and structure commitments. During execution, we monitor progress, conduct basic physical checks and coordinate specialised inspections.":
      "Uygulama öncesinde gereksinimleri netleştirmeye, karşı tarafları değerlendirmeye ve taahhütleri yapılandırmaya yardımcı oluruz. Uygulama sırasında ilerlemeyi izler, temel fiziksel kontroller yapar ve uzman denetimleri koordine ederiz.",
    "When something goes wrong, we document discrepancies, communicate with the relevant parties and coordinate follow-up actions. Our service is focused on practical execution support, not a future software platform.":
      "Bir sorun çıktığında farklılıkları belgeler, ilgili taraflarla iletişim kurar ve takip faaliyetlerini koordine ederiz. Hizmetimiz gelecekteki bir yazılım platformuna değil, pratik uygulama desteğine odaklanır.",
    "GlobxLink provides cross-border trade coordination and execution support. It is not a marketplace, freight forwarder, customs broker or payment provider, and does not guarantee supplier performance, product quality, delivery or transaction outcomes. Basic physical checks are conducted within an agreed scope; specialised technical inspections are coordinated through qualified partners. GlobxLink does not hold or move funds.":
      "GlobxLink, sınır ötesi ticaret koordinasyonu ve uygulama desteği sağlar. Bir pazaryeri, nakliye komisyoncusu, gümrük müşaviri veya ödeme sağlayıcısı değildir; tedarikçi performansını, ürün kalitesini, teslimatı veya işlem sonuçlarını garanti etmez. Temel fiziksel kontroller kararlaştırılan kapsamda yapılır; uzman teknik denetimler yetkin ortaklar aracılığıyla koordine edilir. GlobxLink fon tutmaz veya aktarmaz.",
    "Cross-border trade coordination and execution support, bringing structure, visibility and follow-through to the space between agreement and delivery.":
      "Anlaşma ile teslimat arasındaki sürece yapı, görünürlük ve takip kazandıran sınır ötesi ticaret koordinasyonu ve uygulama desteği.",
    "A structured review of one cross-border transaction, including:":
      "Aşağıdakileri kapsayan tek bir sınır ötesi işlemin yapılandırılmış incelemesi:",
    "Corridor and market considerations.": "Koridor ve pazar değerlendirmeleri.",
    "Product specifications and requirements.": "Ürün özellikleri ve gereksinimleri.",
    "Counterparty status and available evidence.": "Karşı tarafın durumu ve mevcut kanıtlar.",
    "Commercial terms and responsibilities.": "Ticari koşullar ve sorumluluklar.",
    "Documentation and payment milestones.": "Belgeler ve ödeme kilometre taşları.",
    "Production, inspection and shipment checkpoints.": "Üretim, denetim ve sevkiyat kontrol noktaları.",
    "Potential execution risks and unresolved dependencies.": "Olası uygulama riskleri ve çözümlenmemiş bağımlılıklar.",
    "A structured assessment showing:": "Aşağıdakileri gösteren yapılandırılmış bir değerlendirme:",
    "What has been confirmed.": "Nelerin doğrulandığı.",
    "What remains unconfirmed.": "Nelerin henüz doğrulanmadığı.",
    "What could expose the transaction to delays or execution problems.":
      "İşlemi gecikme veya uygulama sorunlarına maruz bırakabilecek unsurlar.",
    "Which requirements and commitments need attention.": "Hangi gereksinimlerin ve taahhütlerin ele alınması gerektiği.",
    "What milestones and checkpoints should be monitored.": "Hangi kilometre taşlarının ve kontrol noktalarının izlenmesi gerektiği.",
    "Recommended next steps, including potential inspection and coordination support where appropriate.":
      "Uygun olduğunda olası denetim ve koordinasyon desteği dâhil önerilen sonraki adımlar.",
    "Ongoing Execution Support": "Sürekli Uygulama Desteği",
    "Depending on the agreed scope, GlobxLink can monitor transaction milestones, conduct basic physical checks, coordinate specialised technical inspections through qualified partners, document discrepancies and coordinate follow-up actions.":
      "Kararlaştırılan kapsama bağlı olarak GlobxLink işlem kilometre taşlarını izleyebilir, temel fiziksel kontroller yapabilir, uzman teknik denetimleri yetkin ortaklar aracılığıyla koordine edebilir, farklılıkları belgeleyebilir ve takip faaliyetlerini koordine edebilir.",
    "GlobxLink provides cross-border trade coordination and execution support. It does not hold or move funds, clear customs, or forward freight, and does not guarantee supplier performance, product quality, delivery, or transaction outcomes. Basic physical checks follow an agreed scope; specialised technical inspections are coordinated through qualified partners.":
      "GlobxLink sınır ötesi ticaret koordinasyonu ve uygulama desteği sağlar. Fon tutmaz veya aktarmaz, gümrük işlemi yapmaz, yük taşımacılığı üstlenmez; tedarikçi performansını, ürün kalitesini, teslimatı veya işlem sonuçlarını garanti etmez. Temel fiziksel kontroller kararlaştırılan kapsamda yapılır; uzman teknik denetimler yetkin ortaklar aracılığıyla koordine edilir.",
    "Contact ↗": "İletişim ↗",
  });

  Object.assign(copy.fr, {
    About: "À propos",
    Contact: "Contact",
    "The Middle of Trade": "Au cœur du commerce",
    "GlobxLink helps businesses bring structure, visibility, and coordination to what happens between agreement and delivery.":
      "GlobxLink aide les entreprises à structurer, rendre visible et coordonner les opérations entre l’accord et la livraison.",
    "Discuss Your Trade Requirement ↗": "Parlons de votre besoin commercial ↗",
    "Execution monitoring & inspection": "Suivi et inspection de l’exécution",
    "Express lane": "Parcours express",
    "Trade connections globe; drag to rotate": "Globe des échanges commerciaux ; faites glisser pour le faire tourner",
    "Packaging materials, industrial packaging, consumables, and business supplies":
      "Matériaux d’emballage, emballages industriels, consommables et fournitures professionnelles",
    "Most cross-border trade starts with one of two needs: finding a suitable provider or making an existing transaction ready for execution.":
      "La plupart des échanges transfrontaliers commencent par l’un de ces besoins : trouver un prestataire adapté ou préparer une transaction existante à l’exécution.",
    "GlobxLink supports both. We help businesses assess potential providers, structure transaction requirements, monitor agreed commitments, coordinate inspections where needed, and address execution issues.":
      "GlobxLink répond à ces deux besoins. Nous aidons les entreprises à évaluer des prestataires potentiels, structurer les exigences de la transaction, suivre les engagements convenus, coordonner les inspections nécessaires et traiter les problèmes d’exécution.",
    "Start with a Trade Readiness & Coordination Assessment if you already have a transaction. Choose a Provider Request if you need help identifying suitable providers.":
      "Commencez par une évaluation de préparation et de coordination si vous avez déjà une transaction. Choisissez une demande de prestataire si vous avez besoin d’aide pour en identifier un adapté.",
    "A structured review of your transaction’s requirements, counterparties, commitments and potential execution risks — with a path into ongoing monitoring and coordination where needed.":
      "Un examen structuré des exigences, contreparties, engagements et risques d’exécution potentiels de votre transaction, avec la possibilité d’un suivi et d’une coordination continus si nécessaire.",
    "Review of relevant provider claims and capabilities": "Examen des déclarations et capacités pertinentes du prestataire",
    "Corridor-specific intelligence": "Informations propres au corridor",
    "Payment milestone mapping": "Cartographie des jalons de paiement",
    "Product specifications and order requirements": "Spécifications du produit et exigences de la commande",
    "Documentation requirements and readiness": "Exigences documentaires et état de préparation",
    "Agreed execution milestones and checkpoints": "Jalons et points de contrôle d’exécution convenus",
    "Production progress monitoring against agreed milestones": "Suivi de l’avancement de la production selon les jalons convenus",
    "Basic physical checks by GlobxLink, including quantity, packaging, labels and visible product condition":
      "Contrôles physiques de base par GlobxLink, portant notamment sur la quantité, l’emballage, les étiquettes et l’état visible du produit",
    "Coordination of specialised technical inspections through qualified inspection partners":
      "Coordination d’inspections techniques spécialisées par des partenaires qualifiés",
    "Comparison of inspection findings against agreed specifications": "Comparaison des résultats d’inspection avec les spécifications convenues",
    "Shipment-readiness checks and documentation follow-up": "Contrôles de préparation à l’expédition et suivi documentaire",
    "Evidence collection and documentation of identified discrepancies": "Collecte de preuves et documentation des écarts constatés",
    "On-the-ground coordination where arranged": "Coordination sur le terrain lorsqu’elle est convenue",
    "Greater visibility into whether agreed requirements are being met, with discrepancies identified and documented before they become bigger problems.":
      "Une meilleure visibilité sur le respect des exigences convenues, avec l’identification et la documentation des écarts avant qu’ils ne deviennent plus importants.",
    "Stakeholder communication and follow-up": "Communication et suivi avec les parties prenantes",
    "Follow-through on agreed responsibilities and commitments": "Suivi des responsabilités et engagements convenus",
    "Coordination of corrective actions when discrepancies arise": "Coordination des actions correctives en cas d’écart",
    "Coordination with suppliers, buyers and relevant service providers": "Coordination avec les fournisseurs, acheteurs et prestataires concernés",
    "Logistics-related communication and handoff coordination": "Communication logistique et coordination des relais",
    "Documentation of decisions and outstanding actions": "Documentation des décisions et actions en attente",
    "Execution issues become visible, documented and easier for the responsible parties to address.":
      "Les problèmes d’exécution deviennent visibles, documentés et plus faciles à traiter par les parties responsables.",
    "Inspection & Field Checks": "Inspection et contrôles sur le terrain",
    "From agreed requirements to physical checks": "Des exigences convenues aux contrôles physiques",
    "Agreements are only useful when both parties understand what needs to be delivered and whether it meets the agreed requirements.":
      "Un accord n’est utile que si les deux parties comprennent ce qui doit être livré et si cela répond aux exigences convenues.",
    "GlobxLink can conduct basic physical checks directly, including quantity, packaging, labels and visible product condition.":
      "GlobxLink peut réaliser directement des contrôles physiques de base, notamment sur la quantité, l’emballage, les étiquettes et l’état visible du produit.",
    "For specialised technical requirements, we coordinate inspections through qualified inspection partners.":
      "Pour les exigences techniques spécialisées, nous coordonnons les inspections avec des partenaires qualifiés.",
    "Findings are documented and compared against the agreed criteria, helping buyers and suppliers identify discrepancies and determine the next steps.":
      "Les résultats sont documentés et comparés aux critères convenus, afin d’aider acheteurs et fournisseurs à identifier les écarts et à définir les prochaines étapes.",
    "The scope of every inspection is agreed in advance. Basic field checks do not replace specialised technical testing or formal certification.":
      "Le périmètre de chaque inspection est convenu à l’avance. Les contrôles de terrain de base ne remplacent ni les essais techniques spécialisés ni une certification officielle.",
    "Packaging & Industrial Supplies": "Emballages et fournitures industrielles",
    "Packaging materials, industrial packaging, consumables and essential business supplies. Product specifications, quality consistency and delivery requirements matter.":
      "Matériaux d’emballage, emballages industriels, consommables et fournitures professionnelles essentielles. Les spécifications, la régularité de la qualité et les exigences de livraison comptent.",
    "Our initial commercial focus is the Africa–Türkiye trade corridor, connecting businesses and opportunities across both markets. China remains part of our broader international trade context.":
      "Notre priorité commerciale initiale est le corridor commercial Afrique–Türkiye, qui relie les entreprises et les opportunités des deux marchés. La Chine reste présente dans notre contexte commercial international plus large.",
    "How coordination works, a concept view.": "Comment fonctionne la coordination : vue conceptuelle.",
    "GlobxLink is a coordination service. This illustrative concept shows one way to organise the work; it is not a live product or trade record.":
      "GlobxLink est un service de coordination. Ce concept illustratif présente une façon d’organiser le travail ; il ne s’agit ni d’un produit actif ni d’un dossier commercial réel.",
    "Clarify requirements, roles and responsibilities.": "Clarifier les exigences, les rôles et les responsabilités.",
    "Organise milestones and execution checkpoints.": "Organiser les jalons et les points de contrôle de l’exécution.",
    "Keep progress, inspection findings and documentation visible.": "Rendre visibles l’avancement, les résultats d’inspection et les documents.",
    "Identify discrepancies and coordinate follow-up actions.": "Identifier les écarts et coordonner les actions de suivi.",
    "Illustrative coordination flow": "Flux de coordination illustratif",
    Illustrative: "Illustratif",
    "Requirements and responsibilities": "Exigences et responsabilités",
    "Counterparty checks and available evidence": "Contrôles des contreparties et éléments disponibles",
    Review: "Examen",
    "Agreed milestones": "Jalons convenus",
    "Execution and inspection checkpoints": "Points de contrôle d’exécution et d’inspection",
    Structure: "Structuration",
    "Progress and follow-up": "Avancement et suivi",
    "Discrepancies and documentation": "Écarts et documentation",
    Coordinate: "Coordination",
    "Not a live product or trade record": "Ni produit actif ni dossier commercial réel",
    "Planned role · Recruitment": "Poste prévu · Recrutement",
    "Operations / Field Coordination": "Opérations / Coordination terrain",
    "Containers and checklist representing operations coordination":
      "Conteneurs et liste de contrôle illustrant la coordination opérationnelle",
    "Supports supplier follow-up, field coordination, execution monitoring and on-the-ground operational activities.":
      "Assure le suivi des fournisseurs, la coordination terrain, le suivi de l’exécution et les activités opérationnelles sur place.",
    "We help businesses move from commercial agreement to actual execution with greater structure, visibility and follow-through.":
      "Nous aidons les entreprises à passer de l’accord commercial à l’exécution concrète avec davantage de structure, de visibilité et de suivi.",
    "Before execution, we help clarify requirements, assess counterparties and structure commitments. During execution, we monitor progress, conduct basic physical checks and coordinate specialised inspections.":
      "Avant l’exécution, nous aidons à clarifier les exigences, évaluer les contreparties et structurer les engagements. Pendant l’exécution, nous suivons l’avancement, réalisons des contrôles physiques de base et coordonnons des inspections spécialisées.",
    "When something goes wrong, we document discrepancies, communicate with the relevant parties and coordinate follow-up actions. Our service is focused on practical execution support, not a future software platform.":
      "En cas de problème, nous documentons les écarts, communiquons avec les parties concernées et coordonnons le suivi. Notre service privilégie un accompagnement opérationnel concret, et non une future plateforme logicielle.",
    "GlobxLink provides cross-border trade coordination and execution support. It is not a marketplace, freight forwarder, customs broker or payment provider, and does not guarantee supplier performance, product quality, delivery or transaction outcomes. Basic physical checks are conducted within an agreed scope; specialised technical inspections are coordinated through qualified partners. GlobxLink does not hold or move funds.":
      "GlobxLink fournit des services de coordination commerciale transfrontalière et d’accompagnement à l’exécution. Ce n’est ni une place de marché, ni un transitaire, ni un commissionnaire en douane, ni un prestataire de paiement, et l’entreprise ne garantit ni la performance des fournisseurs, ni la qualité des produits, ni la livraison, ni les résultats des transactions. Les contrôles physiques de base sont réalisés dans un périmètre convenu ; les inspections techniques spécialisées sont coordonnées par des partenaires qualifiés. GlobxLink ne détient ni ne transfère de fonds.",
    "Cross-border trade coordination and execution support, bringing structure, visibility and follow-through to the space between agreement and delivery.":
      "Coordination commerciale transfrontalière et accompagnement de l’exécution, pour structurer, rendre visible et suivre les opérations entre l’accord et la livraison.",
    "A structured review of one cross-border transaction, including:":
      "Examen structuré d’une transaction transfrontalière, comprenant :",
    "Corridor and market considerations.": "Considérations relatives au corridor et au marché.",
    "Product specifications and requirements.": "Spécifications et exigences du produit.",
    "Counterparty status and available evidence.": "Situation des contreparties et éléments disponibles.",
    "Commercial terms and responsibilities.": "Conditions commerciales et responsabilités.",
    "Documentation and payment milestones.": "Documentation et jalons de paiement.",
    "Production, inspection and shipment checkpoints.": "Points de contrôle de production, d’inspection et d’expédition.",
    "Potential execution risks and unresolved dependencies.": "Risques d’exécution potentiels et dépendances non résolues.",
    "A structured assessment showing:": "Évaluation structurée présentant :",
    "What has been confirmed.": "Les éléments confirmés.",
    "What remains unconfirmed.": "Les éléments restant à confirmer.",
    "What could expose the transaction to delays or execution problems.":
      "Les éléments susceptibles d’entraîner des retards ou des problèmes d’exécution.",
    "Which requirements and commitments need attention.": "Les exigences et engagements nécessitant une attention particulière.",
    "What milestones and checkpoints should be monitored.": "Les jalons et points de contrôle à suivre.",
    "Recommended next steps, including potential inspection and coordination support where appropriate.":
      "Les prochaines étapes recommandées, y compris, si nécessaire, un soutien en inspection et en coordination.",
    "Ongoing Execution Support": "Accompagnement continu de l’exécution",
    "Depending on the agreed scope, GlobxLink can monitor transaction milestones, conduct basic physical checks, coordinate specialised technical inspections through qualified partners, document discrepancies and coordinate follow-up actions.":
      "Selon le périmètre convenu, GlobxLink peut suivre les jalons de la transaction, réaliser des contrôles physiques de base, coordonner des inspections techniques spécialisées avec des partenaires qualifiés, documenter les écarts et coordonner les actions de suivi.",
    "GlobxLink provides cross-border trade coordination and execution support. It does not hold or move funds, clear customs, or forward freight, and does not guarantee supplier performance, product quality, delivery, or transaction outcomes. Basic physical checks follow an agreed scope; specialised technical inspections are coordinated through qualified partners.":
      "GlobxLink fournit des services de coordination commerciale transfrontalière et d’accompagnement à l’exécution. L’entreprise ne détient ni ne transfère de fonds, ne dédouane pas et n’organise pas le transport de marchandises ; elle ne garantit ni la performance des fournisseurs, ni la qualité des produits, ni la livraison, ni les résultats des transactions. Les contrôles physiques de base suivent un périmètre convenu ; les inspections techniques spécialisées sont coordonnées par des partenaires qualifiés.",
    "Contact ↗": "Contact ↗",
  });

  Object.assign(copy.tr, {
    "Meet the team": "Ekiple Tanışın",
    "The people behind GlobxLink.": "GlobxLink'in arkasındaki insanlar.",
    "Bringing together trade expertise, technology, and creative communication to make cross-border coordination clearer.":
      "Sınır ötesi koordinasyonu daha anlaşılır kılmak için ticaret uzmanlığını, teknolojiyi ve yaratıcı iletişimi bir araya getiriyoruz.",
    "Founder with 6+ years coordinating transactions between African and Turkish businesses. Deep corridor knowledge in supplier coordination, transaction execution, and on-the-ground trade support across language, culture, and operational complexity.":
      "Afrika ve Türkiye'deki işletmeler arasında işlemleri koordine etme konusunda 6 yılı aşkın deneyime sahip kurucu. Dil, kültür ve operasyonel zorluklar boyunca tedarikçi koordinasyonu, işlem yürütme ve sahada ticaret desteği konusunda derin koridor bilgisi.",
    "Co-Founder": "Kurucu Ortak",
    "Product engineer leading the GlobxLink coordination workspace, payment milestones, escrow execution logic, and partner integrations. Background in financial services systems where settlement evidence is non-negotiable.":
      "GlobxLink koordinasyon çalışma alanına, ödeme kilometre taşlarına, emanet yürütme mantığına ve iş ortağı entegrasyonlarına liderlik eden ürün mühendisi. Mutabakat kanıtlarının vazgeçilmez olduğu finansal hizmet sistemlerinde deneyim sahibidir.",
    "Systems engineer responsible for verification infrastructure and operational tooling. Focus on the underlying technical work that makes counterparty checks, document routing, and audit trails reliable enough to bet money on.":
      "Doğrulama altyapısından ve operasyon araçlarından sorumlu sistem mühendisi. Karşı taraf kontrollerini, belge yönlendirmesini ve denetim izlerini güvenilir kılan temel teknik çalışmalara odaklanır.",
    "Art Director & Creative Designer": "Sanat Yönetmeni ve Yaratıcı Tasarımcı",
    "Nour Eddin Hamada": "Nour Eddin Hamada",
    "Art director and multidisciplinary designer with 7+ years of experience in visual identity, digital design, motion, and AI-assisted creative production.":
      "Görsel kimlik, dijital tasarım, hareketli grafikler ve yapay zekâ destekli yaratıcı üretim alanlarında 7 yılı aşkın deneyime sahip sanat yönetmeni ve çok disiplinli tasarımcı.",
    "Nour Eddin Hamada — updated personal portrait": "Nour Eddin Hamada — güncel portre fotoğrafı",
    "Nour Eddin Hamada social links": "Nour Eddin Hamada sosyal bağlantıları",
    "Nour Eddin Hamada — Website": "Nour Eddin Hamada — Web sitesi",
    "Nour Eddin Hamada — Instagram": "Nour Eddin Hamada — Instagram",
    "Nour Eddin Hamada — LinkedIn": "Nour Eddin Hamada — LinkedIn",
    "Personal website": "Kişisel web sitesi",
  });

  Object.assign(copy.fr, {
    "Meet the team": "Rencontrez l’équipe",
    "The people behind GlobxLink.": "Les personnes derrière GlobxLink.",
    "Bringing together trade expertise, technology, and creative communication to make cross-border coordination clearer.":
      "Nous réunissons expertise commerciale, technologie et communication créative pour rendre la coordination transfrontalière plus claire.",
    "Founder with 6+ years coordinating transactions between African and Turkish businesses. Deep corridor knowledge in supplier coordination, transaction execution, and on-the-ground trade support across language, culture, and operational complexity.":
      "Fondateur avec plus de six ans d’expérience dans la coordination de transactions entre des entreprises africaines et turques. Solide connaissance du corridor, de la coordination des fournisseurs, de l’exécution des transactions et du soutien commercial sur le terrain, au-delà des différences linguistiques, culturelles et opérationnelles.",
    "Co-Founder": "Co-fondateur",
    "Product engineer leading the GlobxLink coordination workspace, payment milestones, escrow execution logic, and partner integrations. Background in financial services systems where settlement evidence is non-negotiable.":
      "Ingénieur produit responsable de l’espace de coordination GlobxLink, des jalons de paiement, de la logique d’exécution du séquestre et des intégrations partenaires. Expérience des systèmes de services financiers où les preuves de règlement sont indispensables.",
    "Systems engineer responsible for verification infrastructure and operational tooling. Focus on the underlying technical work that makes counterparty checks, document routing, and audit trails reliable enough to bet money on.":
      "Ingénieur systèmes responsable de l’infrastructure de vérification et des outils opérationnels. Il se concentre sur le socle technique qui fiabilise les contrôles des contreparties, l’acheminement des documents et les pistes d’audit.",
    "Art Director & Creative Designer": "Directeur artistique et designer créatif",
    "Nour Eddin Hamada": "Nour Eddin Hamada",
    "Art director and multidisciplinary designer with 7+ years of experience in visual identity, digital design, motion, and AI-assisted creative production.":
      "Directeur artistique et designer pluridisciplinaire avec plus de sept ans d’expérience en identité visuelle, design numérique, animation et création assistée par l’IA.",
    "Nour Eddin Hamada — updated personal portrait": "Nour Eddin Hamada — portrait personnel récent",
    "Nour Eddin Hamada social links": "Liens sociaux de Nour Eddin Hamada",
    "Nour Eddin Hamada — Website": "Nour Eddin Hamada — Site web",
    "Nour Eddin Hamada — Instagram": "Nour Eddin Hamada — Instagram",
    "Nour Eddin Hamada — LinkedIn": "Nour Eddin Hamada — LinkedIn",
    "Personal website": "Site personnel",
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
      en: "Cross-border trade coordination and execution support, bringing structure, visibility and follow-through to the space between agreement and delivery.",
      tr: "Anlaşma ile teslimat arasındaki sürece yapı, görünürlük ve takip kazandıran sınır ötesi ticaret koordinasyonu ve uygulama desteği.",
      fr: "Coordination commerciale transfrontalière et accompagnement de l’exécution, pour structurer, rendre visible et suivre les opérations entre l’accord et la livraison.",
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
