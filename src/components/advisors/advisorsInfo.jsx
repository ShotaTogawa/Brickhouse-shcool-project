const advisors = [
    {
        name: "JAMES MURRAY",
        location: "Chicago",
        description:
            `Mr. Murray is a Partner and Head of Business Development at
            Centric Wealth Management in Chicago. Previously at Merrill
            Lynch, Jim was one of the founding employees at Centric and
            has been instrumental in building the athlete division at
            Centric which now includes over 25 athletes in multiple sports.
            For the past 3+ years, Jim has led the creation and execution
            of Centric’s business development platform as well as the
            push into venture and other alternative investments. Jim
            played 4 years at St. Cloud State, a top Division 1 Men’s Ice
            Hockey Program.`,
    },
    {
        name: "REBECCA LONGAWA",
        location: "Minneapolis",
        description:
            `With over 20 years of experience in sports marketing and
            innovation, Rebecca is a master connector and networker. She
            is the founder of Happy Warrior, a Sports Tech and Esports
            consultancy firm; serves as a board member for several sports-tech 
            and esports startups; an advisor and mentor for Stadia
            Ventures (St Louis + Dallas) and L Marks (UK) and the Chief
            Growth Officer for Minneapolis-based creative agency, Electric
            Advertising. She is a go-to for both brands & athletes looking for
            strategic introductions, ambassador partnerships, post-career
            advice and personal branding.`,
    },
    {
        name: "TARRNIE WILLIAMS",
        location: "Vancouver",
        description:
            `Mr. Williams is a highly experienced executive, entrepreneur,
            and creative leader who has dedicated his career to building
            products on the forefront of interactive technology. He has led
            development on almost every platform launch, new device,
            and business model, and has helped build and operate
            multiple successful studios and teams, including Electronic
            Arts Canada and LA, Relic Entertainment, and Roadhouse
            Interactive. Tarrnie is CEO and co-founder of Blueprint Reality
            Inc., a mixed reality media company connecting VR and AR
            with social media and streaming.`,
    },
    {
        name: "JON LEE",
        location: "Toronto",
        description:
            `Mr. Lee is currently the Head Strength and Conditioning coach
            for the National Basketball Association’s Toronto Raptors,
            winners of the 2019 NBA World Championship. He has
            worked for the Raptors for the past 10 seasons. In 2018, Jon
            was voted by the NBSCA as the strength and conditioning
            coach of the year for the NBA. Pervious to his NBA career,
            Jon was a high school teacher in Richmond, B.C., for 11
            years. While teaching he also worked for the Vancouver
            Grizzlies and in 2000 was the manager for the Canadian
            Men’s National Basketball team which participated in the
            Sydney Olympics.`,
    },
    {
        name: "ADAM LARRY",
        location: "Toronto",
        description:
            `Mr. Larry, the CEO of Jorael Consulting Inc., works with
            numerous athletes and organizations including the NBPA,
            CFLPA and NHL Alumni Association in an effort to grow their
            revenue and increase their brand recognition. Adam has
            worked with a number of tech start-ups focused on emerging
            sports technologies. Prior to his role with Jorael he ran
            licensing and sponsorship for the NHLPA. Adam received a
            BA from the University of Western Ontario, an LL.B from
            Osgoode Hall Law School and an MBA from the Schulich
            School of Business. Adam is also a professor at Ryerson
            University, teaching the business and legal aspects of sports.`,
    },
    {
        name: "ISRAEL PONS",
        location: "Mexico City",
        description:
            `Mr. Pons is CEO and co-founding partner of Angels Nest
            LATAM, an angel investment network operating in Mexico and
            Latin American countries. Cited by XCALA as the most active
            angel network in Latin America, having over 400 angels in the
            network. He is an entrepreneur and founded 4 companies in
            the UK, 3 of which were sold successfully. Israel is also
            President of the National Entrepreneurship Committee of
            Mexican Institute of Financial Executives (IMEF)`,
    },
    {
        name: "ROBERT SACRE",
        location: "Washington",
        description:
            `Mr. Sacre, a retired professional basketball player, currently
            works with his alma matter Gonzaga University as part of the
            Athletic Development Department as a liaison to benefactors
            and trustees of the school. During his basketball career Rob
            played 5 years at the Division I Level for the Gonzaga
            Bulldogs before being drafted by the Los Angeles Lakers of
            the NBA where he competed for 4 years. Rob completed his
            career in Japan playing three seasons for the Shibuya Sun
            Rockers in Tokyo where his number was recently retired.
            While performing his current role with Gonzaga Rob is also
            completing his masters degree in Athletic Administration.`,
    },
    {
        name: "MARK NAUSHA",
        location: "Dallas",
        description:
            `Mr. Nausha is a noted game developer, online community
            builder, entrepreneur and current Deputy Director of the Game
            Lab at Southern Methodist University Guildhall. He has
            shipped more than 70 titles commercially in the gaming
            industry, generating billions of dollars in revenue. Mark is also
            President at EGENCY and an adjunct professor at SMU
            Guildhall. Currently, he is President of Abacus3 which
            specializes in esports experiences through sponsorship,
            events, area builds, and curriculum with the goals of
            sustainability and growth for universities and students.`,
    },
    {
        name: "ERIC JOHNSON",
        location: "LA",
        description:
            `Mr. Johnson is CEO and founder of Won Worldwide, a strategic
            revenue advisory firm dedicated to navigating the Global Sports
            and Entertainment Media landscape. Eric is also and active
            Board Member and Faculty Director at UCLA Anderson with a
            focus with a focus on Management of Enterprise in Media,
            Entertainment & Sports (MEMES). Previously, he was Executive
            Vice President of Global Advertising Revenue and Sales
            Operations at ESPN where he was responsible for leading
            ESPN’s Global multimedia advertising revenue and sale
            operations of ESPN’s media properties.`,
    },
    {
        name: "ANNA FARRANT",
        location: "Vancouver",
        description:
        `Ms. Farrant co-founded All City Athletics in 2014. The
        company is a boutique boxing studio located in the Gastown
        area of Vancouver BC. She also currently sits on the board of
        Boxing BC, the provincial governing body, as the Vice
        President. Prior to All City she served on the board of Eastside
        Boxing and helped design their curriculum. She recently
        launched Alliance Boxing Promotions a company that
        produces premiere boxing matches.`,
    },
    {
        name: "BRODIE GUNNING",
        location: "Vancouver",
        description:
            `Mr. Gunning is an experienced entrepreneur with over 14
            years operating ventures in both Asia, North and Central
            America. His experience covers ventures in digital media,
            drones, IOT, disaster response, tech incubators, hemp
            processing, fintech and cryptocurrency. He is currently a
            Director of Incubara Capital an investment company focussed
            on disruptive technologies and venture building company
            focused on investing and growing early stage companies`,
    },
    {
        name: "DION POUNCIL",
        location: "LA",
        description:
            `Mr. Pouncil is the chairman of Playbook Network, a Live & On
            Demand video network focused on covering money, tech, real
            estate, and innovative products & services. In addition he is a
            managing partner at PlayBook Capital, where he leads the
            firm’s strategy and oversees investments. Dion’s focus is on
            Technology, Marketing, Brand Development and Real Estate.
            Prior to this, he lead high preforming teams for Fortune 500
            companies and start-ups, in strategy consulting in tech, media,
            and entertainment.`,
    },
    {
        name: "VOHARA GUNARATNA",
        location: "Vancouver",
        description:
            `Mr. Gunaratna is Vice President of Sales at Buyatab Online
            Inc. and an active advisor to early stage technology
            companies. He was one of the founding members of Buyatab,
            and over the past 8+ years, has lead to the creation and
            execution of the sales strategies, business development,
            strategic partnerships, and contract negotiations.`,
    },
    {
        name: "MARK MCCARTNEY",
        location: "Berlin",
        description:
            `Mr. McCartney has over 10 years experience, his previous
            roles include corporate development, management
            consultancy, investor relations, corporate banking analyst, and
            he has served as a Director of TSX.V listed companies.
            Having previously worked in various sectors for firms in
            Dublin, London and Vancouver, he has built a business
            network in areas of finance, banking, mining, biotech and
            technology.`,
    },
    {
        name: "JOSEPH CLEMKO",
        location: "Dallas",
        description:
            `Mr. Clemko, a lawyer with Stinson Law, combines his work
            experience with his legal and business background to counsel
            business, start-ups, entrepreneurs and investors, including
            private equity fund formation and capital raising. Clemko
            focuses on emerging technologies, blockchain,
            cryptocurrency, AI, esports, and gaming. Previously, he acted
            as a Regulatory Compliance Associate for Forex Capital
            Markets. He received his law degree from Western Michigan
            University, Cooley Law School.`,
    }
];

        export default advisors;  