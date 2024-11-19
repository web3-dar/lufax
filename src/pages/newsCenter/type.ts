// src/types/news.ts
export interface News {
    id: number;
    title: string;
    content: string;
    date: string;
    uploader: string;
    imageUrl: string; // URL for the image
  }

  import logo from '../../images/post.png'
  import post2 from '../../images/post2.jpg'
  import post3 from '../../images/post3.png'
  import post4 from '../../images/post4.png'
  
  // Sample news data
  export const newsData: News[] = [
    {
      id: 1,
      title: 'Lufax Holding releases financial results for 2023',
      content: 'March 21st , Lufax Holding Co., Ltd. (LU.N; 06623.HK) released its financial results for Q4 and the whole year in 2023.Realized revenue of about RMB 34.3bn and net profit of RMB 1.034 bn in 2023.',
      date: '2024-03-21',
      uploader: ' Lufax Holding',
      imageUrl: logo, // Example image URL
    },
    {
      id: 2,
      title: 'Lufax Holding released the Q3 financial report ',
      content: 'Nov 14th ,  Lufax Holding Co., Ltd. released its financial report for Q3 2023. As of Sept 30th ,  Lufax Holding, Lufax Holding had served about 20mn customers, empowered 366.3bn yuan of loans, and 50.5bn yuan of new loans in Q3. Lufax Holding pushed ahead with agile operations and cost control. According to the financial results, Lufax Holdings total expenditure decreased YoY in Q3. 30.1%. In Q3, Lufax Holding effectively responded to the revenue pressure and realized a net profit of RMB131mn Lufax Holding strengthened its control over asset quality, and facilitated risk prevention and mitigation. Asset quality remained stable in Q3.According to YongSuk CHO, in terms of early risk indicators, as we tightened risk control, the quality of new loans was in line with expectations.According to the financial report, the credit impairment loss in Q3 decreased YoY. 24.1%.',
      date: '2023-11-14 ',
      uploader: 'Lufax Holding',
      imageUrl: logo, 
    },
    {
      id: 3,
      title: 'Lufax Holding ranked 272nd on 2023 Fortune Chinese 500 List',
      content: ', the 2023 Fortune Chinese 500 List was released. Lufax Holding Co., Ltd. (NYSE：LU；06623.H) ranked 272nd on the List.According to the company’s official website, Lufax Holding is a leading SBO financial service empowerment institution in China, a joint-operation company of China Ping An Group, and it has been dual-listed on NYSE and HKEX. It provides a convenient access to inclusive products and service for SBO, empowers institution partners, implements inclusive finance and support real economy.Lufax Holding’s 2022 Q4 financial report shows that in the 2022 fiscal year, Lufax Holding realized the operating revenue of 5.81 billion yuan (USD 86.394 billion); wherein, Q4 revenue was 123 million yuan, FY net profit reached 0.87 billion yuan. As of Dec 31, 2022, Lufax Holding served about 19 million borrowers on YTD basis, up by 12.9% YoY; the empowered retail credit balance reached RMB 5.76 million yuan, in which Q4 new loan scale was 7.78 billion yuan.According to Fortune China’s website, 2023 Fortune Chinese 500 List adopts the same compilation methodology as Fortune Global 500 List, including both listed and non-listed enterprises. It reflects the latest development trend of China’s largest enterprises. Total revenue of the 500 Chinese companies on the List this year reaches USD 15 trillion.',
      date: '2023-07-27',
      uploader: 'On July 25',
      imageUrl: post2, 
    },
    {
      id: 4,
      title: 'Lufthansa Holding returned to Hong Kong for dual primary listing to focus on providing financial services to SBOs ',
      content: 'Today (April 14), Lufax Holding Limited was officially listed on the main board of the Hong Kong Stock Exchange under the stock code of 6623, realizing a dual primary listing in both Hong Kong and the New York Stock Exchange. The opening price of the first day was 33.5 Hong Kong dollars, as of press time, the share price rose 7.89% to 34.85 Hong Kong dollars.Previously, in October 2020, Lufax Holding was listed on the New York Stock Exchange in the United States. According to the 2022 financial report, Lufax Holding realized total revenue of 58.1 billion yuan and net profit of 8.8 billion yuan in 2022.Lufax Holding ranked second among Chinas non-traditional financial service providers serving micro and small business owners in terms of loan balance of inclusive SBO loans, with a market share of 17.6%.For Lufax Holding, listing back in Hong Kong means a milestone, and more importantly, the beginning of another journey said YongSuk CHO, Chairman and CEO of Lufax Holding, Over the past few years, we have helped solve the financing challenge faced by SBOs through our products, technological means, and offline services. As we enter a new stage of development, Lufax Holding will fully implement the new development concept, operate in a prudent and compliant manner, focus on SBOs, and actively transform into the role of life-cycle consultant for SBOs, and we’ll work together with our partners to build a better financial life for our users”.According to the listing document, in the period from December 31, 2020 to December 31, 2022, the cumulative number of SBOs served by Lufax Holding had increased from 4.6 million to 6.6 million; the balance of loans issued to SBOs had increased from RMB 370.9 billion to RMB 448.9 billion, representing a CAGR of 10%; the ratio of the balance of SBO loans to total loan balance had increased from 68.5% to 82.1%, an increase of 13.6 percentage points; and it had established cooperative relationships with over 550 financial institutions in China.Lufax Holding believes that this realization of dual primary listing status on both the Hong Kong and New York Stock Exchanges will enable the Company to reach a wider range of private and institutional investors, which will help to complement the Companys business focus in China and is critical to the Companys long-term growth strategy.',
      date: '2023-04-15',
      uploader: '陆金所控股',
      imageUrl: post3, 
    },
    {
      id: 5,
      title: 'Lufax Holding listed in KPMGs leading FinTech 50 for the seventh consecutive year ',
      content: `On Jan 16, KPMG China released the "2022 FinTech Double 50 List", and Lufax Holding was listed as "2022 China's Leading FinTech 50 Enterprises" by virtue of its outstanding performance in solving the SBO financing difficulties with the help of technology. This is the seventh consecutive year that Lufax holding got listed since the first selection in 2016. The list shows that from the distribution of the professional fields of the listed enterprises, platform tech empowerment, wealth tech and inclusive tech rank among the top three, while big data and AI, blockchain, etc. are the core technologies of mainstream application among underlying technologies.
      
      The financial industry has always been strengthening the use of FinTech, rationally using big data, cloud computing, AI and other technologies, and seeking innovative risk assessment methods. All this have been regarded by the industry as an effective way to enhance the level of "good loan" and the ability to serve SBOs. In recent years, Lufax Holding has been using the "AI+O2O" business model and leveraging technologies to actively optimize service process and experience, and enhancing the accessibility of services for SBOs, so as to further increase the support for SBOs and optimize the effectiveness of SBO financial services.

 

In 2021, Lufax Holding utilized digital tech to improve the business process and launched the industry's first AI intelligent loan solution "Xingyun" to reduce the dependence of services on physical scenarios. In the first three quarters of this year, about 3.07 thousand SBOs obtained loan services through the AI intelligent loan solution "Xingyun". In 2022, PAPH of Lufax Holding, also launched a one-stop intelligent financing service product, which directly meets the financing needs of SBOs and provides one-stop accurate services for them.

 

At the same time, Lufax Holding comprehensively applies all kinds of cutting-edge technologies, constantly improves risk control technologies and models, and takes "people + enterprises" as the direction to improve the accuracy of small and micro enterprise owners' portraits through multi-dimensional data mining. In 2021, the Company upgraded its risk control engine, increasing its management efficiency by nearly 5 times, its response speed by about 6 times and its processing capacity by more than 15 times, with significant improvements in both the engine's own processing capacity and operational efficiency. Meanwhile, based on the in-depth understanding and excavation of the engine, Lufax Holding has innovated several functional applications in combination with the massive business scenarios of Puhui, giving the engine greater derivative value.

 

Increasing the ability to serve small and micro enterprise owners with the application of responsible technologies also enhances the commercial and social value of Lufax Holding. According to the Company's financial report, as of the end of September 2022, loan balance under the management of the Company amounted to RMB 636.5 billion, and the cumulative number of borrowers increased by 15.3% year-on-year to 18.70 million people. In addition, in the third quarter of 2022, 87.3% of Lufax Holding' new loans went to micro and small enterprise owners, a new record high, and there had been 5 consecutive quarters in which 80% of its new loans flew to micro and small enterprise owners.  `,
      date: '2023-11-14 ',
      uploader: 'Lufax Holding',
      imageUrl: post4, 
    },
    // {
    //   id: 3,
    //   title: 'Lufax Holding released the Q3 financial report ',
    //   content: '',
    //   date: '2023-11-14 ',
    //   uploader: 'Lufax Holding',
    //   imageUrl: logo, 
    // },
    // {
    //   id: 3,
    //   title: 'Lufax Holding released the Q3 financial report ',
    //   content: '',
    //   date: '2023-11-14 ',
    //   uploader: 'Lufax Holding',
    //   imageUrl: logo, 
    // },
    // {
    //   id: 3,
    //   title: 'Lufax Holding released the Q3 financial report ',
    //   content: '',
    //   date: '2023-11-14 ',
    //   uploader: 'Lufax Holding',
    //   imageUrl: logo, 
    // },
    // {
    //   id: 3,
    //   title: 'Lufax Holding released the Q3 financial report ',
    //   content: '',
    //   date: '2023-11-14 ',
    //   uploader: 'Lufax Holding',
    //   imageUrl: logo, 
    // },
    // {
    //   id: 3,
    //   title: 'Lufax Holding released the Q3 financial report ',
    //   content: '',
    //   date: '2023-11-14 ',
    //   uploader: 'Lufax Holding',
    //   imageUrl: logo, 
    // },
    // {
    //   id: 3,
    //   title: 'Lufax Holding released the Q3 financial report ',
    //   content: '',
    //   date: '2023-11-14 ',
    //   uploader: 'Lufax Holding',
    //   imageUrl: logo, 
    // },
    // {
    //   id: 3,
    //   title: 'Lufax Holding released the Q3 financial report ',
    //   content: '',
    //   date: '2023-11-14 ',
    //   uploader: 'Lufax Holding',
    //   imageUrl: logo, 
    // },
    // {
    //   id: 3,
    //   title: 'Lufax Holding released the Q3 financial report ',
    //   content: '',
    //   date: '2023-11-14 ',
    //   uploader: 'Lufax Holding',
    //   imageUrl: logo, 
    // },
    // {
    //   id: 3,
    //   title: 'Lufax Holding released the Q3 financial report ',
    //   content: '',
    //   date: '2023-11-14 ',
    //   uploader: 'Lufax Holding',
    //   imageUrl: logo, 
    // },
    // {
    //   id: 3,
    //   title: 'Lufax Holding released the Q3 financial report ',
    //   content: '',
    //   date: '2023-11-14 ',
    //   uploader: 'Lufax Holding',
    //   imageUrl: logo, 
    // },
   
  ];
  