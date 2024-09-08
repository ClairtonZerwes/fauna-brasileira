let dadosAnimais = [
    {
        nome: "Onça Pintada",
        nome_cientifico: "Panthera Onca",
        resumo: `A onça-pintada é o maior felino das Américas e um predador ápice em diversos ecossistemas. 
        Sua pelagem característica, com manchas em formato de rosetas, a torna facilmente identificável. 
        Apesar de ser um animal poderoso, a onça-pintada enfrenta diversas ameaças, como a perda de habitat e a caça ilegal.`,
        link_wiki: "https://pt.wikipedia.org/wiki/Panthera_onca",
        tamanho: `O comprimento do corpo de uma onça-pintada adulta pode variar entre 1,1 e 2,4 metros, 
        e a altura na cernelha (ponto mais alto das costas) pode chegar a 80 centímetros.`,
        peso: `O peso pode variar significativamente, mas geralmente fica entre 55 e 96 quilogramos. 
        Os machos são, em média, maiores e mais pesados que as fêmeas.`,
        tags: "onça pintada felino jaguar gato do mato felideos felídeos brasil",
        imagem: "./imagens/Onca_Pintada.jpg",
    },
    {
        nome: "Lobo Guará",
        nome_cientifico: "Chrysocyon brachyurus",
        resumo: `Também conhecido como guará, aguará ou lobo-vermelho, é um canídeo de grande porte e beleza singular, endêmico da América do Sul.
        Sua característica mais marcante é a pelagem ruiva e longa, que lhe confere um aspecto único e elegante. 
        As pernas são mais escuras, quase negras e a cauda é longa e espessa.`,
        link_wiki: "https://pt.wikipedia.org/wiki/Lobo-guar%C3%A1",
        tamanho: `É o maior canídeo da América do Sul, atingindo entre 95 e 115 centímetros de comprimento, com uma cauda que pode chegar a 50 centímetros. 
        A altura na cernelha (ponto mais alto das costas) varia entre 70 e 90 centímetros.`,
        peso: `Os adultos pesam entre 20 a 30 quilos.`,
        tags: "lobo guará vermelho canídeo canideo ruivo brasil",
        imagem: "./imagens/Lobo_Guara.jpg",
    },
    {
        nome: "Anta",
        nome_cientifico: "Tapirus terrestris",
        resumo: "A anta é o maior mamífero terrestre da América do Sul. Herbívora e solitária, habita florestas tropicais e áreas próximas a rios. Possui uma probóscide préensil que utiliza para se alimentar e explorar o ambiente.",
        link_wiki: "https://pt.wikipedia.org/wiki/Anta",
        tamanho: "O comprimento do corpo pode variar entre 1,8 e 2,5 metros, e a altura na cernelha pode chegar a 1,2 metros.",
        peso: "O peso médio de uma anta adulta é de cerca de 250 a 300 quilogramas.",
        tags: "anta tapir mamífero herbívoro brasil américa do sul",
        imagem: "./imagens/Anta.jpg"
    },
    {
        nome: "Tatu-bola",
        nome_cientifico: "Tolypeutes tricinctus",
        resumo: `O tatu-bola é uma espécie de tatu conhecida por sua capacidade de se enrolar em uma bola perfeita quando se sente ameaçado. Possui uma carapaça óssea resistente que protege seu corpo. É um animal solitário e noturno, encontrado principalmente na Caatinga e em algumas áreas do Cerrado.`,
        link_wiki: "https://pt.wikipedia.org/wiki/Tatu-bola",
        tamanho: `Relativamente pequeno, o tatu-bola mede cerca de 50 centímetros de comprimento e pesa em torno de 1,2 kg.`,
        peso: `Cerca de 1,2 kg`,
        tags: "tatu bola mamífero blindado caatinga cerrado brasil",
        imagem: "./imagens/Tatu_Bola.jpg"
    },
    {
        nome: "Tatu-canastra",
        nome_cientifico: "Priodontes maximus",
        resumo: `O tatu-canastra é o maior tatu do mundo e um dos maiores mamíferos fossoriais (que cavam). Sua carapaça é robusta e dividida em faixas móveis, protegendo seu corpo. É um animal solitário e noturno, alimentando-se principalmente de cupins e formigas. Habita áreas de Cerrado e Floresta Amazônica, mas está ameaçado pela caça e perda de habitat.`,
        link_wiki: "https://pt.wikipedia.org/wiki/Tatu-canastra",
        tamanho: `Pode chegar a 1,5 metros de comprimento e pesar até 60 kg.`,
        peso: `Até 60 kg`,
        tags: "tatu canastra mamifero blindado maior tatu cupim formiga cerrado amazonia ameaçado",
        imagem: "./imagens/Tatu_Canastra.jpg"
    },
    {
        nome: "Bicho-preguiça",
        nome_cientifico: "Choloepus didactylus",
        resumo: "O bicho-preguiça é um mamífero arborícola conhecido por seu metabolismo lento e hábitos noturnos. Se alimenta principalmente de folhas e passa a maior parte do tempo pendurado nos galhos das árvores.",
        link_wiki: "https://pt.wikipedia.org/wiki/Bicho-preguiça",
        tamanho: "O comprimento do corpo pode variar entre 50 e 70 centímetros, e a altura na cernelha pode chegar a 20 centímetros.",
        peso: "O peso médio de um bicho-preguiça adulto é de cerca de 4 a 7 quilogramas.",
        tags: "bicho-preguiça preguiça mamífero arborícola brasil",
        imagem: "./imagens/Bicho_Preguica.jpg"
    },
    {
        nome: "Capivara",
        nome_cientifico: "Hydrochoerus hydrochaeris",
        resumo: "A capivara é o maior roedor do mundo e é semi-aquática. Vive em grupos sociais e habita áreas próximas a rios, lagos e pântanos.",
        link_wiki: "https://pt.wikipedia.org/wiki/Capivara",
        tamanho: "O comprimento do corpo pode variar entre 1 e 1,3 metros, e a altura na cernelha pode chegar a 50 centímetros.",
        peso: "O peso médio de uma capivara adulta é de cerca 35 a 65 quilogramas.",
        tags: "capivara roedor semi aquático brasil",
        imagem: "./imagens/Capivara.jpg"
    },
    {
        nome: "Tamanduá-bandeira",
        nome_cientifico: "Myrmecophaga tridactyla",
        resumo: "O tamanduá-bandeira é um mamífero edentado conhecido por sua longa língua e pelagem característica. Se alimenta de formigas e cupins.",
        link_wiki: "https://pt.wikipedia.org/wiki/Tamandu%C3%A1-bandeira",
        tamanho: "O comprimento do corpo pode variar entre 1,2 e 1,8 metros, e a altura na cernelha pode chegar a 90 centímetros.",
        peso: "O peso médio de um tamanduá-bandeira adulto é de cerca de 30 a 40 quilogramas.",
        tags: "tamanduá bandeira mirim edentado formigueiro brasil",
        imagem: "./imagens/Tamandua_Bandeira.jpg"
    },
    {
        nome: "Cervo-do-Pantanal",
        nome_cientifico: "Blastocerus dichotomus",
        resumo: "O cervo-do-pantanal é o maior cervídeo da América do Sul e um dos maiores mamíferos brasileiros. Habita áreas alagadas do Pantanal e é adaptado a um estilo de vida semi-aquático. Sua população tem diminuído devido à perda de habitat e caça.",
        link_wiki: "https://pt.wikipedia.org/wiki/Cervo-do-pantanal",
        tamanho: "O comprimento do corpo pode chegar a 2 metros, e a altura na cernelha pode ultrapassar 1,2 metros. Os machos possuem chifres ramificados.",
        peso: "O peso médio de um macho adulto pode chegar a 125 quilogramas.",
        tags: "cervo-do-pantanal cervídeo pantanal brasil mamífero ameaçado",
        imagem: "./imagens/Cervo_do_Pantanal.jpg"
    },
    {
        nome: "Arara-azul",
        nome_cientifico: "Anodorhynchus hyacinthinus",
        resumo: "A arara-azul é uma das maiores psitacídeas do mundo, conhecida por sua plumagem azul vibrante e bico preto. Habita áreas de floresta e campos abertos, alimentando-se principalmente de frutos e sementes.",
        link_wiki: "https://pt.wikipedia.org/wiki/Arara-azul",
        tamanho: "Pode atingir até 90 centímetros de comprimento e pesar cerca de 1,5 kg.",
        peso: "1,2 a 1,7 kg",
        tags: "arara-azul ave psitacídea azul brasil",
        imagem: "./imagens/Arara_Azul.jpg"
    },
    {
        nome: "Tucano",
        nome_cientifico: "Ramphastos toco",
        resumo: "O tucano é uma ave facilmente reconhecida por seu grande bico colorido. Habita florestas tropicais e se alimenta de frutas, insetos e pequenos vertebrados.",
        link_wiki: "https://pt.wikipedia.org/wiki/Tucano",
        tamanho: "Comprimento total (incluindo o bico) pode chegar a 60 centímetros.",
        peso: "400 a 700 gramas",
        tags: "tucano ave bico colorido brasil",
        imagem: "./imagens/Tucano.jpg"
    },
    {
        nome: "Carcará",
        nome_cientifico: "Caracara plancus",
        resumo: "O carcará é uma ave de rapina diurna, conhecida por sua dieta variada e adaptabilidade. Habita diversos ambientes, desde campos abertos até áreas urbanas.",
        link_wiki: "https://pt.wikipedia.org/wiki/Carcará",
        tamanho: "Comprimento total pode variar entre 50 e 60 centímetros.",
        peso: "800 gramas a 1,5 kg",
        tags: "carcará ave de rapina brasil",
        imagem: "./imagens/Carcara.jpg"
    },
    {
        nome: "Jacutinga",
        nome_cientifico: "Pipile jacutinga",
        resumo: "A jacutinga é uma ave terrestre da família dos faisões. Habita florestas densas e se alimenta de frutos e invertebrados.",
        link_wiki: "https://pt.wikipedia.org/wiki/Jacutinga",
        tamanho: "Comprimento total pode chegar a 90 centímetros.",
        peso: "2 a 3 kg",
        tags: "jacutinga ave faisão brasil",
        imagem: "./imagens/Jacutinga.jpg"
    },
    {
        nome: "Gavião-real",
        nome_cientifico: "Harpia harpyja",
        resumo: "O gavião-real é a maior ave de rapina das Américas. Habita florestas densas e se alimenta de mamíferos, aves e répteis.",
        link_wiki: "https://pt.wikipedia.org/wiki/Gavião-real",
        tamanho: "Comprimento total pode chegar a 1 metro e envergadura de até 2,25 metros.",
        peso: "Até 9 kg",
        tags: "gavião-real ave de rapina brasil",
        imagem: "./imagens/Gaviao_Real.jpg"
    },
    {
        nome: "Beija-flor",
        nome_cientifico: "Trochilidae",
        resumo: "Os beija-flores são aves pequenas e coloridas, conhecidas por seu metabolismo rápido e capacidade de pairar no ar. Se alimentam principalmente de néctar de flores.",
        link_wiki: "https://pt.wikipedia.org/wiki/Beija-flor",
        tamanho: "O tamanho varia muito entre as espécies, mas em geral medem entre 5 e 13 centímetros.",
        peso: "2 a 20 gramas",
        tags: "beija-flor ave pequena néctar brasil",
        imagem: "./imagens/Beija_Flor.jpg"
    },
    {
        nome: "Tangará",
        nome_cientifico: "Thraupis sayaca",
        resumo: "O tangará é uma ave passeriforme conhecida por sua plumagem vibrante, especialmente os machos. Habita áreas de floresta, bordas de mata e áreas urbanas. Se alimenta principalmente de frutas e insetos.",
        link_wiki: "https://pt.wikipedia.org/wiki/Tangará",
        tamanho: "Cerca de 17 centímetros de comprimento.",
        peso: "30 a 40 gramas",
        tags: "tangará ave passeriforme colorido brasil",
        imagem: "./imagens/Tangara.jpg"
    },
    {
        nome: "Arapaçu",
        nome_cientifico: "Dendrocolaptidae",
        resumo: "Os arapaçus são aves insetívoras que se destacam por seus bicos curvos e longos, adaptados para procurar insetos em fendas de árvores. Habitam florestas e áreas de mata.",
        link_wiki: "https://pt.wikipedia.org/wiki/Dendrocolaptidae",
        tamanho: "O tamanho varia entre as espécies, mas geralmente medem entre 15 e 30 centímetros.",
        peso: "Varia entre as espécies, mas geralmente são aves de médio porte.",
        tags: "arapaçu ave insetívora bico curvo brasil",
        imagem: "./imagens/Arapacu.jpg"
    },
    {
        nome: "Saíra-de-coleira",
        nome_cientifico: "Tangara seledon",
        resumo: "A saíra-de-coleira é uma ave passeriforme conhecida por sua plumagem colorida, com uma (coleira) azul vibrante nos machos. Habita áreas de floresta e bordas de mata. Se alimenta principalmente de frutas.",
        link_wiki: "https://pt.wikipedia.org/wiki/Tangara_seledon",
        tamanho: "Cerca de 15 centímetros de comprimento.",
        peso: "25 a 35 gramas",
        tags: "saíra-de-coleira ave passeriforme colorido brasil",
        imagem: "./imagens/Saira_de_Coleira.jpg"
    },
    {
        nome: "Macaco-prego",
        nome_cientifico: "Cebus",
        resumo: "Os macacos-prego são primatas muito inteligentes e sociáveis, conhecidos por sua habilidade de utilizar ferramentas. Habitam diversas áreas do Brasil, desde florestas até áreas urbanas.",
        link_wiki: "https://pt.wikipedia.org/wiki/Macaco-prego",
        tamanho: "Varia entre as espécies, mas geralmente medem entre 30 e 60 centímetros.",
        peso: "Varia entre as espécies, mas geralmente pesam entre 2 e 5 kg.",
        tags: "macaco-prego primata inteligente brasil",
        imagem: "./imagens/Macaco_Prego.jpg"
    },
    {
        nome: "Uacari-caché",
        nome_cientifico: "Cacajao calvus",
        resumo: "O uacari-caché é um primata com uma aparência única, com a face vermelha e sem pelos. Habita as florestas inundáveis da Amazônia.",
        link_wiki: "https://pt.wikipedia.org/wiki/Uacari-caché",
        tamanho: "Cerca de 50 centímetros de comprimento.",
        peso: "Cerca de 3 kg.",
        tags: "uacari-caché primata amazônia brasil",
        imagem: "./imagens/Uacari_Cache.jpg"
    },
    {
        nome: "Mico-leão-dourado",
        nome_cientifico: "Leontopithecus rosalia",
        resumo: "O mico-leão-dourado é um primata endêmico da Mata Atlântica, conhecido por sua pelagem dourada e ameaçado de extinção.",
        link_wiki: "https://pt.wikipedia.org/wiki/Mico-leão-dourado",
        tamanho: "Cerca de 25 centímetros de comprimento.",
        peso: "Cerca de 500 gramas.",
        tags: "mico-leão-dourado primata mata atlântica brasil",
        imagem: "./imagens/Mico_Leao_Dourado.jpg"
    },
    {
        nome: "Bugio",
        nome_cientifico: "Alouatta",
        resumo: "Os bugios são primatas conhecidos por seus longos pelos e vocalizações roucas. Habitam diversas áreas do Brasil.",
        link_wiki: "https://pt.wikipedia.org/wiki/Bugio",
        tamanho: "Varia entre as espécies, mas geralmente medem entre 50 e 70 centímetros.",
        peso: "Varia entre as espécies, mas geralmente pesam entre 4 e 8 kg.",
        tags: "bugio primata brasil",
        imagem: "./imagens/Bugio.jpg"
    },
    {
        nome: "Muriqui",
        nome_cientifico: "Brachyteles",
        resumo: "O muriqui é o maior primata das Américas. Habita as florestas da Mata Atlântica e é conhecido por seu comportamento tranquilo e social.",
        link_wiki: "https://pt.wikipedia.org/wiki/Muriqui",
        tamanho: "Até 70 centímetros de comprimento e cauda de até 90 centímetros.",
        peso: "Até 15 kg.",
        tags: "muriqui primata mata atlântica brasil",
        imagem: "./imagens/Muriqui.jpg"
    },
    {
        nome: "Sagui",
        nome_cientifico: "Callitrichidae",
        resumo: "Os saguis são primatas pequenos e ágeis, conhecidos por sua cauda longa e preênsil. Habitam diversas áreas do Brasil.",
        link_wiki: "https://pt.wikipedia.org/wiki/Callitrichidae",
        tamanho: "Varia entre as espécies, mas geralmente medem entre 20 e 30 centímetros.",
        peso: "Varia entre as espécies, mas geralmente pesam entre 100 e 400 gramas.",
        tags: "saguim primata brasil",
        imagem: "./imagens/Sagui.jpg"
    },
    {
        nome: "Iguana",
        nome_cientifico: "Iguana iguana",
        resumo: "A iguana é um lagarto arborícola herbívoro, popular como animal de estimação. Habita áreas quentes e úmidas da América Central e do Sul.",
        link_wiki: "https://pt.wikipedia.org/wiki:Iguana",
        tamanho: "Até 2 metros, incluindo a cauda",
        peso: "Até 14 kg",
        tags: "iguana lagarto herbívoro brasil",
        imagem: "./imagens/Iguana.jpg"
    },
    {
        nome: "Calango",
        nome_cientifico: "Tropidurus torquatus",
        resumo: "O calango é um lagarto comum em áreas urbanas e rurais do Brasil. Se alimenta de insetos e pequenos invertebrados.",
        link_wiki: "https://pt.wikipedia.org/wiki/Tropidurus_torquatus",
        tamanho: "Até 20 cm",
        peso: "Cerca de 50 gramas",
        tags: "calango lagarto insetivoro brasil",
        imagem: "./imagens/Calango.jpg"
    },
    {
        nome: "Teiú",
        nome_cientifico: "Tupinambis merianae",
        resumo: "O teiú é um lagarto grande e ágil, predador de outros animais. Habita florestas de parte do Brasil (com exceção da floresta amazônica), habita até nos cerrados e a Caatinga nordestina, também encontrado em áreas urbanas.",
        link_wiki: "https://pt.wikipedia.org/wiki/Tupinambis_merianae",
        tamanho: "Até 1,5 metros",
        peso: "Até 8 kg",
        tags: "teiú lagarto predador brasil",
        imagem: "./imagens/Teiu.jpg"
    },
    {
        nome: "Tartaruga-de-pente",
        nome_cientifico: "Eretmochelys imbricata",
        resumo: "A tartaruga-de-pente é uma espécie marinha ameaçada de extinção, conhecida por seu casco com escamas em forma de pente.",
        link_wiki: "https://pt.wikipedia.org/wiki/Tartaruga-de-pente",
        tamanho: "Carapaça até 1 metro",
        peso: "Até 50 kg",
        tags: "tartaruga-de-pente marinha ameaçado brasil",
        imagem: "./imagens/Tartaruga_de_Pente.jpg"
    },
    {
        nome: "Jacaré-paguá",
        nome_cientifico: "Caiman latirostris",
        resumo: "O jacaré-paguá é um crocodiliano de médio porte, encontrado em diversos ambientes aquáticos do Brasil. Também conhecido como O jacaré-anão, também conhecido como jacaré-anão ou jacaré-mirim, É a menor espécie de jacaré e de crocodiliano do mundo. O jacaré-anão tem hábitos noturnos e vive em tocas durante o dia. Os juvenis se alimentam de invertebrados, enquanto os adultos comem peixes e invertebrados",
        link_wiki: "https://pt.wikipedia.org/wiki/Jacaré-paguá",
        tamanho: "Até 2,5 metros",
        peso: "Até 60 kg",
        tags: "jacare anao anão pagua menor brasil",
        imagem: "./imagens/Jacare_Pagua.jpg"
    },
    {
        nome: "Jacaré-açu",
        nome_cientifico: "Melanosuchus niger",
        resumo: "O jacaré-açu é o maior crocodiliano das Américas e um dos maiores do mundo. Habita os rios da Amazônia e é uma espécie ameaçada de extinção.",
        link_wiki: "https://pt.wikipedia.org/wiki/Jacar%C3%A9-a%C3%A7u",
        tamanho: "Até 6 metros",
        peso: "Até 1000 kg",
        tags: "jacaré-açu crocodiliano amazônia brasil",
        imagem: "./imagens/Jacare_Acu.jpg"
    },
    {
        nome: "Jacaré-de-papo-amarelo",
        nome_cientifico: "Caiman latirostris",
        resumo: "O jacaré-de-papo-amarelo é um crocodiliano amplamente distribuído pelo Sudeste da América do Sul. Conhecido por sua coloração amarelada na região do papo durante a época reprodutiva, habita diversos ecossistemas aquáticos.",
        link_wiki: "https://pt.wikipedia.org/wiki/Jacar%C3%A9-de-papo-amarelo",
        tamanho: "Até 3 metros",
        peso: "Até 60 kg",
        tags: "jacaré-de-papo-amarelo crocodiliano brasil",
        imagem: "./imagens/Jacare_Papo_Amarelo.jpg"
    },
    {
        nome: "Jararaca-ilhoa",
        nome_cientifico: "Bothrops insularis",
        resumo: "Endêmica da Ilha da Queimada Grande, a jararaca-ilhoa é uma das cobras mais venenosas do mundo. Adaptada à vida em um ambiente com alta densidade de presas, apresenta um veneno extremamente potente.",
        link_wiki: "https://pt.wikipedia.org/wiki/Bothrops_insularis",
        tamanho: "Até 70 cm",
        peso: "Quanto maior a cobra, maior o peso.",
        tags: "jararaca ilhoa cobra venenosa brasil",
        imagem: "./imagens/Jararaca_Ilhoa.jpg"
    },
    {
        nome: "Coral-verdadeira",
        nome_cientifico: "Micrurus",
        resumo: "Gênero de corais verdadeiras, com diversas espécies no Brasil. Caracterizam-se por suas cores vibrantes em anéis e são altamente venenosas.",
        link_wiki: "https://pt.wikipedia.org/wiki/Micrurus",
        tamanho: "Varia entre as espécies, mas geralmente entre 60 e 100 cm",
        peso: "Quanto maior a cobra, maior o peso.",
        tags: "coral-verdadeira cobra venenosa brasil",
        imagem: "./imagens/Coral_Verdadeira.jpg"
    },
    {
        nome: "Jiboia-amarela",
        nome_cientifico: "Boa constrictor amarali",
        resumo: "Endêmica do Brasil, a jiboia-amarela é uma serpente não venenosa, conhecida por sua coloração amarela e hábitos noturnos.",
        link_wiki: "https://pt.wikipedia.org/wiki/Boa_constrictor_amarali",
        tamanho: "Até 3 metros",
        peso: "Quanto maior a cobra, maior o peso.",
        tags: "jiboia-amarela cobra não venenosa brasil",
        imagem: "./imagens/Jiboia_Amarela.jpg"
    },
    {
        nome: "Surucucu-pico-de-jaca",
        nome_cientifico: "Lachesis muta",
        resumo: "A maior serpente da América, a surucucu-pico-de-jaca, é encontrada em regiões de floresta úmida da Amazônia e é altamente venenosa.",
        link_wiki: "https://pt.wikipedia.org/wiki/Lachesis_muta",
        tamanho: "Até 3,6 metros",
        peso: "Quanto maior a cobra, maior o peso.",
        tags: "surucucu-pico-de-jaca cobra venenosa amazonia",
        imagem: "./imagens/Surucucu_Pico_de_Jaca.jpg"
    },
    {
        nome: "Jararacuçu",
        nome_cientifico: "Bothrops jararacussu",
        resumo: "Uma das maiores jararacas do Brasil, a jararacuçu é uma serpente venenosa encontrada em diversas regiões do país.",
        link_wiki: "https://pt.wikipedia.org/wiki/Bothrops_jararacussu",
        tamanho: "Até 2 metros",
        peso: "Quanto maior a cobra, maior o peso.",
        tags: "jararacuçu cobra venenosa brasil",
        imagem: "./imagens/Jararacucu.jpg"
    },
    {
        nome: "Sucuri-verde",
        nome_cientifico: "Eunectes murinus",
        resumo: "A sucuri-verde é a maior serpente das Américas e uma das maiores do mundo. Habita rios, lagos e áreas alagadas da Amazônia e do Pantanal. Caça por emboscada, esperando pacientemente por suas presas em locais estratégicos, como poças d'água. Quando uma presa se aproxima, ataca rapidamente, enrolando-se ao redor do corpo da vítima e apertando até a morte.",
        link_wiki: "https://pt.wikipedia.org/wiki/Sucuri",
        tamanho: "Até 9 metros",
        peso: "Até 250 kg",
        tags: "sucuri-verde serpente aquática gigante brasil amazonia pantanal constrictor",
        imagem: "./imagens/sucuri_verde.jpg"
    },
    {
        nome: "Sucuri-amarela",
        nome_cientifico: "Eunectes notaeus",
        resumo: "A sucuri-amarela é encontrada principalmente no Pantanal. É menor que a sucuri-verde, mas ainda assim uma serpente impressionante. Caça principalmente em áreas inundadas, emboscando suas presas em meio à vegetação aquática. Seu corpo alongado e camuflado a ajudam a se camuflar no ambiente.",
        link_wiki: "https://pt.wikipedia.org/wiki/Sucuri",
        tamanho: "Até 5 metros",
        peso: "Até 100 kg",
        tags: "sucuri-amarela serpente aquática pantanal brasil constrictor emboscada",
        imagem: "./imagens/sucuri_amarela.jpg"
    },
    {
        nome: "Sucuri-malhada",
        nome_cientifico: "Eunectes marinus",
        resumo: "A sucuri-malhada é uma espécie menos conhecida e com uma distribuição mais restrita. Seus padrões de coloração são mais complexos que as outras espécies. Caça em áreas de água rasa, utilizando sua camuflagem para se aproximar de suas presas. Após a captura, utiliza a constrição para imobilizar e engolir a presa.",
        link_wiki: "https://pt.wikipedia.org/wiki/Sucuri",
        tamanho: "Até 4 metros",
        peso: "Até 80 kg",
        tags: "sucuri-malhada serpente aquática brasil constrictor emboscada",
        imagem: "./imagens/sucuri_malhada.jpg"
    },
    {
        nome: "Tambaqui",
        nome_cientifico: "Colossoma macropomum",
        resumo: "O tambaqui é um peixe de grande porte, encontrado em rios de águas barrentas da Amazônia. É onívoro e possui grande importância econômica para a região.",
        link_wiki: "https://pt.wikipedia.org/wiki/Tambaqui",
        tamanho: "Até 1 metro",
        peso: "Até 40 kg",
        tags: "amazonia, onivoro, agua_barrenta",
        imagem: "./imagens/tambaqui.jpg"
    },
    {
        nome: "Pirarucu",
        nome_cientifico: "Arapaima gigas",
        resumo: "O pirarucu é um dos maiores peixes de água doce do mundo. Habita os rios de águas negras da Amazônia e é conhecido por sua carne saborosa.",
        link_wiki: "https://pt.wikipedia.org/wiki/Pirarucu",
        tamanho: "Até 3 metros",
        peso: "Até 200 kg",
        tags: "amazonia, carnivoro, gigante",
        imagem: "./imagens/pirarucu.jpg"
    },
    {
        nome: "Acará-disco",
        nome_cientifico: "Symphysodon discus",
        resumo: "O acará-disco é um peixe ornamental muito popular, conhecido por sua beleza e cores vibrantes. Habita os rios de águas negras da Amazônia.",
        link_wiki: "https://pt.wikipedia.org/wiki/Acará-disco",
        tamanho: "Até 20 centímetros",
        peso: "Até 500 gramas",
        tags: "amazonia, ornamental, aguas_negras",
        imagem: "./imagens/acara_disco.jpg"
    },
    {
        nome: "Traíra",
        nome_cientifico: "Hoplias malabaricus",
        resumo: "A traíra é um peixe predador, encontrado em diversos ambientes de água doce no Brasil. É conhecida por sua voracidade e por habitar águas rasas e com vegetação.",
        link_wiki: "https://pt.wikipedia.org/wiki/Traira",
        tamanho: "Até 80 centímetros",
        peso: "Até 5 kg",
        tags: "brasil, carnivoro, predador",
        imagem: "./imagens/traira.jpg"
    },
    {
        nome: "Dourado",
        nome_cientifico: "Salminus brasiliensis",
        resumo: "O dourado é um peixe esportivo muito apreciado, conhecido por sua força e velocidade. Habita os rios de águas claras do Sudeste e Centro-Oeste do Brasil.",
        link_wiki: "https://pt.wikipedia.org/wiki/Dourado",
        tamanho: "Até 1 metro",
        peso: "Até 20 kg",
        tags: "sudeste, centro_oeste, esportivo",
        imagem: "./imagens/dourado.jpg"
    },
    {
        nome: "Matrinxã",
        nome_cientifico: "Brycon cephalus",
        resumo: "A matrinxã é um peixe de grande porte, encontrado em rios de águas claras da Amazônia. É onívoro e possui grande importância econômica para a região.",
        link_wiki: "https://pt.wikipedia.org/wiki/Matrinxã",
        tamanho: "Até 80 centímetros",
        peso: "Até 10 kg",
        tags: "amazonia, onivoro",
        imagem: "./imagens/matrinxa.jpg"
    },
    {
        nome: "Tucunaré",
        nome_cientifico: "Cichla",
        resumo: "O tucunaré é um peixe predador muito apreciado pelos pescadores esportivos. Habita os rios de águas claras da Amazônia e é conhecido por sua força e agilidade.",
        link_wiki: "https://pt.wikipedia.org/wiki/Tucunaré",
        tamanho: "Até 1 metro",
        peso: "Até 20 kg",
        tags: "amazonia, carnivoro, esportivo",
        imagem: "./imagens/tucunare.jpg"
    },
    {
        nome: "Peixe-boi marinho",
        nome_cientifico: "Trichechus manatus",
        resumo: "O peixe-boi marinho é um grande mamífero aquático herbívoro, encontrado em águas costeiras e estuárias do Brasil. É uma espécie ameaçada de extinção.",
        link_wiki: "https://pt.wikipedia.org/wiki/Peixe-boi_marinho",
        tamanho: "Até 3 metros",
        peso: "Até 600 kg",
        tags: "mamifero_aquatico, herbivoro, costeiro, ameaçado",
        imagem: "./imagens/peixe_boi.jpg"
    },
    {
        nome: "Boto cinza",
        nome_cientifico: "Sotalia guianensis",
        resumo: "O boto cinza é um pequeno golfinho de água doce, encontrado em rios e estuários da Amazônia. É uma espécie curiosa e sociável.",
        link_wiki: "https://pt.wikipedia.org/wiki/Boto_cinza",
        tamanho: "Até 2 metros",
        peso: "Até 150 kg",
        tags: "mamifero_aquatico, boto, amazonia, doce golginho cinza",
        imagem: "./imagens/boto_cinza.jpg"
    },
    {
        nome: "Boto cor-de-rosa",
        nome_cientifico: "Inia geoffrensis",
        resumo: "O boto cor-de-rosa é o maior golfinho de rio do mundo, encontrado na Amazônia. Sua coloração varia do cinza ao rosado e é conhecido por sua flexibilidade e curiosidade.",
        link_wiki: "https://pt.wikipedia.org/wiki/Boto-cor-de-rosa",
        tamanho: "Até 2,5 metros",
        peso: "Até 185 kg",
        tags: "mamifero_aquatico, boto, amazonia, rosa",
        imagem: "./imagens/boto_cor_de_rosa.jpg"
    },
    {
        nome: "Toninha",
        nome_cientifico: "Pontoporia blainvillei",
        resumo: "A toninha é o menor cetáceo do Atlântico Sul, encontrada em águas costeiras frias. É uma espécie vulnerável e enfrenta ameaças como a pesca incidental.",
        link_wiki: "https://pt.wikipedia.org/wiki/Toninha",
        tamanho: "Até 1,6 metros",
        peso: "Até 60 kg",
        tags: "mamifero_aquatico, golfinho, costeiro, vulneravel",
        imagem: "./imagens/toninha.jpg"
    },
    {
        nome: "Merou",
        nome_cientifico: "Epinephelus marginatus",
        resumo: "O merou é um peixe predador de grande porte, encontrado em recifes de coral. É uma espécie de grande importância comercial.",
        link_wiki: "https://pt.wikipedia.org/wiki/Merou",
        tamanho: "Até 2 metros",
        peso: "Até 200 kg",
        tags: "peixe_recifal, carnivoro, comercial",
        imagem: "./imagens/merou.jpg",
    },
    {
        nome: "Garoupa",
        nome_cientifico: "Epinephelus marginatus",
        resumo: "A garoupa é um peixe predador de grande porte, muito apreciado na pesca esportiva e comercial. Habita recifes de coral e rochas.",
        link_wiki: "https://pt.wikipedia.org/wiki/Garoupa",
        tamanho: "Até 2 metros",
        peso: "Até 200 kg",
        tags: "predador, recifal, comercial",
        imagem: "./imagens/garoupa.jpg"
    },
    {
        nome: "Baiacu-balão",
        nome_cientifico: "Tetraodontidae",
        resumo: "O baiacu-balão é conhecido por sua capacidade de inflar o corpo quando se sente ameaçado. Possui espinhos e é venenoso.",
        link_wiki: "https://pt.wikipedia.org/wiki/Baiacu",
        tamanho: "Varia de acordo com a espécie",
        peso: "Varia de acordo com a espécie",
        tags: "venenoso, inflável, recifal",
        imagem: "./imagens/baiacu_balaon.jpg",
    },
];
