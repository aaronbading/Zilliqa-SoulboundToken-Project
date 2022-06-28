import logo from '../../public/img/ZSBT-logos.jpeg';

import Link from '../components/Link';
import AdaptiveContent from '../components/AdaptiveContent';
import { AdaptiveContentProps } from '../types/types';

const content: AdaptiveContentProps[] = [
  {
    title: ' What is an SBT?',
    subtitle: 'On-Chain Identity',
    content:
      'The Zilliqa Soul-Bound Token is intended to be a proof-of-concept utility token that allows users to own their on-chain identity. At its core, it is non-transferable token that users mint for themselves. This has been implemented on the Zilliqa blockchain using the native smart-contract language Scilla.',
  },
  {
    title: 'Purpose of SBT?',
    subtitle: 'incentivizing utility to users',
    content:
      'The token’s purpose is to bring utility by incentivizing users to interact with the underlying platform to grow their SBT Profile. An example of user incentivization is earning educational achievements for completing a course or solving a problem. Rewards for participation could theoretically be in the form of NFTs, digital assets or just a simple “kudos” on the Profile Page. This system establishes a sense of reputation and trust in profiles which is essential for thriving online communities.',
  },
  {
    title: 'Our vision?',
    subtitle: 'Constant innovation',
    content:
      'The concept of an SBT is rather loosely defined and quite novel. Thus, the vision of project reaches far beyond what has currently implemented. Nevertheless, this project serves as one of many starting points for powerful idea that will enable another layer of incentivization on top of decentralized digital ownership',
  },
];

