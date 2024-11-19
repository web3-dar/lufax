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
  import forb from '../../images/forb.png'
  
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
    {
      id: 6,
      title: 'Enhancing the quality of financing services to SBOs, Lufax Holding achieves a turnaround in Q1 ',
      content: `

On May 23, 2023, Lufax Holding(NYSE: LU; 06623.HK) released its first earnings report after returning to Hong Kong for a dual listing. The earnings report showed that the company realized operating revenue of 10.078 billion yuan in the first quarter, with a net profit of 732 million yuan, a turnaround from the previous quarter. Meanwhile, Lufax Holding maintained a solid balance sheet. As of March 31, the Company's net asset size increased to 94.968 billion yuan, of which the Company's bank deposits were 51.303 billion yuan.

 

YongSuk CHO, Chairman and CEO of Lufax Holding, said the recovery in macro economy and in SBOs’ business conditions in the first quarter, and the industry's entry into normalized regulation have made the company cautiously optimistic about a U-shaped recovery in performance. The company will continue to remain patient, cautious and well-prepared to work on the challenges ahead and continue its unwavering focus on enhancing its financing services to SBOs.

 

 

New loan asset quality stabilizes, with a turnaround in the quarter

 

According to the data in Q1 report, as of March 31, Lufax Holding had cumulatively served a total of 19.4 million borrowers and empowered a retail credit balance of 495.2 billion yuan, and new loan amount in Q1 was 57 billion Yuan. The structure of the data shows that both the percentage of quality borrowers and asset quality of the Company's new loans have improved over the past two quarters.

 

Greg Gibb, Co-CEO of Lufax Holding, revealed that of the new unsecured loans facilitated by Lufax Holding in the first quarter, 82% was contributed by high-quality borrowers (rated R1-R3), a year-on-year increase of 100%.

 

The reduction in credit impairment losses was the main driver of the quarterly turnaround, Greg Gibb said. According to the financial report, credit impairment losses for Lufax Holding fell by more than 50% to 3.1 billion Yuan in the first quarter of 2023, down from 6.7 billion Yuan in the fourth quarter of 2022. Greg Gibb expects credit impairment losses to remain stable in the coming quarters.

 

Recently, Macquarie, an analytical agency, released a research report, upgrading the rating of Lufax Holding to "buy", and thinking that the Company's asset quality pressure may see an inflection point and there is a hope for its quality to optimize gradually.

 

Since the beginning of this year, spurred by relevant policies such as expanding domestic demand and stabilizing the economy, Lufax Holding has increased its efforts in financial promotion of consumption, and its consumer finance business has grown steadily. The financial report shows that the Company's consumer credit balance was RMB29.6 billion in the first quarter of 2023, up 39% year-on-year. The consumer finance business also contributed more to the overall business development of Lufax Holding, with new consumer finance loans accounting for 24% of total new loans, compared with 11% in the same period of 2022.

 

The SBO ecosystem business of Lufax Holding continued to progress steadily. As of March 31, 2023, “Ludiantong” , a SBOs-specific value-added service platform had about 1.90 million registered users which increased approximately sevenfold as compared to the end of last year.

 

Greg Gibb expects that the company's core business indicators will gradually recover in the second half of this year, and profits may gradually improve in 2024.

 

In addition, in terms of shareholder returns, YongSuk CHO said the company paid dividends for the second half of 2022 totaling about USD 120 million in April 2023, demonstrating the company's commitment to maintaining a stable dividend policy and continuing to create value for shareholders.

 

 

Enhancing the quality of financing services to SBOs, to support the U-shaped recovery in performance

 

Recently, the China Banking and Insurance Regulatory Commission (CBIRC) issued the Circular on Strengthening Efforts to Enhance the Quality of Financial Services for Small and Micro Enterprises in 2023, proposing the formation of a financial service system for small and micro enterprises compatible with the development of the real economy, the enhancement of the quality of financial services to small and micro enterprises, and the practical enhancement of the sense of access to financial services for small and micro enterprises.

 

YongSuk CHO said that in order to improve the quality of services to SBOs, and promote a U-shaped recovery in performance, Lufax Holding will carry out four key tasks.

 

First, it continues to promote the optimization of the business model. According to the introduction, Lufax Holding continues to promote the business model of 100% credit enhancement by its financing guarantee company, consolidate the guarantee responsibility, and continuously increase the guarantee ratio. Through the financing guarantee model, it aims to make partner banks dare to and willing to lend to SBOs, which helps to reduce the comprehensive financing costs of SBOs, and safeguard the long-term sustainability of SBO financing services. The model has gained the support of most funding partners.

 

Secondly, while ensuring sound asset quality, it will further sink into serving lower-class SBOs. With the gradual recovery of the economy, it is expected that the market space for target customers will gradually expand in the future.

 

Thirdly, it will further diversify its products and services and focus on product diversification and cross-selling between SBOs-specific credit service and consumer finance business to better meet customer needs.

 

Finally, fully leverage on technology empowerment to further optimize risk control capabilities and enhance work efficiency and productivity.

 

The China Micro and Small Business Operators Survey, co-sponsored by Peking University Guanghua School of Management, Peking University Enterprise Big Data Research Center and other organizations, shows that the confidence index of micro and small business operators has increased sharply to 50.3%, which is a record high in more than a year; 70% of micro and small business owners have seen their operations improve; and 50.7% of micro and small business operators need financial support.

 

YongSuk CHO said that in the context of macroeconomic and consumer recovery, the Company has completed the upgrade of its business team, taken the improvement of asset quality as its business focus, continued to promote the optimization of its business model, and continued to cultivate its advantageous segmented regional and industrial markets, and implemented differentiated business strategies based on regional and industrial characteristics to further enhance the depth and breadth of its small and micro-financing services, and to create long-term value for its customers and shareholders.
`,
      date: '2023-05-23 ',
      uploader: 'Lufax Holding',
      imageUrl: post2, 
    },
    {
      id: 7,
      title: 'Lufax Holding’s Q3 earnings: revenue of 4.57 billion yuan in the first three quarters, three new PA directors  ',
      content: `

On Nov 24, Lufax Holding (NYSE:LU) released its 2022Q3 earnings report: in the first three quarters, the company achieved total revenue of 4.57 billion yuan and net profit of 0.95 billion yuan. In terms of key business indicators, the retail credit management loan balance reached 6.365 billion, with cumulative number of borrowers increasing by 15.3％ YoY to 1.87 billion people. The quarterly new loan amount was 1.238 billion yuan, of which 87.3% were directed to SBOs, excl. CF.

 

In addition, Lufax Holding announced the appointment of three senior executives from PAG as directors of the company: Ms.Cai FangFang, Deputy GM and CHO of PAG; Mr.Jiguangheng, former Chairman of Lufax Holding and now Deputy GM of PAG; and Ms. Fuxin, COO and Director of Strategic Development Center of PAG. Mr. YongSuk CHO, Chairman and CEO of Lufax Holding, said that the addition of the new directors not only reflects the support of shareholder PAG to Lufax Holding, but also improves the level of corporate governance by increasing the diversity of the board of directors, thus promoting the company's high-quality development by practicing ESG.
`,
      date: '2022-11-24 ',
      uploader: 'Lufax Holding',
      imageUrl: post4, 
    },
    {
      id: 8,
      title: 'Lufax Holding listed in the Forbes 2022 China ESG50 ',
      content: `

On Aug. 23, Forbes China released its “China ESG50” for the first time, focusing on the enterprises’ practices and information disclosure in the field of “Environment, Social and Governance”; it selected 50 domestic enterprises that took the lead in ESG from the Forbes Global 2000 list, aiming to look for the best practices of Chinese enterprises in ESG; the companies such as PA Group, Lufax Holding, Sinopec, and Xiaomi Group were included on the list.

 

 

With the development of financial service sector, ESG has become a question that must be answered in the industry. Lufax Holding also gradually internalizes ESG to realize the improvement of commercial value and social value. Lufax Holding upholds the original aspiration of supporting the real economy all the time, further focuses on SBO financing services, and gradually moves toward a commercially sustainable development path. The earnings report showed that Lufax Holding saw new loans of up to RMB 129.5 billion yuan in Q2, wherein, 86.1% new loans flowed to the SBOs in the quarter, hitting a record high; and the % of SBO loans reached 80% for four straight quarters.

 

Especially since this year, PAPH, a subsidiary of Lufax Holding, has successively launched a number of SBO support schemes, specifically supporting SBOs in logistics, info & transportation, accommodation & catering industries, etc. It has increased the support for SBOs to withstand the impact of the pandemic, with five major measures of "reduction, deferral, waiving, increase and expansion".

 

While promoting the sustainability of financial services, Lufax Holding has also written the protection of consumer rights and interests into the "DNA" of its corporate development. It’s reported that, on the basis of protecting user rights and interests through process design, the company has carried out various financial popularization works for many years, helping SBOs and others to enhance risk prevention awareness.

 

To demonstrate the company's determination to realize long-term value, in Oct 2021, the company released its first ESG report, which disclosed the company's efforts in environmental protection, employee protection and training, responsible marketing, anti-corruption, and supplier management, etc.

 

At the same time, Lufax Holding's responsible development path and sustainability have also made the company's investment value highly recognized. Previously, Lufax Holding has been included in two major ESG-themed indices, namely the FTSE Emerging Markets ESG Low Carbon Select Index and the FTSE Asia (ex-Japan) ESG Low Carbon Select Index. Earlier this year, the company was included in the MSCI China All-Share Index.
`,
      date: '2023-11-14 ',
      uploader: 'Lufax Holding',
      imageUrl: forb, 
    },
    {
      id: 9,
      title: 'Financial results released by Lufax Holding: solid growth in H1, operating revenue up 8.4% YOY  ',
      content: `

On August 5, Lufax Holding (NYSE:LU) released its H1 and Q2 2022 results. The results showed that in the first half of the year, Lufax Holding achieved total revenue of RMB 32.604 billion, an increase of 8.4% year-on-year, and a net profit of RMB 8.226 billion. And in the second quarter, the company's revenue was 15.288 billion yuan, with a net profit of 2.936 billion yuan, indicating the overall trend of steady growth.

 

In the second quarter of the year, the external environment was complex and severe, and the domestic pandemic prevention and control situation was generally good but still difficult. Under the complex environment, Lufax Holding took the initiative to strengthen risk management and control, and further focus on MSE owner services while enhancing operational resilience. In the second quarter of the year, 86.1％ of the company's new loans flowed to MSE owners, a record high ratio, which is also the fourth consecutive quarter that the proportion of new loans flowing to MSE owners reached 80%.

 

The financial report also disclosed that PAPH Deputy GM Ji Guangheng no longer holds the position of Chairman of Lufax Holding, and the BOD has appointed former co-CEO YongSuk CHO to concurrently hold the position of Chairman, with Greg Gibb remaining the co-CEO and former PAPH GM Chen Dongqi as the GM of the company.

 

YongSuk CHO, Chairman and co-CEO of Lufax Holding, said, "Our management team has been in the industry for many years and has service experience in the complete credit cycle. In the future, we will continue to leverage our professionalism to provide high-value services to MSE customers, saving them heartache, time and money. We believe that our strategic initiatives can continue to create value for the real economy and shareholders."

 

Risk prevention and control strengthened, and solid operations achieved in the first half of the year

In the first half of the year, Lufax Holding took the initiative to strengthen risk management and control and improve management effectiveness, and achieved steady and high-quality development momentum. According to the financial report, as at the end of June, the Company's retail loan balance increased by 9.0% year-on-year to RMB 661.4 billion; the cumulative number of borrowers increased by 17.3% year-on-year to nearly 18.2 million; and the Company's total assets of its wealth management platform customers increased by 2.6% year-on-year to RMB 431.9 billion, and the 12-month investor retention rate reached 94.7％.

 

In the face of the complex macro environment, thanks to its 17 years of experience in credit services, Lufax Holding took the initiative to adopt a series of countermeasures such as strengthening credit risk management, expense management, and doing a good job in liquidity arrangements and contingency plans, and promptly adjusted its business strategies and contingency plans to enhance its risk-resistant capability.

 

Sales channel transformation entered into a stable stage, further strengthening the solid foundation for Lufax Holding’s steady development. “DS channel contribution% was 53.6% in Q2, while it was 49% in the same period last year; with the transformation of sales channel, the proportion of “excellent talents” in DS channel increased. While enhancing our sales ability, the increase of DS channel contribution% can also enable the company to quickly adjust the credit risk management policy based on the market conditions in a better manner”, said YongSuk CHO. Lufax Holding can move forward the risk control through operation that’s close to the market, so as to reduce the company’s risk cost while helping SBOs reduce their financial risks and.

 

Besides, Lufax Holding improves the management efficiency to reduce the operating cost continually. In Q2 this year, the company’s operating expense decreased 11% YoY, a decrease of up to 6.3 billion yuan. Thanks to the steady growth of revenue and the effective control of operating expense, the company’s advantage in business resilience was prominent; as of the end of June this year, the company saw total assets of 97.238 billion; Greg Gibb, Co-CEO of Lufax Holding, said, “a resilient balance sheet can help the company to withstand impacts from the external environment while seizing opportunities quickly to grow rapidly when the overall environment improves”.

 

Focus on serving SBOs, and explore value-added services

 

Safeguarding the “capillaries” of the economy and helping SBOs solve difficulties and bail out are always the original aspiration and mission of Lufax Holding. The earnings report showed that Lufax Holding saw new loans of up to 129.5 billion yuan in Q2 this year, wherein, 86.1% of the new loans flowed to SBOs in the quarter.

 

In order to support the high-quality development of SBOs, this year PAPH under Lufax Holding successively launched multiple programs to support SBOs, offered special support to the SBOs in the logistics, information transmission, accommodation & catering industries, enhanced the support through the five measures such as “fee reduction, deferral, waiving, credit line increase, and coverage expansion”, and helped nearly 160K SBOs get 58.2 billion yuan funds accumulatively through the “4+1+1” key industry assistance program in 1H of this year.

 

During the special pandemic period in SH this year, Lufax Holding accumulatively helped 14,400 SBOs to obtain 5.65 billion yuan financing accumulatively in SH, providing practical support for the SBOs’ resumption of work and production. For SH area, Lufax Holding launched a special program for assisting SBOs to resume work and production, and implemented a special support policy for SBOs’ resumption of work and production with a total amount of 400,000 yuan, to boost the economy.

 

While focusing on the SBO financing service, Lufax Holding is exploring to provide diversified and lifecycle value-added services for SBOs.

 

YongSuk CHO expressed that Lufax Holding is focusing on the diversified financial demands of the SBOs who constitute an important part of the middle class, and provides loan, WM, insurance and other integrated finance services for the SBOs. “This strategic transformation is hopeful to extend the life cycle of our customers, deepen customer insights, enhance customers’ loyalty, and reduce customer acquisition and management cost.”

 

Creating value for customers and shareholders is the long-term business philosophy of Lufax Holding. Lufax Holding announced that in order to further reward shareholders, it planned to distribute cash dividend of 34 cents per share for 1H of 2022, the total cash dividend amount is about 32% of the company’s net profit attributable to parent company in 1H of the year (while the dividend payout ratio was 30% in the full year of 2021). The dividend distribution frequency also further increased, in the future Lufax Holding will adjust from a dividend payout every year to a dividend payout every half a year, and the dividend payout ratio is 20%-40% of the profit in the current period.
`,
      date: '2022-08-05  ',
      uploader: 'Lufax Holding',
      imageUrl: logo, 
    },
    {
      id: 10,
      title: `PAPH launched one-stop intelligent financing product "Luzhangfang" `,
      content: `

“PAPH mainly serves small and micro business owners not covered by traditional finance; our original intention to launch Luzhangfang is to create a one-stop financing manager for businessmen, hoping that small and micro business owners no longer have difficulty in financing and can get satisfactory financing services through making application once in a process on the mobile phone." PAPH’s product related person said. 

 

Optimize the process and improve the availability of financing through new ways and by dint of two innovations

 

Luzhangfang makes two major innovations in terms of the process; one is to let customers apply for loans first, and they can choose the financing service plan based on the financing credit line and cost calculated after the initial assessment, which is more intuitive and can help customers avoid blind selection. Second, through the application of technology and one process, customers can apply for multiple financing services, which is more convenient.

 

In the traditional business process of financing for small and micro business owners, customers first choose products and then apply for them. The complexity of SBO financing services causes problems in customer’s selection, objectively forming a threshold for the use of loans, and causing the "difficulty in applying for the first loan" to a certain extent.

 

Small and micro enterprises’ financial service demands have prominent personalized features and there’re various types as well. Financial institutions carried out product innovation with pertinence, introduced more and more abundant financial service schemes; according to PBOC's “Consumer Financial Literacy Survey Analysis Report (2021)”, the consumers still have insufficient knowledge about loans in our country, and nearly half of consumers do not understand basic financial knowledge. PAPH customer research shows that more than 60% of customers have never had experience of applying for business-operation-purpose loan, thinking that loan application is difficult and feeling difficult to choose in the face of complex loan services.

 

If consumers make "blind selection", they are likely to start a tortuous journey, because the traditional financing service has its own application process for each product; customers can only apply for other products if they are dissatisfied with the result of loan application.

 

According to the requirements in the “Notice from the General Office of the Banking and Insurance Regulatory Commission on Further Strengthening Financial Support for the Development of Small and Micro Enterprises in 2022”, financial institutions of banking industry should step up credit product innovation, strengthen the mining and application of credit information of small and micro enterprises, and focus on improving the efficiency of credit loan booking.

 

"The needs of small and micro customers are very simple and clear, and they want financing with appropriate costs and fast booking." The person in charge of PAPH products said, "Luzhangfang was piloted in some areas since Sept. 2021, and as of April 24, it has helped 20,000 customers obtain 0.6 billion yuan of financing." During this period, the cumulative selection rate of customers for Luzhangfang was 96%, which was well received by customers."

 

AI application to improve micro and small enterprises’(MSEs) "sense of access" to financial services

 

"MSE financing product innovation is a long way to go, process optimization alone is not enough, and one-stop accurate service is inseparable from the addition of AI technology and risk control technology." An insider from PAPH who is in charge of product said.

 

It is understood that the AI intelligent loan solution “Xingyun”, rolled out by PAPH last year, has been fully applied to Luzhangfang process, which can even realize zero text input, AI face-to-face service experience throughout the process and significant reduction of the waiting time, with the average time for MSE customer’s loan application process reduced by 44%.

 

In order to achieve “one process and one application to get satisfactory results”, Luzhangfang has applied the "person + enterprise" multi-dimensional risk control system. After customers provide application information to AI CS, if they are dissatisfied with the initially offered amount and fee rate, they can "refuel their credit" by providing additional information on enterprise qualifications, personal insurance policies, personal vehicle, and properties to be collateralized, etc., and then the AI can quickly generate up to four types of financing solutions for customers to choose from and offer a maximum of RMB 10 million credit line.

 

It’s understood that Luzhangfang customers can also choose the combination of financing solutions and then get the rate concessions.

 

In order to be a “sweetheart” for the MSEs during their development, Luzhangfang stepped up the “AI+O2O” services of PAPH characteristics, where one offline consultant provides customers with a full cycle of exclusive services, in order to make the financing easier and worry free.

 

The person in charge of product in PAPH said: “PAPH will gradually switch to the unified entrance of Luzhangfang this year to achieve an iterative development of its own financing services. Compared with the important role played by MSEs in economic and social development, we have only taken a small step, and the financial services for MSEs still need to be further strengthened. Financial service products are the bridge connecting financial institutions and MSEs, and providing better financial support for the high-quality development of MSEs requires continuous strengthening of financial service product innovation.”
`,
      date: '2022-06-01 ',
      uploader: 'PAPH',
      imageUrl: post3, 
    },
    {
      id: 11,
      title: 'Lufax Retail Credit Platform Ping An Puhui Launches AI-Powered Smart Loan Solution  ',
      content: `SHANGHAI--Lufax Holding Ltd ("Lufax" or the "Company") (NYSE: LU), a leading technology-empowered personal financial services platform in China, today announced that its retail credit facilitation platform subsidiary, Ping An Puhui ("Puhui"), has launched a smart loan solution powered by artificial intelligence (AI). Named “Xingyun”, it leverages AI to simplify the loan application process, reducing the average time spent in a loan application process for small and micro customers by 44%, to improve their access to financing.


Limited access to financing for small and micro enterprises remains an issue to tackle for China’s FinTech industry. The lending process can be convoluted and drawn out, requiring numerous application forms and a long wait time. Lufax and its wholly owned subsidiary Puhui recognized this area as a bottleneck preventing credible enterprises from accessing capital and sought to lower the barriers and revolutionize the process for small and micro enterprises. With over 15 years of rich experience in financial services for small and micro enterprises, Puhui drew on its extensive track record combined with innovative technology to develop the "Xingyun" smart loan solution.


The "Xingyun" smart loan solution features five innovative highlights that have improved the lending process:


• It utilizes AI imaging technology to create a remote face-to-face experience throughout the lending application and service process. In 2019 Puhui became one of the few financial institutions in the world to use AI imaging technology in online loan assessments when it adopted the technology for loan interviews. The launch of the "Xingyun" solution extends the AI professional service to the entire borrowing process with the help of 14 professional knowledge databases.


• By automating text input, "Xingyun" reduces the complexity of the customer application process. It leverages technologies such as optical character recognition (OCR), automatic speech recognition (ASR) and natural language processing (NLP) to allow borrowers to submit documents and information to the AI assistant via face-to-face communication instead of typing text in the traditional loan lending process.


• "Xingyun" reduces friction in loan facilitation and expedites the credit granting process. It can complete direct data connection while the borrower speaks with the AI assistant, effectively reducing borrower wait times and ensuring a smooth lending and credit granting process.


• "Xingyun" is also able to provide risk control assessment results in real time. During the traditional loan risk control process customers usually need to submit many documents often requiring multiple visits and interactions with loan representatives, creating a long and often redundant application process. With "Xingyun", borrowers only need to speak with the AI assistant, which will collect and transfer the information while a digital risk control assessment is conducted on background, enabling instant approval.


• Last, "Xingyun” provides customers with a safe lending process. Backed by AI technology, it guards against user data leaks, seamlessly connects customer protection measures, and records the financing process through accredited third parties. It also comprehensively protects customers' right to know and right to choose independently, bringing a safe and reliable loan experience to small and micro enterprises.


Since launching internal testing of "Xingyun" last June, Puhui has seen notable improvements in its credit facilitation business. Customers’ borrowing experience has become more streamlined and seamless as the average number of times a loan applicant quits and resumes the application process has decreased by 47%. The average time spent in a loan application process for small and micro customers was reduced by 44%. Moreover, loan-related customer complaints dropped by 50%, achieving effective consumer protection. As the internal testing ended, Puhui’s technology team is working to improve the client coverage of “Xingyun” to extend the solution to its whole customer base.


Puhui sees many applications in the industry for "Xingyun" including not only serving its own small and micro enterprise clients, but also sharing the solution with the industry to jointly improve the efficiency of serving small and micro enterprises and the real economy, to ultimately improve customer experience. Puhui has a fully collaborative business model with roughly 50 financial institutions and 200 other institutions, providing a cornerstone for "Xingyun" to empower the entire micro-credit service ecosystem. As of now, “Xingyun” has been implemented by a number of partner institutions within the Ping An ecosystem and targets a wider application among credit service institutions in the future.


Puhui is the second-largest retail credit facilitation platform among non-traditional financial institutions in China according to research conducted by Oliver Wyman. Through its rich product line, solid service channels that integrate offline-to-online (O2O) capabilities, intelligent risk management, advanced credit technology and effective O2O process experience, Puhui provides small and micro enterprises with a diverse range of credit service solutions.


In the first quarter of 2021, the outstanding balance of loans managed by Lufax through its Puhui platform increased to RMB 582.6 billion (US $88.9 billion) while the cumulative number of borrowers increased to roughly 15.1 million. At the customer level, 75.7% of new loans facilitated were disbursed to small business owners during the first quarter of 2021, up nearly 10 percentage points over the same period in 2020. Puhui is determined to further focus on serving small and micro businesses and the real economy.`,
      date: '2022-10-14 ',
      uploader: ' Ping An Puhui',
      imageUrl: logo, 
    },
    {
      id: 12,
      title: 'Lufax Holding included in the MSCI China All Shares Index  ',
      content: `Beijing, Feb. 10  MSCI announces the results of its latest quarterly index adjustments for 2022, with 5 new targets like Lufax Holding, Gree Electric Appliances, and Zoomwe included into MSCI China All Shares Index, a flagship index of MSCI, while China Mobile is included into MSCI China A Onshore Index. The above adjustments will go effective after the market closes on February 28, 2022.

 

As a leading index compilation company, MSCI provides benchmark index reference for global investors. It is reported that it will help broaden the fund sources and enhance the liquidities of listed companies if their stocks are included into the mainstream indexes of the market.`,
      date: '2022-10-14 ',
      uploader: 'Lufax Holding',
      imageUrl: post2, 
    },
    {
      id: 13,
      title: 'With a net profit of ¥16.7 billion in 2021, Lufax Holding will spend another $500 million on share repurchase  ',
      content: `

Lufax Holding (NYSE: LU) announced its latest 2021Q4 and annual earnings release on Feb. 10. It shows that Lufax Holding continues the momentum of steady growth, with its total operating revenue of 2021 increasing by 18.8% YOY to reach ¥61.835 billion, its annual net profit reaching ¥16.709 billion, an increase of 36.1% YOY, and its adjusted annual net profit increasing by 29.1% YOY. Wherein, its 2021Q4 total revenue increased by 19.2% YOY to reach ¥15.831 billion, and its net profit of the quarter was ¥2.896 billion, a YOY growth of 1.7%.

 

Lufax Holding also disclosed its dividend payout arrangement: A cash dividend of $0.34 per ADS due for April, which is approximately 30% of its full year net profit in 2021. In addition, the abundant cash flow also allows Lufax Holding to step up its buyback efforts again by speding an additional $500 million ADS buyback in the next 12 months on top of $1 billion buyback program last year.

 

“The unique advantages of Lufax Holding's business model enable our smooth transformation and steady growth in a changing policy environment,” says Chairman Ji Guangheng of Lufax Holding. Lufax Holding will focus on the two aspects of deepening business reform and continuously returning shareholders in 2022, strike a balance between business “increment” and “quality improvement” to achieve sustainable business development in the future.

 

Backed with its unique business model combining online with offline, Lufax Holding used technologies actively in its retail credit business in 2021 to reduce the combined borrowing cost proactively, made greater efforts to support small and micro enterprises, and optimized the effective services to small and micro enterprises. In 2021Q4, about 80% of new loans flew to small and micro enterprises, rising by 5% in terms of such coverage% during the same period of 2020.

 

Retail credit business scale grew steadily in overall. As of Dec. 31 of 2021, the cumulative borrowers increased by 16.4% on YOY basis, reaching approximately 16.8 million people; the loan balance under management reached ¥661 billion, a YOY growth of 21.3%; and the new loans in the single quarter of Q4 was ¥151.6 billion, a YOY growth of 14.3%.

 

At the same time, Lufax Holding kept up its effort to reduce the financing cost actively, pressing down the combined interest rate by 3% YOY based on 2021 loan ANR (AVG Net Receivables). It is said that in order to realize a more sustainable risk sharing model, Lufax Holding took the initiative to increase the proportion of self-guarantees to optimize the business model and revenue structure, consequently the proportion of new loans with risks borne by Lufax Holding reached 20.8% in the quarterly, compared with only 10.0% in the same period of 2020.

 

Wealth management (WM) business maintained a steady growth after the clean-up of online lending ahead of schedule. By Dec. 31 of 2021, customer asset scale already reached ¥432.7 billion, registered users of WM platform grew by 11.7%, reaching 51.6 million people, and active investors increased to 15.5 million people.

 

Lufax Holding probes deep into mass affluent customers for its WM business. According to its financial report, the asset quality of the platform's customers has significantly improved, and the proportion of customers with an investment of more than ¥300,000 has further increased. It is worth mentioning that thanks to its effort to focus more on high yield products and HNW customers for WM business of Lufax Holding, the APR of existing products and services increased by nearly 20 basis points quarter-on-quarter compared with 2021Q3.

 

“We made several business adjustments in 2021 to ensure our long-term growth and the sustainability of our profitability,” says Co-CEO Greg Gibb of Lufax Holding, “Going forward, we will continue to closely monitor our loan sales, optimize our channel portfolio, improve our asset quality, and promote the productivity of our direct sales team.  We have made excellent achievements in the execution of the business transformation plan, and will strive to further develop our business to capture potential opportunities in a rapidly changing environment.”
`,
      date: '2023-10-4 ',
      uploader: 'Lufax Holding',
      imageUrl: post4, 
    },
    {
      id: 14,
      title: 'Lufax Partners with MIT Technology Review for Report on Fintech Applications and Trends ',
      content: `Lufax Holding Ltd ("Lufax" or the "Company") (NYSE: LU), a leading technology-empowered personal financial services platform in China, has partnered with world-renowned technology publication MIT Technology Review to jointly release a comprehensive report on technology applications and trends in the fintech industry.

The report reviews how core technologies have transformed the fintech industry over the past five years, including artificial intelligence (AI), cloud computing, data-driven technologies, and blockchain. The report also forecasts future industry trends and future applications of these four core technologies in the financial industry.

A vibrant fintech industry full of market opportunities

According to the report, the global fintech industry has been a red-hot sector in terms of investment and financing over the past five years. CB Insights data shows that fintech funding and deal activity, in terms of both deal size and number, was on a rapid upward trend from 2016 to 2018, reaching a peak in 2018. By region, mature markets such as the U.S., Asia, and Europe showed a gradual slowdown in financing activities, while the pace of financing activities only increased in emerging markets such as South America, Africa, and Oceania. The U.S. and China are the two most prominent players in the global fintech industry. Since 2017, 15 China-based fintech companies have gone public via an IPO or succeeded in an M&A deal valued at USD$1 billion or more, including Lufax, which listed on the New York Stock Exchange in 2020. Among all sub-sectors of the fintech industry, payment, insurance technology, and wealth management are the most active, with payment attracting the most interest from fintech investors. Credit facilitation is also an active sub-sector that has maintained strong interest from investors.

AI, cloud computing, blockchain and data-driven technologies driving industry trends

As fundamental technologies in the fintech industry, AI, cloud computing, data-driven technologies, and blockchain are leading application trends in the industry. These technologies will continue to be the driving force for the evolution of the industry as they continue to develop and cross-integrate.

The application of AI in the financial industry is relatively mature. AI is leading the next wave of applications in three aspects: digitization and automation of back-end financial systemic services, online personalization of front-end financial products, and intelligence and flexibility of financial services across the product lifecycle. Currently AI technologies, such as machine learning, computer vision, natural language processing and knowledge graph, have already been widely adopted to great effect. Newly developed AI technologies, such as self-supervised learning, automatic factor construction, small data and confidential computing are also seeing exploratory applications in the fintech industry. AI technologies can also accelerate the flow rate of financial information and financial data when combined with digital information construction, digital purchase channels, digital payment platforms, and digital network ecosystems.

As an essential part of the "new infrastructure," cloud computing has become a cornerstone technology of the fintech business. Having been used in the financial industry for a long time, cloud computing is driving three industry trends: cloud-driven business, supporting and combining AI and big data technology, and the principle of security first. Cloud computing is gradually gaining popularity among businesses in the financial industry because it is more efficient and can lower business processing costs. Meanwhile, as cloud computing is becoming increasingly the norm, ensuring data security is becoming the primary factor businesses need to address.

Data-driven technologies, including data collection, computing and transmission, are important technologies to enhance security and synergies in the financial industry. The application of data-driven technologies has seen three main trends: the security of data collection and transmission, the synergy of data processing and utilization, and the circulation and sharing of data analysis and results. From regulatory compliance of data collection to transmission security, cryptography-based data encryption and results sharing, financial institutions and technology companies are using data protection methods to ensure safety of the entire data cycle and evaluate and securely implement data exchange among multiple parties.

The application of blockchain technology in the financial industry is also leading three trends: interoperable blockchain protocols, hybrid collaborative innovation, and decentralized finance (DeFi). Future trends in blockchain technology include the further application of DeFi platforms, cross-chain data retrieval, cross-chain asset exchange, secure multi-party computation, zero-knowledge proof, and blockchain-based trusted execution environments.

In future these four fundamental technologies will be cross-integrated and applied to create innovative tools for the fintech industry. Increasing market and product competition will also help to accelerate technology innovation in digital financial services. Financial products, business models and business operations will continue to shift and develop larger digital capacity, digital asset circulation, and a broader sharing of benefits. Technological innovation has become the driving force for the development of the fintech industry, and R&D investment and technology cooperation will be the cornerstone of corporate competitiveness.

"The use of technology in the industry in China has just started, and the current fintech market only accounts for 5%-6% in China's banking and financial market. There is tremendous potential for growth," said Greg Gibb, co-chief executive officer of Lufax Holding. "In the next five years, there is a chance to jump to the era of intelligence substituting manpower and achieve a leapfrog development for the fintech sector."

Jinliang Mao, chief technology officer of Lufax Holding, believes that the ultimate goal of the development of science and technology must be to reduce service costs in the financial industry, and to provide more intelligent solutions through personalized applications such as intelligent investment analysis, intelligent advisory, intelligent marketing, offering convenience to customers.

Yushan Chen, co-publisher of MIT Technology Review China said "taking a look at the performance of investment, financing and exit activities in the past three to five years, we can see that on the one hand, the government has implemented regulations and standards to prevent and limit data abuse and market monopoly, while on the other hand the government has increased sandbox pilots to promote the implementation of fintech innovations. Providing increasingly smart and efficient front and back-end financial services will always be a need for companies, while delivering security and compliance will be the top priority of fintech companies at this and in the next stage of industry development. Relevant technologies will achieve mass implementation and market roll-out."

The report foresees that the fintech industry will open up more opportunities and contribute to global economic growth. In the next three to five years, the development of the fintech sector will move in a safer, more intelligent and more inclusive direction. The four fundamental technologies, namely AI, cloud computing, data-driven technologies and blockchain, are empowering the financial industry and creating a future that provides more secure, reliable, intelligent, personalized, inclusive and equitable financial services solutions. `,
      date: '2024-01-02 ',
      uploader: 'Lufax Holding',
      imageUrl: post4, 
    },
    {
      id: 15,
      title: 'Lufax Holding released the Q3 financial report ',
      content: `SHANGHAI, March 24, 2020 – The rapid advancement of smart technologies, such as artificial intelligence (AI), big data analytics, cloud computing, and blockchain, compounded with the changing demographics in the existing and potential customer base of wealth management services, makes a compelling case for both wealth managers and regulators to embrace the increasingly available and progressively sophisticated financial technology (FinTech) solutions, according to a new report commissioned by Lufax and authored by Boston Consulting Group (BCG). The report, titled Global Digital Wealth Management Report 2019-2020: Unlock New Future with Smart Transformation, is being released today.


Smart Technologies Can Help Unleash up to 50% Profit Margin Expansion


Whereas 2018 saw the growth rate of the global wealth management market falling to a record low in 50 years, the advent of AI is here just in time to arrest the downward momentum. Instead of fighting for diminishing return in a saturated, zero-sum game, wealth managers will do well to avail themselves of AI and other smart technologies to help render the business of serving the mass affluent a fresh and scalable source of growth. The report forecasts a 25-50% increase in assets under management (AUM), a 15-30% growth in revenue, and a 25-50% expansion in profit margin in the coming decade, thanks to the contribution of this rising customer subsegment. According to the report, while the mass affluent customer base currently accounts for 17% of the total AUM, it represents an outsized 27% of all revenue and shows extraordinary promise. The report argues that the democratizing power of smart technologies, such as AI, will help make financial services more inclusive and affordable, allowing mass affluent, and in time, mass market customers to be treated with the services previously only enjoyed by high-net-worth and ultra high-net-worth individuals.


Partnership and Collaboration Becomes the New Norm


Sedate financial institutions and FinTech companies are increasingly recognizing the relative strengths of one another, as well as the ample opportunities for cross-pollination. Traditional wealth managers possess the institutional competence of risk management and financial expertise, they often find themselves hampered by the way they are set up when it comes to innovation and digital transformation; FinTech companies face the reverse problem where their technological prowess does not translate automatically into financial strength and regulatory certifications. This yin-and-yang-esque symmetry makes collaboration a mutually beneficial proposition, wherein the hitherto incumbents and disrupters transform into one another's facilitators and enablers. "FinTech still only accounts for 5-6% of the entire financial market, and is poised for sizable growth from unmet needs," said Greg Gibb, Lufax chief executive officer. "Financial institutions as well as FinTech companies will benefit from striving to become less siloed and seeking closer co-operation."


Smart Technologies Allow Regulators to Play a More Active Role


Regulators have traditionally been behind the curve when it comes to innovations in the finance sector. However, the report argues that smart technologies have so swiftly matured in a plethora of applications that it is no longer tenable not to embrace them. Regulatory technology (RegTech) solutions have emerged to allow for regulation tracking and risk monitoring, giving more transparency to compliance and KYC, and more safeguards for anti-money laundering and against operational issues; fully digitized processes keep better records and leave less room for errors. Regulators are advised to stay current to the development of FinTech, and assume an active role in their application. One way of doing it, suggests the report, is to create a regulatory sandbox to foster, curate, and test out innovation. The report also calls for the promulgation of a robust set of regulations for the digital wealth management sector that both empowers wealth managers to seek innovation and steers such development toward healthy and sustainable growth.


Tech-Enabled Leapfrogging in the Making


The relatively short institutional memory of wealth managers in many parts of Asia, combined with the comparatively lacking sophistication of the customers, makes intelligent wealth management services a very attractive and valuable solution. The report suggests that smart technologies like AI can facilitate better service personalization, improve investor education, and assist in risk management. Just as the low penetration of credit cards allowed mobile payment to take off in China, the report anticipates that digital wealth management in many parts of Asia will bypass the stage of widespread human advisory services and leapfrog to inclusive, AI-enabled advisory services that extend coverage to the mass affluent and even the mass market.


Smart Technologies Give Wealth Managers the Chance to Design a Better Customer Journey


The report asserts that smart technologies can help accelerate product innovation and deliver more nuanced services that better address the needs and preferences of customers. The customer base of wealth management is becoming ever more tech-savvy. Millennials and digital natives are accustomed to the convenience and personalized services afforded by mobile apps, and have come to expect the same from wealth managers. The report urges wealth managers to rethink their customer engagement models, commit to incorporating data analytics, and design anew a holistic yet individualized customer journey. "The advent of smart technologies has provided incumbents and FinTechs an opportunity to come together," said Yan Tan, a Shanghai-based BCG partner and coauthor of the report. "Though collaboration, not only will they be able to tap a larger customer base, but also transform customer services from one that is reactive to one that is proactive, cultivate more seamless interactions, and deliver a more positive and gratifying experience to the benefit of everyone involved."


Tech-Enabled Healthier Investments and Better Risk Management through Investor Education


Whereas customers in Asia are generally more savvy than those in the West when it comes to mobile phones, they are often not as financially sophisticated as their western counterparts. Investor education is therefore not only necessary for compliance, but also imperative in helping customers better understand risks and be informed of the health of their investments. The key to individualized investor education is through understanding them better and addressing their sources of stress. Many investors in Asia lack a proper understanding of the risk-return tradeoff due to the reliance on the implicit guarantee. Deterred by abstract wealth management, finance, and risk concepts, as well as the tediousness of related topics when they already face immense "middle class anxiety", most non-professional investors lack a basic financial knowledge and understanding of investment products. Simply leaving to the salesforce to compete for investors' interest and attention, disentangle the incomprehension of jargons, and address the difficulty in correctly understanding risks and benefits is far from enough. Smart technologies, the report explains, can help democratize wealth management through data-driven investor education, and alleviate some of the pressure by helping investors transition from a return-based investment strategy to one that is goal-based, while nudging them to extend investment horizons, so they are less perturbed by short-term volatilities.


The Challenges and Opportunities Ahead


As smart technologies become more ubiquitous, the report cautions wealth managers to honor consent and acquire authorization when collecting or sharing customer data, build a better defense against data and credential theft using technologies such as cloud computing and blockchain, and improve their overall regulatory posture. The report also discusses problems such as how to regulate robo-advisors, how to minimize algorithmic bias and avoid AI black box, as well as how to combat tech-generated fraud in the age of deepfakes. A lot of the success FinTech achieved in Asia was thanks to the unique combination of first world technology and emerging market growth. Despite the challenges ahead, the report foresees that this proven combination will open up more opportunities and deliver more dividends.`,
      date: '2022-11-14 ',
      uploader: 'Lufax Holding',
      imageUrl: logo, 
    },
    {
      id: 16,
      title: `Lufax, BCG Report: Collaborative Smart Transformation to Help Break the Zero-Sum Game in Wealth Management `,
      content: `SHANGHAI, March 24, 2020 – The rapid advancement of smart technologies, such as artificial intelligence (AI), big data analytics, cloud computing, and blockchain, compounded with the changing demographics in the existing and potential customer base of wealth management services, makes a compelling case for both wealth managers and regulators to embrace the increasingly available and progressively sophisticated financial technology (FinTech) solutions, according to a new report commissioned by Lufax and authored by Boston Consulting Group (BCG). The report, titled Global Digital Wealth Management Report 2019-2020: Unlock New Future with Smart Transformation, is being released today.


Smart Technologies Can Help Unleash up to 50% Profit Margin Expansion


Whereas 2018 saw the growth rate of the global wealth management market falling to a record low in 50 years, the advent of AI is here just in time to arrest the downward momentum. Instead of fighting for diminishing return in a saturated, zero-sum game, wealth managers will do well to avail themselves of AI and other smart technologies to help render the business of serving the mass affluent a fresh and scalable source of growth. The report forecasts a 25-50% increase in assets under management (AUM), a 15-30% growth in revenue, and a 25-50% expansion in profit margin in the coming decade, thanks to the contribution of this rising customer subsegment. According to the report, while the mass affluent customer base currently accounts for 17% of the total AUM, it represents an outsized 27% of all revenue and shows extraordinary promise. The report argues that the democratizing power of smart technologies, such as AI, will help make financial services more inclusive and affordable, allowing mass affluent, and in time, mass market customers to be treated with the services previously only enjoyed by high-net-worth and ultra high-net-worth individuals.


Partnership and Collaboration Becomes the New Norm


Sedate financial institutions and FinTech companies are increasingly recognizing the relative strengths of one another, as well as the ample opportunities for cross-pollination. Traditional wealth managers possess the institutional competence of risk management and financial expertise, they often find themselves hampered by the way they are set up when it comes to innovation and digital transformation; FinTech companies face the reverse problem where their technological prowess does not translate automatically into financial strength and regulatory certifications. This yin-and-yang-esque symmetry makes collaboration a mutually beneficial proposition, wherein the hitherto incumbents and disrupters transform into one another's facilitators and enablers. "FinTech still only accounts for 5-6% of the entire financial market, and is poised for sizable growth from unmet needs," said Greg Gibb, Lufax chief executive officer. "Financial institutions as well as FinTech companies will benefit from striving to become less siloed and seeking closer co-operation."


Smart Technologies Allow Regulators to Play a More Active Role


Regulators have traditionally been behind the curve when it comes to innovations in the finance sector. However, the report argues that smart technologies have so swiftly matured in a plethora of applications that it is no longer tenable not to embrace them. Regulatory technology (RegTech) solutions have emerged to allow for regulation tracking and risk monitoring, giving more transparency to compliance and KYC, and more safeguards for anti-money laundering and against operational issues; fully digitized processes keep better records and leave less room for errors. Regulators are advised to stay current to the development of FinTech, and assume an active role in their application. One way of doing it, suggests the report, is to create a regulatory sandbox to foster, curate, and test out innovation. The report also calls for the promulgation of a robust set of regulations for the digital wealth management sector that both empowers wealth managers to seek innovation and steers such development toward healthy and sustainable growth.


Tech-Enabled Leapfrogging in the Making


The relatively short institutional memory of wealth managers in many parts of Asia, combined with the comparatively lacking sophistication of the customers, makes intelligent wealth management services a very attractive and valuable solution. The report suggests that smart technologies like AI can facilitate better service personalization, improve investor education, and assist in risk management. Just as the low penetration of credit cards allowed mobile payment to take off in China, the report anticipates that digital wealth management in many parts of Asia will bypass the stage of widespread human advisory services and leapfrog to inclusive, AI-enabled advisory services that extend coverage to the mass affluent and even the mass market.


Smart Technologies Give Wealth Managers the Chance to Design a Better Customer Journey


The report asserts that smart technologies can help accelerate product innovation and deliver more nuanced services that better address the needs and preferences of customers. The customer base of wealth management is becoming ever more tech-savvy. Millennials and digital natives are accustomed to the convenience and personalized services afforded by mobile apps, and have come to expect the same from wealth managers. The report urges wealth managers to rethink their customer engagement models, commit to incorporating data analytics, and design anew a holistic yet individualized customer journey. "The advent of smart technologies has provided incumbents and FinTechs an opportunity to come together," said Yan Tan, a Shanghai-based BCG partner and coauthor of the report. "Though collaboration, not only will they be able to tap a larger customer base, but also transform customer services from one that is reactive to one that is proactive, cultivate more seamless interactions, and deliver a more positive and gratifying experience to the benefit of everyone involved."


Tech-Enabled Healthier Investments and Better Risk Management through Investor Education


Whereas customers in Asia are generally more savvy than those in the West when it comes to mobile phones, they are often not as financially sophisticated as their western counterparts. Investor education is therefore not only necessary for compliance, but also imperative in helping customers better understand risks and be informed of the health of their investments. The key to individualized investor education is through understanding them better and addressing their sources of stress. Many investors in Asia lack a proper understanding of the risk-return tradeoff due to the reliance on the implicit guarantee. Deterred by abstract wealth management, finance, and risk concepts, as well as the tediousness of related topics when they already face immense "middle class anxiety", most non-professional investors lack a basic financial knowledge and understanding of investment products. Simply leaving to the salesforce to compete for investors' interest and attention, disentangle the incomprehension of jargons, and address the difficulty in correctly understanding risks and benefits is far from enough. Smart technologies, the report explains, can help democratize wealth management through data-driven investor education, and alleviate some of the pressure by helping investors transition from a return-based investment strategy to one that is goal-based, while nudging them to extend investment horizons, so they are less perturbed by short-term volatilities.


The Challenges and Opportunities Ahead


As smart technologies become more ubiquitous, the report cautions wealth managers to honor consent and acquire authorization when collecting or sharing customer data, build a better defense against data and credential theft using technologies such as cloud computing and blockchain, and improve their overall regulatory posture. The report also discusses problems such as how to regulate robo-advisors, how to minimize algorithmic bias and avoid AI black box, as well as how to combat tech-generated fraud in the age of deepfakes. A lot of the success FinTech achieved in Asia was thanks to the unique combination of first world technology and emerging market growth. Despite the challenges ahead, the report foresees that this proven combination will open up more opportunities and deliver more dividends.`,
      date: '2020-11-14 ',
      uploader: 'Mao Ming',
      imageUrl: post3, 
    },
    {
      id: 17,
      title: `“LU HK” mobile app brings a new paradigm to online wealth management, with no entry barriers and no limits`,
      content: `

Hong Kong, 10 August 2020 － Lu International (Hong Kong) Limited (“LU Hong Kong”), a subsidiary of Lufax Holding (“Lufax”), has launched its LU HK mobile application, offering 24-hours-a-day, seven-days-a-week integrated wealth management services to Hong Kong customers.


Lufax is a leading fintech platform with nearly a decade of experience in online wealth management services. With the COVID-19 pandemic increasing demand for online investment and wealth management services, Lufax is rolling out its services in Hong Kong. LU Hong Kong, in collaboration with leading global asset managers, offers a selection of Hong Kong dollar-based mutual fund products on the app, covering all major markets and asset classes. The app also provides a page to read the latest market news and investment opinions.

The LU HK app also features strong fintech expertise, offering efficient and contactless wealth management services, ideal for the increasing number of working-from-home investors. Customers can open their accounts online within three minutes with clear instructions from online customer services driven by artificial intelligence (AI). LU HK uses a variety of financial technologies to make the entire investment process personalized and secure, including investment preference questionnaires to accurately identify customers’ risk thresholds and big data analysis for making fund recommendations. Regulated by the Securities and Futures Commission of Hong Kong (SFC), LU Hong Kong holds Type 1, Type 4 and Type 9 licenses (CE no. BIN669).

The LU Wallet service in the app elevates money market funds from a normal investment vehicle into a smart wealth management service for customers’ cash balances. LU Wallet allows for same-day completion of transactions (T+0), and flexible redemption and purchase. Customers can subscribe for funds at a minimum of HK$1, transfer their cash balance to money market funds automatically, withdraw and redeem anytime without penalties, and directly purchase a variety of other investment products. LU Wallet is a wealth creation service with no entry barriers and no limits.

To mark the app launch, transaction fees for all products on LU HK are waived for a limited time, and there is a range of attractive welcome rewards for Hong Kong customers.

Mr. Cai Hua, CEO of LU Hong Kong, said, “Riding on our competitive strengths in fintech, we are delighted to offer an integrated online wealth management service with greater convenience and flexibility for the Hong Kong customers. Apart from our AI frontline customer services, we also apply different technologies to our middle and back offices to optimize operation efficiency. Our technological advantages enable us to offer highly professional services at extremely competitive prices to our valued customers.”

Due to the pandemic, global demand for online financial services has increased significantly. This has accelerated digital transformation in the wealth management industry. As one of the world’s key financial hubs, total assets under management for private banking and private wealth management business in Hong Kong reached HK$7.62 trillion at the end of 2018, according to the SFC.

“Hong Kong is at the forefront of international financial markets, in terms of the maturity of its regulatory framework, the depth of its trading markets and the diversity of its financial products. Our fintech expertise, together with the strengths of Hong Kong’s financial market, enable us to provide transparent, efficient, professional and diversified online wealth management services to our customers in Hong Kong,” Mr. Cai said.


`,
      date: '2024-03-11 ',
      uploader: 'Lufax Holding',
      imageUrl: post4, 
    },
    {
      id: 18,
      title: `Lufax, BCG Report: Collaborative Smart Transformation to Help Break the Zero-Sum Game in Wealth Management `,
      content: `

Hong Kong, 10 August 2020 － Lu International (Hong Kong) Limited (“LU Hong Kong”), a subsidiary of Lufax Holding (“Lufax”), has launched its LU HK mobile application, offering 24-hours-a-day, seven-days-a-week integrated wealth management services to Hong Kong customers.


Lufax is a leading fintech platform with nearly a decade of experience in online wealth management services. With the COVID-19 pandemic increasing demand for online investment and wealth management services, Lufax is rolling out its services in Hong Kong. LU Hong Kong, in collaboration with leading global asset managers, offers a selection of Hong Kong dollar-based mutual fund products on the app, covering all major markets and asset classes. The app also provides a page to read the latest market news and investment opinions.

The LU HK app also features strong fintech expertise, offering efficient and contactless wealth management services, ideal for the increasing number of working-from-home investors. Customers can open their accounts online within three minutes with clear instructions from online customer services driven by artificial intelligence (AI). LU HK uses a variety of financial technologies to make the entire investment process personalized and secure, including investment preference questionnaires to accurately identify customers’ risk thresholds and big data analysis for making fund recommendations. Regulated by the Securities and Futures Commission of Hong Kong (SFC), LU Hong Kong holds Type 1, Type 4 and Type 9 licenses (CE no. BIN669).

The LU Wallet service in the app elevates money market funds from a normal investment vehicle into a smart wealth management service for customers’ cash balances. LU Wallet allows for same-day completion of transactions (T+0), and flexible redemption and purchase. Customers can subscribe for funds at a minimum of HK$1, transfer their cash balance to money market funds automatically, withdraw and redeem anytime without penalties, and directly purchase a variety of other investment products. LU Wallet is a wealth creation service with no entry barriers and no limits.

To mark the app launch, transaction fees for all products on LU HK are waived for a limited time, and there is a range of attractive welcome rewards for Hong Kong customers.

Mr. Cai Hua, CEO of LU Hong Kong, said, “Riding on our competitive strengths in fintech, we are delighted to offer an integrated online wealth management service with greater convenience and flexibility for the Hong Kong customers. Apart from our AI frontline customer services, we also apply different technologies to our middle and back offices to optimize operation efficiency. Our technological advantages enable us to offer highly professional services at extremely competitive prices to our valued customers.”

Due to the pandemic, global demand for online financial services has increased significantly. This has accelerated digital transformation in the wealth management industry. As one of the world’s key financial hubs, total assets under management for private banking and private wealth management business in Hong Kong reached HK$7.62 trillion at the end of 2018, according to the SFC.

“Hong Kong is at the forefront of international financial markets, in terms of the maturity of its regulatory framework, the depth of its trading markets and the diversity of its financial products. Our fintech expertise, together with the strengths of Hong Kong’s financial market, enable us to provide transparent, efficient, professional and diversified online wealth management services to our customers in Hong Kong,” Mr. Cai said.


`,
      date: '2023-11-14 ',
      uploader: 'Lufax Holding',
      imageUrl: logo, 
    },
    {
      id: 19,
      title: `Lufax Holding Ltd Announces Pricing of Initial Public Offering`,
      content: `SHANGHAI, China, October 30, 2020 -- Lufax Holding Ltd (“Lufax” or the “Company”), a leading technology-empowered personal financial services platform in China, today announced the pricing of its initial public offering of 175,000,000 American Depositary Shares (“ADSs”), each two ADSs representing one ordinary share of the Company, at a price to the public of US$13.50 per ADS for a total offering size of US$2.3625 billion, assuming the underwriters do not exercise their option to purchase additional ADSs. The ADSs are expected to begin trading on the New York Stock Exchange on October 30, 2020, under the symbol “LU.” The closing of the offering is expected to occur on November 3, 2020, subject to the satisfaction of customary closing conditions.


The Company has granted the underwriters an option, exercisable within 30 days from the date of the final prospectus, to purchase up to an aggregate of 26,250,000 additional ADSs at US$13.50 per ADS.


Goldman Sachs (Asia) L.L.C., BofA Securities, Inc., UBS Securities LLC, HSBC Securities (USA) Inc. and China PA Securities (Hong Kong) Company Limited are acting as active joint bookrunners and representatives of the underwriters for the offering. Morgan Stanley & Co. LLC, CLSA Limited and Jefferies LLC are acting as joint bookrunners for the offering. J.P. Morgan Securities LLC, BOCI Asia Limited, Haitong International Securities Company Limited, Stifel, Nicolaus & Company, Incorporated, China Renaissance Securities (Hong Kong) Limited and KeyBanc Capital Markets Inc. are acting as co-managers for this offering.


The Company's registration statement relating to the offering has been filed with, and declared effective by, the United States Securities and Exchange Commission. This press release does not constitute an offer to sell or the solicitation of an offer to buy the securities described herein, nor shall there be any sale of these securities in any state or jurisdiction in which such offer, solicitation, or sale would be unlawful prior to registration or qualification under the securities laws of any such state or jurisdiction. The offering is being made only by means of a prospectus forming a part of the effective registration statement. Copies of the final prospectus relating to the offering may be obtained, when available, by contacting the following underwriters:


Goldman Sachs & Co. LLC

Prospectus Department

200 West Street

New York, NY 10282, United States

Tel: +1 (866) 471-2526

Email: prospectus-ny@ny.email.gs.com


BofA Securities, Inc.

Prospectus Department

NC1-004-03-43

200 North College Street, 3rd floor

Charlotte NC 28255-0001

Tel: +1 800 294 1322

Email: dg.prospectus_requests@bofa.com


UBS Securities LLC

Prospectus Department

1285 Avenue of the Americas, New York

New York 10019, United States

Tel: +1 888 827 7275

Email: ol-prospectus-request@ubs.com


HSBC Securities (USA) Inc.

Prospectus Department

452 Fifth Avenue, T8, New York

NY, 10018, United States

Tel: +1 877 429 7459

Email: ny.equity.syndicate@us.hsbc.com


China PA Securities (Hong Kong) Company Limited

GCM Department

Units 3601, 07 & 11-13, 36/F, The Center, 99 Queen’s Road

Central, Hong Kong

Tel: +852 3762 9778

Email: pub_prospectus@pingan.com


Morgan Stanley & Co. LLC

Prospectus Department

Room 214, 180 Varick Street

New York, NY 10014, United States

Tel: +1 866 718 1649


CLSA Limited

18/F, One Pacific Place, 88 Queensway

Hong Kong

Tel: +852 2600 8888


Jefferies LLC

Equity Syndicate Prospectus Department

520 Madison Avenue, 2nd Floor

New York, NY 10022, United States

Tel: +1 877 821 7388

Email: prospectus_department@jefferies.com


Forward-looking Statements

This announcement contains forward-looking statements. These statements are made under the “safe harbor” provisions of the United States Private Securities Litigation Reform Act of 1995. These forward-looking statements can be identified by terminology such as “will,” “expects,” “anticipates,” “future,” “intends,” “plans,” “believes,” “estimates” and similar statements. Statements that are not historical facts, including statements about Lufax’s beliefs and expectations, are forward-looking statements. Forward-looking statements involve inherent risks and uncertainties. Further information regarding these and other risks is included in Lufax’s filings with the SEC. All information provided in this press release is as of the date of this press release, and Lufax does not undertake any obligation to update any forward-looking statement, except as required under applicable law.


About Lufax Holding Ltd

Lufax Holding Ltd is a leading technology-empowered personal financial services platform in China. Lufax Holding Ltd primarily utilizes its customer-centric product offerings and offline-to-online channels to provide retail credit facilitation services to small business owners and salaried workers in China as well as tailor-made wealth management solutions to China’s rapidly growing middle class. The Company has implemented a unique, capital-light, hub-and-spoke business model combining purpose-built technology applications, extensive data, and financial services expertise to effectively facilitate the right products to the right customers.`,
      date: '2023-11-14 ',
      uploader: 'Lufax Holding',
      imageUrl: logo, 
    },
    {
      id: 20,
      title: `LU International Joins Hands with KASIKORNBANK to Develop Thailand's Online Wealth Management Platform, Expanding Footprint in the Region `,
      content: `The partnership signals Lu International’s plan to capitalise on growth opportunities for financial services in some of the world’s up and coming economies, throughout and beyond Southeast Asia.


Singapore, 18 August 2020 – Lu International (Singapore) Financial Asset Exchange (PTE) Ltd. (‘Lu International’), a subsidiary of China’s leading retail fintech enterprise Lufax Holding, and KASIKORNBANK, one of Thailand’s largest banks, have recently announced a strategic partnership to meet rising demands for digital financial services in Thailand. The partnership allows KASIKORNBANK to leverage Lu International’s technology and expertise to establish a comprehensive online wealth management platform for retail investors in Thailand. This platform will be jointly operated and managed by both parties.


Lufax Holding leverages its innovative ‘cloud-exporting’ model to empower the banking customer with its technological and operational advantages. The jointly built wealth management platform will be deployed on a fintech empowering platform developed by Lufax Holding. In recent years, Lufax Holding has adopted big data, artificial intelligence, cloud computing and other emerging technologies to successfully develop a number of fintech solutions, some of which have already been rolled out – such as the investor suitability management system, ‘Know Your Intention (KYI)’ model that integrates the company’s rich experiences in financial operations, and strong research and development capabilities.


“This strategic cooperation with KASIKORNBANK is a strong and mutually-beneficial alliance. Lufax Holding, together with Lu International, has the technological capabilities and wealth of experience in doing business globally to help address a gap in the Thailand market.” Weighed in Greg Gibb, CEO of Lufax Holding, “Together with KASIKORNBANK who has a long history of local operations and has built a strong customer base in this market, we believe this partnership will accelerate the pace of digital transformation within the financial institution industry in Thailand and across the Southeast Asian region.”


Lu International was set up in Singapore in 2017 as Lufax Holding’s first international arm. Since then, it has progressively extended its operations and market reach, which now spans several markets in Asia, with over 380,000 registered customers.


Kit Wong, CEO of Lu International, commented on the move, “Being based in Singapore, a gateway to Southeast Asia, as well as being one of Singapore’s first wealth management platforms providing end-to-end online account opening services and investment operations, we are well positioned to be the fintech enabler of choice for traditional financial institutions in the region that want to provide convenient, efficient, intelligent and personalised digital financial services to investors.” In the coming months, Wong added, “We will continue to grow our capabilities in Southeast Asia, extending our footprint in the region to meet the needs of our customers and support the business growth of our partners.”


LU Global is the online wealth management mobile platform operated by Lu International that offers customers with round-the-clock access to a wide range of high-quality investments. Utilising the technology developed by Lufax Holding, LU Global has instated a robust risk management system that adopts strict Know Your Product (KYP) and Know Your Customer (KYC) compliance procedures, alongside an Anti-Money Laundering (AML) and anti-fraud system.


Kattiya Indaravijaya, CEO of KASIKORNBANK, said, “The world is about to enter another wave of digital disruption as big players like commercial banks morph into fintech organisations. It is imperative that we quickly adjust ourselves and strengthen our capabilities to seek new business opportunities. With the necessary technical support coupled with fintech innovation, KASIKORNBANK has successfully achieved digital transformation through the partnership with Lu International, as well as the help of an open banking services model. We are ready to create a digital service platform to allow Thai individuals and businesses to go beyond borders to capitalise on massive opportunities in the ‘Era of Asia’.”


Established in 1945, KASIKORNBANK is the fourth-largest commercial bank in Thailand. It has an extensive customer base in the country with 17.3 million customers, including 12.7 million online users. KASIKORNBANK has been actively promoting the digitisation process in recent years and is committed to providing a full range of financial services through digital platforms to its customers.


`,
      date: '2020-01-01 ',
      uploader: 'Lufax Holding',
      imageUrl: post2, 
    },
    {
      id: 21,
      title: `Lufax, BCG Report: Collaborative Smart Transformation to Help Break the Zero-Sum Game in Wealth Management `,
      content: `The partnership signals Lu International’s plan to capitalise on growth opportunities for financial services in some of the world’s up and coming economies, throughout and beyond Southeast Asia.


Singapore, 18 August 2020 – Lu International (Singapore) Financial Asset Exchange (PTE) Ltd. (‘Lu International’), a subsidiary of China’s leading retail fintech enterprise Lufax Holding, and KASIKORNBANK, one of Thailand’s largest banks, have recently announced a strategic partnership to meet rising demands for digital financial services in Thailand. The partnership allows KASIKORNBANK to leverage Lu International’s technology and expertise to establish a comprehensive online wealth management platform for retail investors in Thailand. This platform will be jointly operated and managed by both parties.


Lufax Holding leverages its innovative ‘cloud-exporting’ model to empower the banking customer with its technological and operational advantages. The jointly built wealth management platform will be deployed on a fintech empowering platform developed by Lufax Holding. In recent years, Lufax Holding has adopted big data, artificial intelligence, cloud computing and other emerging technologies to successfully develop a number of fintech solutions, some of which have already been rolled out – such as the investor suitability management system, ‘Know Your Intention (KYI)’ model that integrates the company’s rich experiences in financial operations, and strong research and development capabilities.


“This strategic cooperation with KASIKORNBANK is a strong and mutually-beneficial alliance. Lufax Holding, together with Lu International, has the technological capabilities and wealth of experience in doing business globally to help address a gap in the Thailand market.” Weighed in Greg Gibb, CEO of Lufax Holding, “Together with KASIKORNBANK who has a long history of local operations and has built a strong customer base in this market, we believe this partnership will accelerate the pace of digital transformation within the financial institution industry in Thailand and across the Southeast Asian region.”


Lu International was set up in Singapore in 2017 as Lufax Holding’s first international arm. Since then, it has progressively extended its operations and market reach, which now spans several markets in Asia, with over 380,000 registered customers.


Kit Wong, CEO of Lu International, commented on the move, “Being based in Singapore, a gateway to Southeast Asia, as well as being one of Singapore’s first wealth management platforms providing end-to-end online account opening services and investment operations, we are well positioned to be the fintech enabler of choice for traditional financial institutions in the region that want to provide convenient, efficient, intelligent and personalised digital financial services to investors.” In the coming months, Wong added, “We will continue to grow our capabilities in Southeast Asia, extending our footprint in the region to meet the needs of our customers and support the business growth of our partners.”


LU Global is the online wealth management mobile platform operated by Lu International that offers customers with round-the-clock access to a wide range of high-quality investments. Utilising the technology developed by Lufax Holding, LU Global has instated a robust risk management system that adopts strict Know Your Product (KYP) and Know Your Customer (KYC) compliance procedures, alongside an Anti-Money Laundering (AML) and anti-fraud system.


Kattiya Indaravijaya, CEO of KASIKORNBANK, said, “The world is about to enter another wave of digital disruption as big players like commercial banks morph into fintech organisations. It is imperative that we quickly adjust ourselves and strengthen our capabilities to seek new business opportunities. With the necessary technical support coupled with fintech innovation, KASIKORNBANK has successfully achieved digital transformation through the partnership with Lu International, as well as the help of an open banking services model. We are ready to create a digital service platform to allow Thai individuals and businesses to go beyond borders to capitalise on massive opportunities in the ‘Era of Asia’.”


Established in 1945, KASIKORNBANK is the fourth-largest commercial bank in Thailand. It has an extensive customer base in the country with 17.3 million customers, including 12.7 million online users. KASIKORNBANK has been actively promoting the digitisation process in recent years and is committed to providing a full range of financial services through digital platforms to its customers.


`,
      date: '2023-04-04 ',
      uploader: 'Lufax Holding',
      imageUrl: logo, 
    },
    {
      id: 22,
      title: `LU International Joins Hands with KASIKORNBANK to Develop Thailand's Online Wealth Management Platform, Expanding Footprint in the Region`,
      content: `The partnership signals Lu International’s plan to capitalise on growth opportunities for financial services in some of the world’s up and coming economies, throughout and beyond Southeast Asia.


Singapore, 18 August 2020 – Lu International (Singapore) Financial Asset Exchange (PTE) Ltd. (‘Lu International’), a subsidiary of China’s leading retail fintech enterprise Lufax Holding, and KASIKORNBANK, one of Thailand’s largest banks, have recently announced a strategic partnership to meet rising demands for digital financial services in Thailand. The partnership allows KASIKORNBANK to leverage Lu International’s technology and expertise to establish a comprehensive online wealth management platform for retail investors in Thailand. This platform will be jointly operated and managed by both parties.


Lufax Holding leverages its innovative ‘cloud-exporting’ model to empower the banking customer with its technological and operational advantages. The jointly built wealth management platform will be deployed on a fintech empowering platform developed by Lufax Holding. In recent years, Lufax Holding has adopted big data, artificial intelligence, cloud computing and other emerging technologies to successfully develop a number of fintech solutions, some of which have already been rolled out – such as the investor suitability management system, ‘Know Your Intention (KYI)’ model that integrates the company’s rich experiences in financial operations, and strong research and development capabilities.


“This strategic cooperation with KASIKORNBANK is a strong and mutually-beneficial alliance. Lufax Holding, together with Lu International, has the technological capabilities and wealth of experience in doing business globally to help address a gap in the Thailand market.” Weighed in Greg Gibb, CEO of Lufax Holding, “Together with KASIKORNBANK who has a long history of local operations and has built a strong customer base in this market, we believe this partnership will accelerate the pace of digital transformation within the financial institution industry in Thailand and across the Southeast Asian region.”


Lu International was set up in Singapore in 2017 as Lufax Holding’s first international arm. Since then, it has progressively extended its operations and market reach, which now spans several markets in Asia, with over 380,000 registered customers.


Kit Wong, CEO of Lu International, commented on the move, “Being based in Singapore, a gateway to Southeast Asia, as well as being one of Singapore’s first wealth management platforms providing end-to-end online account opening services and investment operations, we are well positioned to be the fintech enabler of choice for traditional financial institutions in the region that want to provide convenient, efficient, intelligent and personalised digital financial services to investors.” In the coming months, Wong added, “We will continue to grow our capabilities in Southeast Asia, extending our footprint in the region to meet the needs of our customers and support the business growth of our partners.”


LU Global is the online wealth management mobile platform operated by Lu International that offers customers with round-the-clock access to a wide range of high-quality investments. Utilising the technology developed by Lufax Holding, LU Global has instated a robust risk management system that adopts strict Know Your Product (KYP) and Know Your Customer (KYC) compliance procedures, alongside an Anti-Money Laundering (AML) and anti-fraud system.


Kattiya Indaravijaya, CEO of KASIKORNBANK, said, “The world is about to enter another wave of digital disruption as big players like commercial banks morph into fintech organisations. It is imperative that we quickly adjust ourselves and strengthen our capabilities to seek new business opportunities. With the necessary technical support coupled with fintech innovation, KASIKORNBANK has successfully achieved digital transformation through the partnership with Lu International, as well as the help of an open banking services model. We are ready to create a digital service platform to allow Thai individuals and businesses to go beyond borders to capitalise on massive opportunities in the ‘Era of Asia’.”


Established in 1945, KASIKORNBANK is the fourth-largest commercial bank in Thailand. It has an extensive customer base in the country with 17.3 million customers, including 12.7 million online users. KASIKORNBANK has been actively promoting the digitisation process in recent years and is committed to providing a full range of financial services through digital platforms to its customers.


`,
      date: '2023-11-14 ',
      uploader: 'Lufax Holding',
      imageUrl: logo, 
    },
   
  ];
  