export default function Landing() {
  return (
    <div className="text-gray-700 dark:text-white body-font ">
      <div className="hero container mx-auto 2xl:px-28 sm:px-8 py-32">
        <div className="flex justify-between items-center">
          <div className="hero-left">
            <h2 className="hero-subtitle">DEFI Social Utility</h2>
            <h1 className="hero-title">
              SBT On-Chain <br /> Non-transferable ID
            </h1>
            <Link className="cta-primary" to="profiles">
              View Profiles
            </Link>
            <Link className="cta-secondary" to="profiles">
              Learn More
            </Link>
          </div>
          <div className="hero-right">
            <div className="card">
              <a href={`/profiles/0x3227edf3d8ef577170f339689a128ce229dd8df2`}>
                <div className="card-image">
                  <img src="data:image/jpeg;base64,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"></img>
                </div>
                <div className="px-5 py-2">
                  <div className="mb-4">
                    <p className="card-name mt-4">@NFT_Creator</p>
                    <div className="flex mt-2 mb-2">
                      <img
                        src="https://i.postimg.cc/zBDtJMJk/image-1.png"
                        width="30"
                        alt=""
                      />
                      <p className="text-md text-gray-200 flex items-center">
                        {String(
                          '0x3227edf3d8ef577170f339689a128ce229dd8df2',
                        ).substring(0, 6) +
                          '...' +
                          String(
                            '0x3227edf3d8ef577170f339689a128ce229dd8df2',
                          ).substring(38)}
                      </p>
                    </div>
                    <div className="flex">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 59 83"
                        fill="none"
                        className="w-4 ml-1 mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M46.5611 39.6676L14.6193 55.4641L46.5611 70.6903V82.9687L0.0255025 60.7895L0 48.7033L32.3818 32.7017L0.0255025 17.2833V5.00488L46.5611 27.1841V39.6676Z"
                          fill="url(#paint0_linear_0_1)"
                        />
                        <path
                          d="M0.0249023 5.00491L12.3235 0L58.8591 22.1728L46.5606 27.1842L0.0249023 5.00491Z"
                          fill="url(#paint1_linear_0_1)"
                        />
                        <path
                          d="M46.5612 70.6905V46.1466L58.8597 40.4624V77.9576L46.5612 82.9689V70.6905Z"
                          fill="url(#paint2_linear_0_1)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_0_1"
                            x1="46.593"
                            y1="83.4429"
                            x2="7.44516"
                            y2="17.8244"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#05707E" />
                            <stop offset="0.52" stop-color="#2B9297" />
                            <stop offset="1" stop-color="#4DBBBA" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_0_1"
                            x1="2.3265"
                            y1="3.81937"
                            x2="57.7694"
                            y2="23.5946"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#05707E" />
                            <stop offset="0.52" stop-color="#2B9297" />
                            <stop offset="1" stop-color="#4DBBBA" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_0_1"
                            x1="52.5606"
                            y1="37.7901"
                            x2="52.8505"
                            y2="82.8535"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#05707E" />
                            <stop offset="0.52" stop-color="#2B9297" />
                            <stop offset="1" stop-color="#4DBBBA" />
                          </linearGradient>
                        </defs>
                      </svg>

                      <p className="text-lg text-white flex items-center">
                        0.18
                      </p>
                      <a
                        href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20profile%20on%20Zilsbt%3A%0A%0Ahttp%3A//localhost%3A3000/profiles/0x3227edf3d8ef577170f339689a128ce229dd8df2`}
                        className="ml-auto mr-2 w-5 pl-4 mr-6"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_58_309)">
                            <path
                              d="M16.5002 3.74998C16.5 2.87013 16.8093 2.01826 17.3739 1.3434C17.9384 0.668542 18.7223 0.213678 19.5883 0.0583884C20.4543 -0.0969011 21.3474 0.0572728 22.1112 0.493936C22.8751 0.9306 23.4611 1.62195 23.7667 2.44702C24.0723 3.27209 24.078 4.17835 23.7829 5.00724C23.4879 5.83613 22.9107 6.53487 22.1525 6.9812C21.3942 7.42753 20.5032 7.59304 19.6352 7.44876C18.7673 7.30448 17.9777 6.85961 17.4047 6.19198L7.32765 10.872C7.55932 11.6061 7.55932 12.3938 7.32765 13.128L17.4047 17.808C18.0104 17.1035 18.8561 16.6489 19.7779 16.5325C20.6997 16.416 21.632 16.6458 22.3939 17.1775C23.1559 17.7092 23.6934 18.5048 23.9022 19.4102C24.1109 20.3155 23.9762 21.2662 23.524 22.0778C23.0719 22.8895 22.3345 23.5044 21.4548 23.8034C20.5751 24.1024 19.6157 24.0642 18.7626 23.6961C17.9095 23.328 17.2233 22.6564 16.8372 21.8113C16.4511 20.9662 16.3925 20.0079 16.6727 19.122L6.59565 14.442C6.09681 15.0233 5.43188 15.438 4.69032 15.6301C3.94876 15.8222 3.16615 15.7827 2.44776 15.5167C1.72937 15.2507 1.10967 14.7711 0.672015 14.1424C0.234362 13.5137 -0.000244141 12.766 -0.000244141 12C-0.000244141 11.2339 0.234362 10.4863 0.672015 9.85755C1.10967 9.22884 1.72937 8.74923 2.44776 8.48326C3.16615 8.21729 3.94876 8.17772 4.69032 8.36985C5.43188 8.56199 6.09681 8.97663 6.59565 9.55798L16.6727 4.87798C16.5579 4.51298 16.4998 4.13258 16.5002 3.74998Z"
                              fill="#E6E6E6"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_58_309">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* social proof */}
      <div className="social-proof">
        <ul className="flex justify-between items-center container mx-auto 2xl:px-24 sm:px-6">
          <li>
            <svg
              width="333"
              height="117"
              viewBox="0 0 333 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M124.569 61.3464H139.852C139.852 62.9064 139.774 64.3494 139.656 65.6364C139.539 66.9234 139.265 68.0934 138.875 69.1854C138.327 70.7454 137.585 72.1104 136.647 73.3194C135.709 74.4894 134.575 75.5034 133.324 76.2834C132.074 77.0634 130.666 77.6874 129.142 78.0774C127.618 78.5064 126.015 78.7014 124.334 78.7014C122.028 78.7014 119.918 78.3114 118.002 77.5704C116.126 76.8294 114.485 75.7374 113.117 74.4114C111.749 73.0074 110.693 71.3694 109.951 69.4584C109.208 67.5084 108.817 65.4024 108.817 63.0624C108.817 60.7614 109.169 58.6554 109.911 56.7444C110.654 54.7944 111.749 53.1564 113.077 51.7914C114.485 50.4264 116.126 49.3734 118.081 48.6324C120.035 47.8914 122.185 47.5014 124.569 47.5014C127.657 47.5014 130.354 48.1644 132.699 49.4904C135.044 50.8164 136.881 52.8834 138.249 55.6914L130.94 58.6944C130.276 57.0564 129.377 55.9254 128.282 55.2234C127.227 54.5214 125.976 54.1704 124.608 54.1704C123.474 54.1704 122.419 54.4044 121.481 54.8334C120.543 55.2624 119.722 55.8474 119.058 56.6664C118.393 57.4464 117.885 58.4214 117.494 59.5134C117.142 60.6444 116.947 61.8924 116.947 63.2574C116.947 64.5054 117.103 65.6754 117.416 66.7284C117.768 67.7814 118.237 68.7174 118.901 69.4974C119.566 70.2774 120.387 70.9014 121.325 71.3304C122.302 71.7594 123.435 71.9544 124.686 71.9544C125.429 71.9544 126.171 71.8764 126.875 71.7204C127.579 71.5254 128.204 71.2524 128.751 70.9014C129.337 70.5114 129.807 70.0044 130.158 69.4194C130.51 68.8344 130.784 68.0934 130.901 67.2354H124.569V61.3464ZM177.844 54.5214V78.7014H169.636V54.5214H162.991V47.5014H184.489V54.5214H177.844ZM213.022 58.1874C211.224 56.0034 209.035 54.9114 206.416 54.9114C205.244 54.9114 204.188 55.1064 203.172 55.5354C202.195 55.9644 201.374 56.5494 200.631 57.2514C199.928 57.9534 199.342 58.8114 198.951 59.8254C198.56 60.8394 198.364 61.8924 198.364 63.0624C198.364 64.2324 198.56 65.3244 198.951 66.3384C199.381 67.3524 199.928 68.2104 200.631 68.9514C201.374 69.6924 202.234 70.2774 203.211 70.6674C204.188 71.0964 205.244 71.2914 206.377 71.2914C208.84 71.2914 211.067 70.2384 213.022 68.1324V77.2584L212.24 77.5314C211.067 77.9604 209.973 78.2334 208.918 78.4284C207.901 78.6234 206.885 78.7404 205.869 78.7404C203.836 78.7404 201.843 78.3504 199.967 77.6094C198.091 76.8294 196.449 75.7374 195.003 74.3334C193.596 72.9294 192.423 71.2524 191.563 69.3414C190.703 67.3914 190.273 65.2854 190.273 63.0234C190.273 60.7614 190.703 58.6554 191.524 56.7834C192.384 54.8724 193.518 53.2344 194.964 51.8694C196.41 50.4654 198.091 49.4124 199.967 48.6324C201.843 47.8524 203.836 47.4624 205.908 47.4624C207.081 47.4624 208.253 47.5794 209.387 47.8524C210.559 48.0864 211.771 48.4764 213.022 48.9834V58.1874ZM229.125 63.1014C229.125 64.2714 229.36 65.3634 229.79 66.3774C230.22 67.3914 230.845 68.2494 231.588 68.9904C232.331 69.7314 233.23 70.3164 234.246 70.7064C235.262 71.0964 236.356 71.2914 237.49 71.2914C238.624 71.2914 239.679 71.0964 240.695 70.7064C241.711 70.2774 242.61 69.6924 243.392 68.9904C244.174 68.2494 244.799 67.3914 245.229 66.3774C245.659 65.3634 245.894 64.3104 245.894 63.1014C245.894 61.8924 245.659 60.8394 245.229 59.8254C244.799 58.8114 244.174 57.9534 243.392 57.2124C242.649 56.4714 241.75 55.9254 240.695 55.5354C239.679 55.1064 238.624 54.9114 237.49 54.9114C236.356 54.9114 235.301 55.1064 234.246 55.5354C233.23 55.9254 232.37 56.5104 231.588 57.2124C230.845 57.9534 230.22 58.8114 229.79 59.8254C229.36 60.8394 229.125 61.9314 229.125 63.1014ZM221.074 63.1014C221.074 60.9174 221.465 58.8504 222.285 56.9784C223.106 55.0674 224.24 53.3904 225.686 51.9864C227.132 50.5824 228.852 49.4514 230.845 48.6714C232.878 47.8524 235.106 47.4624 237.49 47.4624C239.874 47.4624 242.102 47.8524 244.096 48.6714C246.128 49.4514 247.848 50.5434 249.294 51.9864C250.779 53.3904 251.913 55.0674 252.734 56.9784C253.555 58.8504 253.945 60.9174 253.945 63.1014C253.945 65.2854 253.555 67.3524 252.734 69.2634C251.913 71.1354 250.779 72.8124 249.294 74.2164C247.848 75.6204 246.128 76.7514 244.096 77.5704C242.063 78.3504 239.874 78.7404 237.49 78.7404C235.067 78.7404 232.839 78.3504 230.845 77.5704C228.852 76.7514 227.132 75.6594 225.686 74.2164C224.24 72.8124 223.106 71.1354 222.285 69.2634C221.465 67.3524 221.074 65.3244 221.074 63.1014ZM270.088 47.5014V78.7014H261.88V47.5014H270.088ZM155.174 47.5014V78.7014H146.966V47.5014H155.174ZM278.687 78.7014V47.5014H286.505L301.748 66.5724V47.5014H309.957V78.7014H302.061L286.895 59.6304V78.7014H278.687Z"
                fill="#E6E6E6"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M77.3652 49.31C80.0841 53.1125 81.56 57.7301 81.5213 62.3863C81.5213 66.9649 80.0454 71.5435 77.3652 75.2684L83.0359 79.5752C86.6479 74.6085 88.6288 68.5557 88.6288 62.4249C88.6679 55.9451 86.5314 49.5818 82.6087 44.46L79.3567 47.385L77.3652 49.31Z"
                fill="#15EBB7"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M88.0851 83.3901L69.0148 68.9172C70.3742 67.1321 71.1508 64.9595 71.2673 62.7088C71.3451 60.4585 70.7627 58.2468 69.5585 56.3455L78.6859 48.1196L88.2407 39.1953C88.8621 38.6131 88.9008 37.6043 88.2794 36.9835L86.959 35.6642C80.1619 28.7964 70.9957 24.7998 61.3632 24.4894L61.4023 19.2512C61.441 18.902 61.4023 18.5528 61.3245 18.2036C61.208 17.8544 61.0524 17.5439 60.8195 17.2723C60.5865 17.0007 60.3145 16.8067 59.965 16.6515C59.6543 16.4963 59.3049 16.4187 58.955 16.4187C58.6056 16.4187 58.2562 16.4963 57.9454 16.6515C57.6347 16.8067 57.324 17.0007 57.091 17.2723C56.8577 17.5439 56.6634 17.8544 56.586 18.1648C56.4695 18.514 56.4304 18.8632 56.5082 19.2124L56.4695 24.6058C54.1779 24.8386 51.8862 25.2654 49.6724 25.9251L49.7111 19.2124C49.7502 18.8632 49.7111 18.514 49.6337 18.1648C49.5172 17.8156 49.3616 17.5051 49.1287 17.2335C48.8957 16.9619 48.6237 16.7679 48.2743 16.6127C47.9635 16.4575 47.6137 16.3799 47.2642 16.3799C46.9148 16.3799 46.565 16.4575 46.2546 16.6127C45.9439 16.7679 45.6332 16.9619 45.3998 17.2335C45.1669 17.5051 44.9726 17.8156 44.8952 18.126C44.7783 18.4752 44.7397 18.8244 44.8174 19.1736L44.701 27.7487C36.8552 31.2408 30.4077 37.3327 26.4849 44.9766C22.562 52.6206 21.3191 61.3898 23.0281 69.8095C24.7371 78.2296 29.2814 85.8346 35.8842 91.3445C42.4871 96.854 50.7989 99.9584 59.3823 100.114L87.1529 100.23C88.0077 100.23 88.7066 99.5314 88.7066 98.6777V84.6704C88.7066 84.1662 88.4736 83.7005 88.0851 83.3901ZM59.9263 93.362C53.0905 93.3234 46.4485 91.0341 41.0499 86.8821C35.6511 82.6916 31.7671 76.8326 30.0193 70.2362C28.2715 63.6401 28.7765 56.617 31.3787 50.3313C34.0198 44.0453 38.6418 38.7683 44.5845 35.3538L44.5454 45.5585C44.5067 45.908 44.5454 46.257 44.6232 46.6061C44.7397 46.9555 44.8952 47.2659 45.1282 47.5374C45.3611 47.8092 45.6332 48.003 45.9826 48.1583C46.2933 48.3135 46.6428 48.3911 46.9926 48.3911C47.342 48.3911 47.6915 48.3135 48.0022 48.1583C48.3129 48.003 48.6237 47.8092 48.8566 47.5374C49.0896 47.2659 49.2839 46.9555 49.3616 46.6451C49.4781 46.296 49.5172 45.9466 49.4394 45.5975L49.4781 33.0645C52.8962 31.8229 56.5082 31.2408 60.1593 31.2408C66.8787 31.2408 73.4038 33.4525 78.7246 37.4879C79.1132 37.7983 79.1519 38.3415 78.8024 38.6907L64.2763 51.9997C62.9556 51.4565 61.5187 51.146 60.0815 51.146C58.4891 51.146 56.8967 51.4565 55.4208 52.116C53.9449 52.7758 52.6629 53.7458 51.6142 54.9485C50.5659 56.1513 49.7889 57.5869 49.3229 59.1005C48.8566 60.6523 48.7402 62.2431 48.9731 63.8339C49.2065 65.4251 49.7502 66.9383 50.6046 68.2963C51.459 69.6543 52.6242 70.7794 53.9449 71.6721C55.3044 72.5254 56.819 73.1077 58.4114 73.3405C60.0037 73.5734 61.6352 73.4568 63.1498 72.9911L81.7156 87.0763C81.9098 87.2316 82.0263 87.464 82.0263 87.6968L81.9872 92.6635C81.9872 93.0905 81.6378 93.4396 81.2106 93.4396L59.9263 93.362ZM64.4706 62.3207C64.4706 63.1744 64.1985 64.0281 63.7326 64.7652C63.2276 65.5027 62.5674 66.0456 61.7517 66.395C60.936 66.7441 60.0428 66.8217 59.2271 66.6279C58.4114 66.4337 57.5956 66.0456 56.9741 65.4251C56.3531 64.8042 55.9254 64.0281 55.7703 63.1744C55.6151 62.3207 55.6925 61.4284 56.0423 60.6523C56.3918 59.8376 56.9354 59.1781 57.6734 58.6734C58.4114 58.2078 59.2658 57.9363 60.1202 57.9363C61.2854 57.9363 62.4119 58.402 63.2276 59.2557C64.0043 60.0314 64.4706 61.118 64.4706 62.3207Z"
                fill="#E6E6E6"
              />
            </svg>
          </li>
          <li>
            <svg
              width="295"
              height="83"
              viewBox="0 0 295 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M115.016 57.9441H133.563V63.4424H105.427L124.401 30.1191H108.532V24.6079H133.99L115.016 57.9441Z"
                fill="url(#paint0_linear_37_237)"
              />
              <path
                d="M146.187 24.6079V63.4424H140.359V24.6079H146.187Z"
                fill="url(#paint1_linear_37_237)"
              />
              <path
                d="M161.303 24.6079V57.9313H172.671V63.4424H155.457V24.6079H161.303Z"
                fill="url(#paint2_linear_37_237)"
              />
              <path
                d="M184.045 24.6079V57.9313H195.406V63.4424H178.192V24.6079H184.045Z"
                fill="url(#paint3_linear_37_237)"
              />
              <path
                d="M206.755 24.6079V63.4424H200.928V24.6079H206.755Z"
                fill="url(#paint4_linear_37_237)"
              />
              <path
                d="M255.376 64.1603H248.044L245.009 61.0394C241.802 63.1147 238.06 64.1997 234.247 64.1603C229.21 64.2008 224.34 62.3444 220.597 58.9567C218.494 57.1383 216.822 54.872 215.7 52.3224C214.578 49.7729 214.036 47.0041 214.112 44.2175C214.046 41.4796 214.559 38.7586 215.616 36.2344C216.673 33.7103 218.251 31.4403 220.246 29.5745C223.875 26.0471 228.688 24.0149 233.734 23.8784C238.781 23.742 243.695 25.5114 247.508 28.8375C252.183 32.8278 254.521 38.0356 254.521 44.461C254.521 49.4937 252.679 53.9625 248.994 57.8673L255.376 64.1603ZM239.334 48.0625L244.939 53.6762C246.161 52.402 247.118 50.8956 247.754 49.245C248.39 47.5945 248.692 45.833 248.643 44.0637C248.686 42.134 248.343 40.2153 247.633 38.4218C246.924 36.6283 245.862 34.9968 244.511 33.6245C243.186 32.2444 241.59 31.1559 239.824 30.4279C238.058 29.6998 236.161 29.3481 234.253 29.395C232.352 29.3379 230.461 29.6852 228.703 30.4141C226.945 31.143 225.36 32.237 224.052 33.6245C221.366 36.4228 220.023 39.9688 220.023 44.2624C220.023 48.462 221.408 51.8926 224.18 54.5542C225.476 55.8617 227.016 56.8993 228.712 57.6075C230.407 58.3157 232.225 58.6805 234.062 58.6811C236.452 58.715 238.809 58.116 240.896 56.9445L231.811 48.1074L239.334 48.0625Z"
                fill="url(#paint5_linear_37_237)"
              />
              <path
                d="M284.538 54.0224H268.012L263.708 63.4427H257.428L276.555 22.1602L295 63.4427H288.624L284.538 54.0224ZM282.159 48.5112L276.421 35.3037L270.416 48.5112H282.159Z"
                fill="url(#paint6_linear_37_237)"
              />
              <path
                d="M46.5611 39.6676L14.6193 55.4641L46.5611 70.6903V82.9687L0.0255025 60.7895L0 48.7033L32.3818 32.7017L0.0255025 17.2833V5.00488L46.5611 27.1841V39.6676Z"
                fill="url(#paint7_linear_37_237)"
              />
              <path
                d="M0.0248976 5.00491L12.3235 0L58.8591 22.1728L46.5605 27.1842L0.0248976 5.00491Z"
                fill="url(#paint8_linear_37_237)"
              />
              <path
                d="M46.5611 39.6676L58.8597 34.6563V22.1729L46.5611 27.1842V39.6676Z"
                fill="url(#paint9_linear_37_237)"
              />
              <path
                d="M46.5611 70.6905V46.1466L58.8597 40.4624V77.9576L46.5611 82.9689V70.6905Z"
                fill="url(#paint10_linear_37_237)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_37_237"
                  x1="65.1397"
                  y1="42.8717"
                  x2="409.119"
                  y2="50.1282"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_37_237"
                  x1="65.1461"
                  y1="42.3654"
                  x2="409.132"
                  y2="49.6283"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_37_237"
                  x1="65.1526"
                  y1="42.0386"
                  x2="409.138"
                  y2="49.2951"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_37_237"
                  x1="65.1652"
                  y1="41.5515"
                  x2="409.151"
                  y2="48.8144"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_37_237"
                  x1="65.1777"
                  y1="41.0773"
                  x2="409.157"
                  y2="48.3339"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_37_237"
                  x1="65.1907"
                  y1="40.411"
                  x2="409.17"
                  y2="47.6675"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_37_237"
                  x1="65.2289"
                  y1="38.5078"
                  x2="409.214"
                  y2="45.7707"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_37_237"
                  x1="46.593"
                  y1="83.4429"
                  x2="7.44516"
                  y2="17.8244"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_37_237"
                  x1="2.3265"
                  y1="3.81937"
                  x2="57.7694"
                  y2="23.5946"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_37_237"
                  x1="46.5611"
                  y1="30.9202"
                  x2="58.8597"
                  y2="30.9202"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
                <linearGradient
                  id="paint10_linear_37_237"
                  x1="52.5606"
                  y1="37.7901"
                  x2="52.8505"
                  y2="82.8535"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
              </defs>
            </svg>
          </li>
          <li>
            <svg
              width="284"
              height="122"
              viewBox="0 0 284 122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_37_252)">
                <path
                  d="M16.2354 61.95C15.8073 59.4522 15.276 57.0281 14.0509 55.092C12.3831 52.4611 9.46066 50.6727 3.67485 50.6284L3.58628 53.9243C5.63789 53.8651 7.61568 54.0574 9.28353 55.1215C10.7152 56.0232 11.9108 57.5159 12.8258 59.9991C7.79281 58.2845 4.94418 58.8019 2.9221 60.1025C1.87416 60.7825 1.04762 61.684 0.23584 62.6003L2.52359 64.6993C2.65643 64.507 2.80402 64.3298 2.9221 64.1672C5.37222 61.2554 8.22083 61.344 11.2318 62.9552C4.72279 66.1033 3.67485 71.6164 4.01433 75.5923C4.30952 75.6366 7.21717 75.5923 7.21717 75.5923C6.93675 71.7198 9.69679 66.5319 15.4236 64.9653L16.2796 63.2064L16.2354 61.95Z"
                  fill="#8000DB"
                />
                <path
                  d="M59.0975 27.8225C68.7503 14.4168 73.503 7.76566 69.6948 4.54354C67.171 2.42995 63.7614 3.92277 58.256 8.04648C58.0643 12.451 57.0015 18.7179 55.5845 27.0394L59.0975 27.8225Z"
                  fill="#008298"
                />
                <path
                  d="M65.2083 108.213H61.6659C61.5775 113.283 61.7102 118.5 56.3081 120.171C56.4853 120.185 56.6773 120.215 56.8839 120.23C57.4594 120.289 58.0203 120.244 58.5665 120.126C65.2822 118.412 65.105 113.239 65.2083 108.213Z"
                  fill="#580098"
                />
                <path
                  d="M69.0305 108.213L65.2965 99.3594H68.7797L65.8571 90.9937H61.016L63.2744 99.3594H60.588L63.4661 108.213H65.1929H69.0305Z"
                  fill="#98005E"
                />
                <path
                  d="M56.3078 120.171C61.7099 118.5 61.5772 113.312 61.6657 108.213H48.8394C48.7658 115.766 51.4815 119.446 56.3078 120.171Z"
                  fill="#8000DB"
                />
                <path
                  d="M60.5734 99.3591H63.2447L61.0014 91.0227L47.9538 90.9639L44.9282 99.6251L48.2342 99.8762L44.9282 108.212H63.4809L60.5734 99.3591Z"
                  fill="#FF009E"
                />
                <path
                  d="M33.5186 99.6845L30.0647 90.905L25.2236 90.8901L27.6146 99.5071H24.8842L27.836 108.449L33.9614 108.508L29.6958 99.655L33.5186 99.6845Z"
                  fill="#98005E"
                />
                <path
                  d="M24.8551 99.4778H27.5858L25.2093 90.8609L11.9699 90.8018L8.76706 99.7438L12.147 99.9953L8.76706 108.405L27.7923 108.45L24.8551 99.4778Z"
                  fill="#FF009E"
                />
                <path
                  d="M55.0678 0.124257C49.8726 -1.13207 46.8467 7.17447 39.3047 23.4033L55.5845 27.0246C56.9866 18.7032 58.064 12.4363 58.256 8.03174C58.4626 3.33158 57.636 0.774594 55.0678 0.124257Z"
                  fill="#00BEDD"
                />
                <path
                  d="M65.016 82.4501L69.3112 82.7307L64.7358 73.5817H68.4992L65.1047 65.2603H62.1969H59.673L62.7282 73.5817H59.3337L63.4515 82.7307L59.5845 82.4501L63.7023 91.0224L69.5769 91.0373L65.016 82.4501Z"
                  fill="#FF9900"
                />
                <path
                  d="M69.3115 56.6884L66.153 47.835H60.0424L62.6403 56.6884H58.8766L62.1827 65.2908H68.736L64.7067 56.6884H69.3115Z"
                  fill="#008298"
                />
                <path
                  d="M39.3341 23.4189C39.3047 23.4633 39.3047 23.4189 39.3341 23.4189L32.1019 37.8298L36.1019 37.9184L31.305 47.836H66.1082L61.6066 45.9293C60.9275 45.6487 60.5144 45.1018 60.6913 44.7321C60.7061 44.6878 60.7358 44.673 60.7504 44.6435C60.9572 44.3478 61.5769 44.3035 62.197 44.555L62.3887 44.6435L65.5473 45.9885L68.2778 47.1414V29.8778L39.3341 23.4189Z"
                  fill="#FFE001"
                />
                <path
                  d="M56.8394 39.8539C59.0238 39.8539 60.8097 38.0802 60.8097 35.8484C60.8097 33.646 59.0384 31.8428 56.8394 31.8428C54.6549 31.8428 52.8688 33.6165 52.8688 35.8484C52.8688 38.0802 54.6695 39.8539 56.8394 39.8539ZM56.8394 33.8677C57.9316 33.8677 58.8318 34.7694 58.8318 35.8632C58.8318 36.957 57.9316 37.8584 56.8394 37.8584C55.7471 37.8584 54.8467 36.957 54.8467 35.8632C54.8615 34.7694 55.7471 33.8677 56.8394 33.8677Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M56.9721 37.843C58.0643 37.7839 58.8909 36.8379 58.8318 35.7295C58.7728 34.6358 57.828 33.7783 56.7213 33.8672C55.629 33.9263 54.8024 34.8721 54.8615 35.9807C54.9206 37.0744 55.8798 37.9168 56.9721 37.843Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M68.2484 47.8342V47.1247L62.3593 44.5972L62.1676 44.5086C61.5476 44.2572 60.9572 44.3015 60.721 44.5972C60.7061 44.6121 60.6767 44.6564 60.6619 44.6858C60.5144 45.0555 60.913 45.6024 61.5769 45.883L66.0788 47.7896H66.1673L68.2484 47.8342Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M58.906 56.6884H62.64L60.0572 47.835H35.5118L31.7923 56.6884H35.5266L31.9991 65.2611H32.0434V65.2759C32.1318 65.2759 32.2206 65.2759 32.2942 65.2759H59.6438H62.1826L58.906 56.6884Z"
                  fill="#00BEDD"
                />
                <path
                  d="M31.9838 65.2605L16.2648 63.147L11.4679 72.9462H14.656C14.3608 73.3454 14.0213 73.8034 13.7114 74.2766L18.1245 78.4299L23.8513 73.0054L29.4304 78.5627L35.1572 73.1385L40.884 78.5627L46.4632 73.0054L46.6401 73.1828L52.1752 78.415L57.9019 72.9905L60.0864 75.1486L59.4073 73.6114H62.8021L59.7469 65.2753H46.5959H32.0725H32.028"
                  fill="#FFE001"
                />
                <path
                  d="M59.5993 82.4513L63.4664 82.7027L62.6692 80.9732L57.8429 76.1401L52.1458 81.8749L46.419 76.1401L40.7216 81.8898L35.1278 76.2879L29.401 81.7124L23.8661 76.1993L18.1689 81.9341L12.4716 76.2287C12.1026 76.8496 9.8739 80.7369 9.09164 82.2149L13.4457 82.4661L9.57872 90.8022L63.7762 91.0387L59.5993 82.4513Z"
                  fill="#FFE001"
                />
                <path
                  d="M60.0713 75.1196L57.8868 72.9321L52.16 78.3566L46.4333 72.9321L40.8688 78.4895L35.1421 73.0653L29.4301 78.4895L23.851 72.9321L18.1243 78.3566L13.7111 74.2033C13.3126 74.8242 12.8551 75.4596 12.4565 76.1691L18.1538 81.8742L23.851 76.1394L29.3859 81.6525L35.1127 76.2283L40.7065 81.8299L46.4333 76.0951L52.16 81.8299L57.8574 76.0951L62.6837 80.9284L60.0713 75.1196Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M26.05 108.405C25.9615 113.519 26.1091 118.751 20.6923 120.436C21.017 120.48 21.3564 120.525 21.6959 120.54C21.9763 120.554 22.3011 120.54 22.5667 120.48C22.8177 120.421 23.0833 120.347 23.3195 120.288C23.6589 120.185 24.0279 120.081 24.3231 119.963C24.5298 119.874 24.7216 119.786 24.943 119.712C25.0759 119.653 25.194 119.579 25.312 119.52C25.4301 119.461 25.5482 119.387 25.6515 119.327C25.8286 119.224 25.991 119.121 26.1681 119.002C26.2714 118.943 26.36 118.855 26.4633 118.795C26.6699 118.618 26.8913 118.455 27.0833 118.263C27.2751 118.071 27.4668 117.864 27.6588 117.643C27.7179 117.554 27.7918 117.495 27.8506 117.406C27.9393 117.303 27.9984 117.199 28.0574 117.081C28.1901 116.874 28.3082 116.637 28.4264 116.416C28.4854 116.312 28.5297 116.179 28.6035 116.076C28.6181 116.017 28.6626 115.943 28.692 115.884C28.7362 115.795 28.7511 115.692 28.7953 115.603C28.8101 115.558 28.8395 115.514 28.8395 115.455C28.8986 115.263 28.9725 115.071 29.0167 114.849C29.0167 114.805 29.0315 114.76 29.0315 114.746C29.0758 114.612 29.0906 114.494 29.12 114.361C29.12 114.346 29.1348 114.302 29.1348 114.273C29.1497 114.125 29.1939 113.977 29.2233 113.8C29.2381 113.711 29.2381 113.622 29.2675 113.548C29.2823 113.46 29.2823 113.356 29.312 113.268C29.3711 112.824 29.4153 112.41 29.4447 111.937C29.4889 111.376 29.5038 110.844 29.5038 110.297C29.5186 109.691 29.5186 109.114 29.548 108.523L26.05 108.405Z"
                  fill="#580098"
                />
                <path
                  d="M13.1948 108.391C13.1801 109.869 13.2539 111.199 13.4457 112.396C13.5048 112.869 13.5933 113.298 13.6967 113.727C13.7557 114.008 13.8442 114.288 13.9033 114.54C15.0103 118.087 17.3128 119.949 20.6337 120.466C26.0505 118.782 25.9029 113.534 25.9915 108.435H13.1948V108.391Z"
                  fill="#8000DB"
                />
                <path
                  d="M81.1779 39.0703C79.8791 42.3664 75.5693 45.0417 68.1893 45.692V47.1258V47.8352C68.706 47.8204 69.1489 47.7761 69.6359 47.7464C70.2114 47.7021 70.7427 47.6429 71.2743 47.5544C71.7613 47.4952 72.2187 47.4066 72.6615 47.3178C74.6542 46.9189 76.2923 46.298 77.6208 45.5146C77.9013 45.3374 78.1966 45.1748 78.4325 44.9825C78.5655 44.894 78.6688 44.8051 78.8015 44.7017C79.141 44.4208 79.4805 44.0957 79.761 43.8002C79.9528 43.6079 80.1005 43.4011 80.2775 43.1645C80.6467 42.603 80.9417 42.0561 81.104 41.4795C81.3255 40.7109 81.3551 39.8981 81.1779 39.0703Z"
                  fill="#98005E"
                />
                <path
                  d="M69.8282 30.2613C69.3115 30.1284 68.8096 29.9804 68.249 29.877V34.3703V38.8636V45.7216C75.5992 45.0564 79.9091 42.3666 81.2373 39.0999C80.5585 35.7152 76.7654 32.1976 69.8282 30.2613Z"
                  fill="#FF009E"
                />
                <path
                  d="M139.863 45.6042C142.386 47.8211 143.671 50.8807 143.671 54.8271C143.671 58.7587 142.416 61.8182 139.863 64.05C137.339 66.2673 133.841 67.3904 129.383 67.3904H121.206V81.151H113.089V42.2935H129.383C133.841 42.2935 137.324 43.4018 139.863 45.6042ZM135.42 54.8271C135.42 50.7478 132.985 48.708 128.143 48.708H121.206V60.961H128.143C132.985 60.961 135.42 58.9064 135.42 54.8271Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M147.523 43.1805C147.523 40.2689 149.191 38.8203 152.527 38.8203C155.862 38.8203 157.53 40.2689 157.53 43.1805C157.53 46.048 155.862 47.4815 152.527 47.4815C149.191 47.4815 147.523 46.0332 147.523 43.1805ZM156.512 81.1511H148.468V51.7088H156.512V81.1511Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M188.481 53.8812C190.43 55.7139 191.389 58.3743 191.389 61.833V81.1509H183.345V64.1239C183.345 59.7046 181.574 57.4728 178.046 57.4728C176.172 57.4728 174.593 58.138 173.279 59.4386C171.98 60.7689 171.331 62.7936 171.331 65.528V81.1509H163.286V51.7086H170.519L170.814 57.1771C171.759 55.167 173.072 53.6744 174.814 52.6395C176.541 51.6197 178.533 51.1025 180.821 51.1025C183.965 51.132 186.533 52.0483 188.481 53.8812Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M226.65 75.9048L226.177 80.9153C225.159 81.4327 223.89 81.6839 222.355 81.6839C220.628 81.6396 219.152 81.2847 217.912 80.5753C216.672 79.8658 215.846 78.8461 215.418 77.5157C214.517 78.8461 213.204 79.8955 211.491 80.6344C209.765 81.3882 207.964 81.743 206.089 81.743C203.034 81.743 200.643 81.063 198.931 79.6884C197.219 78.314 196.363 76.3482 196.363 73.8059C196.363 71.6481 197.071 69.8743 198.459 68.4851C199.846 67.0956 201.868 66.1053 204.54 65.5732L214.665 63.5189V62.4103C214.665 60.7696 214.193 59.4542 213.233 58.4935C212.274 57.5327 211.019 57.0598 209.425 57.0598C206.208 57.0598 204.127 58.6561 203.197 61.8931L196.319 59.7793C197.027 57.1041 198.518 55.0054 200.776 53.4682C203.034 51.931 206.045 51.1772 209.765 51.1772C213.72 51.1772 216.849 52.1233 219.181 53.9854C221.484 55.8477 222.635 58.5378 222.635 62.0851V73.9538C222.635 75.4465 223.344 76.2002 224.746 76.2002C225.439 76.2151 226.074 76.0968 226.65 75.9048ZM212.82 74.6779C214.06 73.7764 214.68 72.3278 214.68 70.3177V68.4997L208.51 69.7414C207.064 70.0223 206.016 70.3769 205.396 70.8497C204.776 71.3229 204.451 72.0469 204.451 73.0373C204.451 73.9833 204.82 74.7076 205.514 75.2396C206.222 75.7717 207.093 76.0377 208.156 76.0377C210.015 76.0377 211.58 75.5648 212.82 74.6779Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M250.221 79.3329C249.232 80.0866 248.066 80.663 246.649 81.1064C245.262 81.535 243.786 81.7419 242.206 81.7419C235.55 81.7419 232.214 78.7712 232.214 72.8441V57.7092H226.812V51.6935H232.214V44.9093L240.258 42.6626V51.6638H249.675V57.6943H240.258V71.5435C240.258 74.263 241.601 75.6082 244.317 75.6082C246.088 75.6082 247.609 75.0464 248.907 73.9675L250.221 79.3329Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M283.622 75.9048L283.15 80.9153C282.131 81.4327 280.862 81.6839 279.326 81.6839C277.599 81.6396 276.124 81.2847 274.884 80.5753C273.645 79.8658 272.819 78.8461 272.389 77.5157C271.489 78.8461 270.175 79.8955 268.464 80.6344C266.738 81.3882 264.936 81.743 263.061 81.743C260.006 81.743 257.615 81.063 255.903 79.6884C254.191 78.314 253.335 76.3482 253.335 73.8059C253.335 71.6481 254.043 69.8743 255.431 68.4851C256.818 67.0956 258.84 66.1053 261.511 65.5732L271.637 63.5189V62.4103C271.637 60.7696 271.163 59.4542 270.204 58.4935C269.246 57.5327 267.99 57.0598 266.396 57.0598C263.179 57.0598 261.098 58.6561 260.168 61.8931L253.29 59.7793C253.999 57.1041 255.49 55.0054 257.748 53.4682C260.006 51.931 263.017 51.1772 266.738 51.1772C270.692 51.1772 273.822 52.1233 276.153 53.9854C278.454 55.8477 279.607 58.5378 279.607 62.0851V73.9538C279.607 75.4465 280.316 76.2002 281.717 76.2002C282.411 76.2151 283.047 76.0968 283.622 75.9048ZM269.791 74.6779C271.031 73.7764 271.651 72.3278 271.651 70.3177V68.4997L265.482 69.7414C264.035 70.0223 262.987 70.3769 262.368 70.8497C261.748 71.3229 261.423 72.0469 261.423 73.0373C261.423 73.9833 261.792 74.7076 262.486 75.2396C263.194 75.7717 264.065 76.0377 265.127 76.0377C266.987 76.0377 268.552 75.5648 269.791 74.6779Z"
                  fill="#E6E6E6"
                />
              </g>
              <defs>
                <clipPath id="clip0_37_252">
                  <rect
                    width="283.386"
                    height="122"
                    fill="white"
                    transform="translate(0.23584)"
                  />
                </clipPath>
              </defs>
            </svg>
          </li>
        </ul>
      </div>
      {/* featured profiles */}
      <div className=" featured py-16 container 2xl:px-24 sm:px-6 mx-auto">
        <h2 className="text-center mb-8">Our Featured Profiles</h2>
        {/* card grid */}
        <div className="grid w-full md:grid-cols-2 xl:grid-cols-4 justify-items-center gap-y-8">
          <div className="card">
            <a href={`/profiles/0x3227edf3d8ef577170f339689a128ce229dd8df2`}>
              <div className="card-image">
                <img src="data:image/jpeg;base64,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"></img>
              </div>
              <div className="px-5 py-2">
                <div className="mb-4">
                  <p className="card-name mt-4">@NFT_Creator</p>
                  <div className="flex mt-2 mb-2">
                    <img
                      src="https://i.postimg.cc/zBDtJMJk/image-1.png"
                      width="30"
                      alt=""
                    />
                    <p className="text-md text-gray-200 flex items-center">
                      {String(
                        '0x3227edf3d8ef577170f339689a128ce229dd8df2',
                      ).substring(0, 6) +
                        '...' +
                        String(
                          '0x3227edf3d8ef577170f339689a128ce229dd8df2',
                        ).substring(38)}
                    </p>
                  </div>
                  <div className="flex">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 59 83"
                      fill="none"
                      className="w-4 ml-1 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M46.5611 39.6676L14.6193 55.4641L46.5611 70.6903V82.9687L0.0255025 60.7895L0 48.7033L32.3818 32.7017L0.0255025 17.2833V5.00488L46.5611 27.1841V39.6676Z"
                        fill="url(#paint0_linear_0_1)"
                      />
                      <path
                        d="M0.0249023 5.00491L12.3235 0L58.8591 22.1728L46.5606 27.1842L0.0249023 5.00491Z"
                        fill="url(#paint1_linear_0_1)"
                      />
                      <path
                        d="M46.5612 70.6905V46.1466L58.8597 40.4624V77.9576L46.5612 82.9689V70.6905Z"
                        fill="url(#paint2_linear_0_1)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_1"
                          x1="46.593"
                          y1="83.4429"
                          x2="7.44516"
                          y2="17.8244"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_0_1"
                          x1="2.3265"
                          y1="3.81937"
                          x2="57.7694"
                          y2="23.5946"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_0_1"
                          x1="52.5606"
                          y1="37.7901"
                          x2="52.8505"
                          y2="82.8535"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p className="text-lg text-white flex items-center">0.18</p>
                    <a
                      href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20profile%20on%20Zilsbt%3A%0A%0Ahttp%3A//localhost%3A3000/profiles/0x3227edf3d8ef577170f339689a128ce229dd8df2`}
                      className="ml-auto mr-2 w-5 pl-4 mr-6"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_58_309)">
                          <path
                            d="M16.5002 3.74998C16.5 2.87013 16.8093 2.01826 17.3739 1.3434C17.9384 0.668542 18.7223 0.213678 19.5883 0.0583884C20.4543 -0.0969011 21.3474 0.0572728 22.1112 0.493936C22.8751 0.9306 23.4611 1.62195 23.7667 2.44702C24.0723 3.27209 24.078 4.17835 23.7829 5.00724C23.4879 5.83613 22.9107 6.53487 22.1525 6.9812C21.3942 7.42753 20.5032 7.59304 19.6352 7.44876C18.7673 7.30448 17.9777 6.85961 17.4047 6.19198L7.32765 10.872C7.55932 11.6061 7.55932 12.3938 7.32765 13.128L17.4047 17.808C18.0104 17.1035 18.8561 16.6489 19.7779 16.5325C20.6997 16.416 21.632 16.6458 22.3939 17.1775C23.1559 17.7092 23.6934 18.5048 23.9022 19.4102C24.1109 20.3155 23.9762 21.2662 23.524 22.0778C23.0719 22.8895 22.3345 23.5044 21.4548 23.8034C20.5751 24.1024 19.6157 24.0642 18.7626 23.6961C17.9095 23.328 17.2233 22.6564 16.8372 21.8113C16.4511 20.9662 16.3925 20.0079 16.6727 19.122L6.59565 14.442C6.09681 15.0233 5.43188 15.438 4.69032 15.6301C3.94876 15.8222 3.16615 15.7827 2.44776 15.5167C1.72937 15.2507 1.10967 14.7711 0.672015 14.1424C0.234362 13.5137 -0.000244141 12.766 -0.000244141 12C-0.000244141 11.2339 0.234362 10.4863 0.672015 9.85755C1.10967 9.22884 1.72937 8.74923 2.44776 8.48326C3.16615 8.21729 3.94876 8.17772 4.69032 8.36985C5.43188 8.56199 6.09681 8.97663 6.59565 9.55798L16.6727 4.87798C16.5579 4.51298 16.4998 4.13258 16.5002 3.74998Z"
                            fill="#E6E6E6"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_58_309">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="card">
            <a href={`/profiles/0x3227edf3d8ef577170f339689a128ce229dd8df2`}>
              <div className="card-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4XkTv7CB8TecNeMJAfNEzuDEpdHQsCak2ScpeKAMNvx1k_RfPmNQ3R69XrLwtCUeKg0&usqp=CAU"></img>
              </div>
              <div className="px-5 py-2">
                <div className="mb-4">
                  <p className="card-name mt-4">@NFT_Pirate</p>
                  <div className="flex mt-2 mb-2">
                    <img
                      src="https://i.postimg.cc/zBDtJMJk/image-1.png"
                      width="30"
                      alt=""
                    />
                    <p className="text-md text-gray-200 flex items-center">
                      {String(
                        '0x3227edf3d8ef577170f339689a128ce229dd8df2',
                      ).substring(0, 6) +
                        '...' +
                        String(
                          '0x3227edf3d8ef577170f339689a128ce229dd8df2',
                        ).substring(38)}
                    </p>
                  </div>
                  <div className="flex">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 59 83"
                      fill="none"
                      className="w-4 ml-1 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M46.5611 39.6676L14.6193 55.4641L46.5611 70.6903V82.9687L0.0255025 60.7895L0 48.7033L32.3818 32.7017L0.0255025 17.2833V5.00488L46.5611 27.1841V39.6676Z"
                        fill="url(#paint0_linear_0_1)"
                      />
                      <path
                        d="M0.0249023 5.00491L12.3235 0L58.8591 22.1728L46.5606 27.1842L0.0249023 5.00491Z"
                        fill="url(#paint1_linear_0_1)"
                      />
                      <path
                        d="M46.5612 70.6905V46.1466L58.8597 40.4624V77.9576L46.5612 82.9689V70.6905Z"
                        fill="url(#paint2_linear_0_1)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_1"
                          x1="46.593"
                          y1="83.4429"
                          x2="7.44516"
                          y2="17.8244"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_0_1"
                          x1="2.3265"
                          y1="3.81937"
                          x2="57.7694"
                          y2="23.5946"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_0_1"
                          x1="52.5606"
                          y1="37.7901"
                          x2="52.8505"
                          y2="82.8535"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p className="text-lg text-white flex items-center">0.18</p>
                    <a
                      href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20profile%20on%20Zilsbt%3A%0A%0Ahttp%3A//localhost%3A3000/profiles/0x3227edf3d8ef577170f339689a128ce229dd8df2`}
                      className="ml-auto mr-2 w-5 pl-4 mr-6"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_58_309)">
                          <path
                            d="M16.5002 3.74998C16.5 2.87013 16.8093 2.01826 17.3739 1.3434C17.9384 0.668542 18.7223 0.213678 19.5883 0.0583884C20.4543 -0.0969011 21.3474 0.0572728 22.1112 0.493936C22.8751 0.9306 23.4611 1.62195 23.7667 2.44702C24.0723 3.27209 24.078 4.17835 23.7829 5.00724C23.4879 5.83613 22.9107 6.53487 22.1525 6.9812C21.3942 7.42753 20.5032 7.59304 19.6352 7.44876C18.7673 7.30448 17.9777 6.85961 17.4047 6.19198L7.32765 10.872C7.55932 11.6061 7.55932 12.3938 7.32765 13.128L17.4047 17.808C18.0104 17.1035 18.8561 16.6489 19.7779 16.5325C20.6997 16.416 21.632 16.6458 22.3939 17.1775C23.1559 17.7092 23.6934 18.5048 23.9022 19.4102C24.1109 20.3155 23.9762 21.2662 23.524 22.0778C23.0719 22.8895 22.3345 23.5044 21.4548 23.8034C20.5751 24.1024 19.6157 24.0642 18.7626 23.6961C17.9095 23.328 17.2233 22.6564 16.8372 21.8113C16.4511 20.9662 16.3925 20.0079 16.6727 19.122L6.59565 14.442C6.09681 15.0233 5.43188 15.438 4.69032 15.6301C3.94876 15.8222 3.16615 15.7827 2.44776 15.5167C1.72937 15.2507 1.10967 14.7711 0.672015 14.1424C0.234362 13.5137 -0.000244141 12.766 -0.000244141 12C-0.000244141 11.2339 0.234362 10.4863 0.672015 9.85755C1.10967 9.22884 1.72937 8.74923 2.44776 8.48326C3.16615 8.21729 3.94876 8.17772 4.69032 8.36985C5.43188 8.56199 6.09681 8.97663 6.59565 9.55798L16.6727 4.87798C16.5579 4.51298 16.4998 4.13258 16.5002 3.74998Z"
                            fill="#E6E6E6"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_58_309">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="card">
            <a href={`/profiles/0x3227edf3d8ef577170f339689a128ce229dd8df2`}>
              <div className="card-image">
                <img src="data:image/jpeg;base64,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"></img>
              </div>
              <div className="px-5 py-2">
                <div className="mb-4">
                  <p className="card-name mt-4">@NFT_Captain</p>
                  <div className="flex mt-2 mb-2">
                    <img
                      src="https://i.postimg.cc/zBDtJMJk/image-1.png"
                      width="30"
                      alt=""
                    />
                    <p className="text-md text-gray-200 flex items-center">
                      {String(
                        '0x3227edf3d8ef577170f339689a128ce229dd8df2',
                      ).substring(0, 6) +
                        '...' +
                        String(
                          '0x3227edf3d8ef577170f339689a128ce229dd8df2',
                        ).substring(38)}
                    </p>
                  </div>
                  <div className="flex">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 59 83"
                      fill="none"
                      className="w-4 ml-1 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M46.5611 39.6676L14.6193 55.4641L46.5611 70.6903V82.9687L0.0255025 60.7895L0 48.7033L32.3818 32.7017L0.0255025 17.2833V5.00488L46.5611 27.1841V39.6676Z"
                        fill="url(#paint0_linear_0_1)"
                      />
                      <path
                        d="M0.0249023 5.00491L12.3235 0L58.8591 22.1728L46.5606 27.1842L0.0249023 5.00491Z"
                        fill="url(#paint1_linear_0_1)"
                      />
                      <path
                        d="M46.5612 70.6905V46.1466L58.8597 40.4624V77.9576L46.5612 82.9689V70.6905Z"
                        fill="url(#paint2_linear_0_1)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_1"
                          x1="46.593"
                          y1="83.4429"
                          x2="7.44516"
                          y2="17.8244"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_0_1"
                          x1="2.3265"
                          y1="3.81937"
                          x2="57.7694"
                          y2="23.5946"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_0_1"
                          x1="52.5606"
                          y1="37.7901"
                          x2="52.8505"
                          y2="82.8535"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p className="text-lg text-white flex items-center">0.18</p>
                    <a
                      href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20profile%20on%20Zilsbt%3A%0A%0Ahttp%3A//localhost%3A3000/profiles/0x3227edf3d8ef577170f339689a128ce229dd8df2`}
                      className="ml-auto mr-2 w-5 pl-4 mr-6"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_58_309)">
                          <path
                            d="M16.5002 3.74998C16.5 2.87013 16.8093 2.01826 17.3739 1.3434C17.9384 0.668542 18.7223 0.213678 19.5883 0.0583884C20.4543 -0.0969011 21.3474 0.0572728 22.1112 0.493936C22.8751 0.9306 23.4611 1.62195 23.7667 2.44702C24.0723 3.27209 24.078 4.17835 23.7829 5.00724C23.4879 5.83613 22.9107 6.53487 22.1525 6.9812C21.3942 7.42753 20.5032 7.59304 19.6352 7.44876C18.7673 7.30448 17.9777 6.85961 17.4047 6.19198L7.32765 10.872C7.55932 11.6061 7.55932 12.3938 7.32765 13.128L17.4047 17.808C18.0104 17.1035 18.8561 16.6489 19.7779 16.5325C20.6997 16.416 21.632 16.6458 22.3939 17.1775C23.1559 17.7092 23.6934 18.5048 23.9022 19.4102C24.1109 20.3155 23.9762 21.2662 23.524 22.0778C23.0719 22.8895 22.3345 23.5044 21.4548 23.8034C20.5751 24.1024 19.6157 24.0642 18.7626 23.6961C17.9095 23.328 17.2233 22.6564 16.8372 21.8113C16.4511 20.9662 16.3925 20.0079 16.6727 19.122L6.59565 14.442C6.09681 15.0233 5.43188 15.438 4.69032 15.6301C3.94876 15.8222 3.16615 15.7827 2.44776 15.5167C1.72937 15.2507 1.10967 14.7711 0.672015 14.1424C0.234362 13.5137 -0.000244141 12.766 -0.000244141 12C-0.000244141 11.2339 0.234362 10.4863 0.672015 9.85755C1.10967 9.22884 1.72937 8.74923 2.44776 8.48326C3.16615 8.21729 3.94876 8.17772 4.69032 8.36985C5.43188 8.56199 6.09681 8.97663 6.59565 9.55798L16.6727 4.87798C16.5579 4.51298 16.4998 4.13258 16.5002 3.74998Z"
                            fill="#E6E6E6"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_58_309">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="card">
            <a href={`/profiles/0x3227edf3d8ef577170f339689a128ce229dd8df2`}>
              <div className="card-image">
                <img src="https://pbs.twimg.com/profile_images/1490533817416925189/oDKK6UFj_400x400.jpg"></img>
              </div>
              <div className="px-5 py-2">
                <div className="mb-4">
                  <p className="card-name mt-4">@NFT_King</p>
                  <div className="flex mt-2 mb-2">
                    <img
                      src="https://i.postimg.cc/zBDtJMJk/image-1.png"
                      width="30"
                      alt=""
                    />
                    <p className="text-md text-gray-200 flex items-center">
                      {String(
                        '0x3227edf3d8ef577170f339689a128ce229dd8df2',
                      ).substring(0, 6) +
                        '...' +
                        String(
                          '0x3227edf3d8ef577170f339689a128ce229dd8df2',
                        ).substring(38)}
                    </p>
                  </div>
                  <div className="flex">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 59 83"
                      fill="none"
                      className="w-4 ml-1 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M46.5611 39.6676L14.6193 55.4641L46.5611 70.6903V82.9687L0.0255025 60.7895L0 48.7033L32.3818 32.7017L0.0255025 17.2833V5.00488L46.5611 27.1841V39.6676Z"
                        fill="url(#paint0_linear_0_1)"
                      />
                      <path
                        d="M0.0249023 5.00491L12.3235 0L58.8591 22.1728L46.5606 27.1842L0.0249023 5.00491Z"
                        fill="url(#paint1_linear_0_1)"
                      />
                      <path
                        d="M46.5612 70.6905V46.1466L58.8597 40.4624V77.9576L46.5612 82.9689V70.6905Z"
                        fill="url(#paint2_linear_0_1)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_1"
                          x1="46.593"
                          y1="83.4429"
                          x2="7.44516"
                          y2="17.8244"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_0_1"
                          x1="2.3265"
                          y1="3.81937"
                          x2="57.7694"
                          y2="23.5946"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_0_1"
                          x1="52.5606"
                          y1="37.7901"
                          x2="52.8505"
                          y2="82.8535"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p className="text-lg text-white flex items-center">0.18</p>
                    <a
                      href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20profile%20on%20Zilsbt%3A%0A%0Ahttp%3A//localhost%3A3000/profiles/0x3227edf3d8ef577170f339689a128ce229dd8df2`}
                      className="ml-auto mr-2 w-5 pl-4 mr-6"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_58_309)">
                          <path
                            d="M16.5002 3.74998C16.5 2.87013 16.8093 2.01826 17.3739 1.3434C17.9384 0.668542 18.7223 0.213678 19.5883 0.0583884C20.4543 -0.0969011 21.3474 0.0572728 22.1112 0.493936C22.8751 0.9306 23.4611 1.62195 23.7667 2.44702C24.0723 3.27209 24.078 4.17835 23.7829 5.00724C23.4879 5.83613 22.9107 6.53487 22.1525 6.9812C21.3942 7.42753 20.5032 7.59304 19.6352 7.44876C18.7673 7.30448 17.9777 6.85961 17.4047 6.19198L7.32765 10.872C7.55932 11.6061 7.55932 12.3938 7.32765 13.128L17.4047 17.808C18.0104 17.1035 18.8561 16.6489 19.7779 16.5325C20.6997 16.416 21.632 16.6458 22.3939 17.1775C23.1559 17.7092 23.6934 18.5048 23.9022 19.4102C24.1109 20.3155 23.9762 21.2662 23.524 22.0778C23.0719 22.8895 22.3345 23.5044 21.4548 23.8034C20.5751 24.1024 19.6157 24.0642 18.7626 23.6961C17.9095 23.328 17.2233 22.6564 16.8372 21.8113C16.4511 20.9662 16.3925 20.0079 16.6727 19.122L6.59565 14.442C6.09681 15.0233 5.43188 15.438 4.69032 15.6301C3.94876 15.8222 3.16615 15.7827 2.44776 15.5167C1.72937 15.2507 1.10967 14.7711 0.672015 14.1424C0.234362 13.5137 -0.000244141 12.766 -0.000244141 12C-0.000244141 11.2339 0.234362 10.4863 0.672015 9.85755C1.10967 9.22884 1.72937 8.74923 2.44776 8.48326C3.16615 8.21729 3.94876 8.17772 4.69032 8.36985C5.43188 8.56199 6.09681 8.97663 6.59565 9.55798L16.6727 4.87798C16.5579 4.51298 16.4998 4.13258 16.5002 3.74998Z"
                            fill="#E6E6E6"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_58_309">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex py-24 md:flex-row flex-col items-center container 2xl:px-24 sm:px-6 mx-auto">
        <div className="lg:flex-grow  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-12 font-medium text-gray-900 dark:text-white">
            Zilliqa Soul-Bound Token
          </h1>
          <div className="flex justify-between space-x-8 mb-12">
            {content.map((items) => (
              // title={items.title}
              // subtitle={items.subtitle}
              // content={items.content}

              <div className="why-us">
                <div className="card-why-us">
                  <h5>{items.subtitle}</h5>
                  <h4>{items.title}</h4>
                  <p>{items.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-3 mx-auto">
            <Link to="/create-profile" className="cta-primary">
              Minting Page
            </Link>
          </div>
        </div>
        {/* <div className=" rounded lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            alt="logo"
            src={logo}
            className="object-cover object-center rounded"
          />
        </div> */}
      </div>
    </div>
  );
}
