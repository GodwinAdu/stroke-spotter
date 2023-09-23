interface Author {
    name: string;
    image: string;
    designation: string;
  }
  
  interface BlogPost {
    id: number;
    sermonTopic: string;
    title: string;
    image: string;
    bible: string[];
    sermonBody: string;
    author: Author;
    tags: string[];
    publishDate: string;
  }

  

const blogData:BlogPost[] = [
    {
      id: 1,
      sermonTopic: "The Love of God",
      title: "Experiencing the Unfailing Love of God",
      image: "/assets/blogs/god-love.jpg",
      bible: [
        "Psalm 136:26 - Give thanks to the God of heaven. His love endures forever.",
        "Romans 5:8 - But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
        "1 John 4:16 - So we have come to know and to believe the love that God has for us. God is love, and anyone who abides in love abides in God, and God abides in them.",
      ],
      sermonBody:"In this sermon, we delve into the eternal and unfailing love of God. Through the lens of Psalm 136:26, we'll explore how God's love endures forever, regardless of our circumstances. We'll also reflect on the ultimate expression of God's love found in Romans 5:8, where He demonstrated His love for us through the sacrifice of Christ on the cross. Finally, we'll delve into the profound truth that God is love, as stated in 1 John 4:16. Through these passages, we'll discover how to experience and share the boundless love that God offers to each one of us.",
      author: {
        name: "Samuyl Joshi",
        image: "/assets/flags/ghana.png",
        designation: "Pastor",
      },
      tags: ["preaching"],
      publishDate: "2025",
    },
    {
      id: 2,
      sermonTopic: "The Power of Faith",
      title: "Unleashing the Miraculous Through Faith",
      image: "/assets/blogs/faith.jpg",
      bible: [
        "Hebrews 11:1 - Now faith is confidence in what we hope for and assurance about what we do not see.",
        "Matthew 17:20 - Truly I tell you, if you have faith as small as a mustard seed, you can say to this mountain, 'Move from here to there,' and it will move. Nothing will be impossible for you.",
        "Mark 11:24 - Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours.",
      ],
      sermonBody:"In this sermon, we embark on a journey into the transformative power of faith. As we delve into Hebrews 11:1, we'll uncover the essence of faith as a profound confidence in the unseen, a force that propels us toward the fulfillment of God's promises. We'll explore the mustard-seed faith described in Matthew 17:20, learning that even the tiniest seed of faith can move mountains of adversity and doubt. Drawing inspiration from Mark 11:24, we'll grasp the significance of believing in our prayers and how our faith can unlock the miraculous in our lives. Through these passages, we'll discover how to unleash the power of faith to overcome challenges, receive blessings, and bring glory to our Heavenly Father.",
      author: {
        name: "Samuyl Joshi",
        image: "/assets/flags/ghana.png",
        designation: "Pastor",
      },
      tags: ["preaching"],
      publishDate: "2025",
    },
    {
      id: 3,
      sermonTopic: "The Call to Holiness",
      title: "Living a Set-Apart Life",
      image: "/assets/blogs/holiness.jpg",
      bible: [
        "1 Peter 1:15-16 - But just as he who called you is holy, so be holy in all you do; for it is written: 'Be holy, because I am holy.",
        "Romans 12:1 - Therefore, I urge you, brothers and sisters, in view of God's mercy, to offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship.",
      ],
      sermonBody:"In this sermon, we embark on a journey to understand the divine call to holiness. Through the lens of 1 Peter 1:15-16, we'll delve into the concept of living a set-apart life that reflects the holiness of our Creator. We'll explore the transformative power of presenting ourselves as living sacrifices, as encouraged by Romans 12:1. By examining the call to be holy in our actions and attitudes, we'll uncover how holiness is not a mere requirement but a pathway to deeper intimacy with God. Through these passages, we'll discover the significance of embodying holiness in a world that needs the light of Christ's purity.",
      author: {
        name: "Samuyl Joshi",
        image: "/assets/flags/ghana.png",
        designation: "Pastor",
      },
      tags: ["preaching"],
      publishDate: "2025",
    },
    {
      id: 4,
      sermonTopic: "The Gift of Grace",
      title: "Embracing God's Unmerited Favor",
      image: "/assets/blogs/grace.jpg",
      bible: [
        "2 Corinthians 12:9 - But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.",
        "Ephesians 2:8-9 - For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast",
      ],
      sermonBody:"In this sermon, we dive deep into the profound gift of God's grace. Through the lens of Ephesians 2:8-9, we'll explore the concept of salvation by grace through faith, a gift that we cannot earn or boast about. We'll also reflect on the words of 2 Corinthians 12:9, where God's grace is revealed as sufficient and empowering in our moments of weakness. Through these passages, we'll uncover the depth of God's unmerited favor and learn how to fully embrace His grace as the foundation of our identity and the source of our strength.",
      author: {
        name: "Samuyl Joshi",
        image: "/assets/flags/ghana.png",
        designation: "Pastor",
      },
      tags: ["preaching"],
      publishDate: "2025",
    },
    {
      id: 5,
      sermonTopic: "The Role of the Holy Spirit",
      title: "Walking in the Spirit's Power",
      image: "/assets/blogs/holy-spirit.jpg",
      bible: [
        "Galatians 5:16 - So I say, walk by the Spirit, and you will not gratify the desires of the flesh",
        "Acts 1:8 - But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth",
      ],
      sermonBody:"In this sermon, we explore the vital role of the Holy Spirit in the life of a believer. Through Galatians 5:16, we'll delve into the concept of walking in the Spirit's guidance to overcome the desires of the flesh. We'll also examine Acts 1:8, where the Holy Spirit is promised as a source of power for effective witness and ministry. Through these passages, we'll discover how to cultivate a Spirit-led life, tap into the Spirit's empowering presence, and fulfill the divine calling to be bold witnesses for Christ.",
      author: {
        name: "Samuyl Joshi",
        image: "/assets/flags/ghana.png",
        designation: "Pastor",
      },
      tags: ["preaching"],
      publishDate: "2025",
    },
    {
      id: 6,
      sermonTopic: "The Hope of Resurrection",
      title: "The Assurance of Life Beyond the Grave",
      image: "/assets/blogs/resurrection.jpg",
      bible: [
        "1 Corinthians 15:20-22 - But Christ has indeed been raised from the dead, the firstfruits of those who have fallen asleep. For since death came through a man, the resurrection of the dead comes also through a man. For as in Adam all die, so in Christ all will be made alive",
        "1 Thessalonians 4:16-17 - For the Lord himself will come down from heaven, with a loud command, with the voice of the archangel and with the trumpet call of God, and the dead in Christ will rise first. After that, we who are still alive and are left will be caught up together with them in the clouds to meet the Lord in the air.",
      ],
      sermonBody:"In this sermon, we delve into the profound hope of resurrection in Christ. Through 1 Corinthians 15:20-22, we'll explore the assurance of life beyond the grave, grounded in the reality of Christ's resurrection as the firstfruits. We'll also reflect on 1 Thessalonians 4:16-17, where the glorious promise of Christ's return and the resurrection of believers is revealed. Through these passages, we'll uncover the hope that shapes our perspective on death, empowers us to live with purpose, and assures us of our eternal destiny in the presence of our Savior.",
      author: {
        name: "Samuyl Joshi",
        image: "/assets/flags/ghana.png",
        designation: "Pastor",
      },
      tags: ["preaching"],
      publishDate: "2025",
    },
    {
      id: 7,
      sermonTopic: "The Fruit of the Spirit",
      title: "Cultivating the Character of Christ",
      image: "/assets/blogs/fruit-of-spirit.jpg",
      bible: [
        "Galatians 5:22-23 - But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.",
        "John 15:4 - Remain in me, as I also remain in you. No branch can bear fruit by itself; it must remain in the vine. Neither can you bear fruit unless you remain in me.",
      ],
      sermonBody:"In this sermon, we explore the transformative power of the Fruit of the Spirit. Through Galatians 5:22-23, we'll delve into the virtues that the Spirit produces in the life of a believer, reflecting the character of Christ. We'll also examine John 15:4, where the metaphor of the vine and branches teaches us the importance of abiding in Christ to bear fruit. Through these passages, we'll discover how to cultivate the fruit of love, joy, peace, and more, as we remain connected to the source of our spiritual vitality.",
      author: {
        name: "Samuyl Joshi",
        image: "/assets/flags/ghana.png",
        designation: "Pastor",
      },
      tags: ["preaching"],
      publishDate: "2025",
    },
    {
      id: 8,
      sermonTopic: "The Call to Discipleship",
      title: "Following Christ's Example",
      image: "/assets/blogs/disciples.jpg",
      bible: [
        "Matthew 16:24 - Then Jesus said to his disciples, 'Whoever wants to be my disciple must deny themselves and take up their cross and follow me.",
        "Luke 9:23 - Then he said to them all: 'Whoever wants to be my disciple must deny themselves and take up their cross daily and follow me.",
      ],
      sermonBody:"In this sermon, we explore the call to true discipleship. Through the teachings of Jesus in Matthew 16:24 and Luke 9:23, we'll uncover the essence of following Christ's example. We'll dive into the concept of self-denial, taking up our crosses, and the daily commitment to follow Jesus wholeheartedly. Through these passages, we'll discover how to embrace the transformative journey of discipleship, living out the teachings and mission of our Savior in a world that needs His light.",
      author: {
        name: "Samuyl Joshi",
        image: "/assets/flags/ghana.png",
        designation: "Pastor",
      },
      tags: ["preaching"],
      publishDate: "2025",
    },
    {
      id: 9,
      sermonTopic: "The Gift of Prayer",
      title: "Communing with the Creator",
      image: "/assets/blogs/prayer.jpg",
      bible: [
        "Philippians 4:6-7 - Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
        "Matthew 6:6 - But when you pray, go into your room, close the door and pray to your Father, who is unseen. Then your Father, who sees what is done in secret, will reward you.",
      ],
      sermonBody:"In this sermon, we explore the precious gift of prayer. Through Philippians 4:6-7, we'll delve into the practice of presenting our requests to God in prayer, experiencing His peace that transcends understanding. We'll also reflect on the intimacy of prayer described in Matthew 6:6, where we're invited to commune with our Heavenly Father in secret. Through these passages, we'll discover the power of prayer to transform our worries into peace and to draw us into deeper connection with the Creator of the universe.",
      author: {
        name: "Samuyl Joshi",
        image: "/assets/flags/ghana.png",
        designation: "Pastor",
      },
      tags: ["preaching"],
      publishDate: "2025",
    },
    {
      id: 10,
      sermonTopic: " The Ministry of Reconciliation",
      title: "Restoring Broken Relationships",
      image: "/assets/blogs/reconciliation.jpg",
      bible: [
        "2 Corinthians 5:18-19 - All this is from God, who reconciled us to himself through Christ and gave us the ministry of reconciliation: that God was reconciling the world to himself in Christ, not counting people's sins against them. And he has committed to us the message of reconciliation.",
        "Matthew 5:23-24 - Therefore, if you are offering your gift at the altar and there remember that your brother or sister has something against you, leave your gift there in front of the altar. First go and be reconciled to them; then come and offer your gift",
      ],
      sermonBody:"In this sermon, we explore the vital ministry of reconciliation. Through 2 Corinthians 5:18-19, we'll uncover the significance of God's reconciliation with humanity and the call to participate in restoring broken relationships. We'll also examine Jesus' teaching in Matthew 5:23-24, highlighting the importance of pursuing reconciliation before offering our gifts to God. Through these passages, we'll discover how the message and practice of reconciliation bring healing, unity, and the transformative power of God's love to a world in need of restoration.",
      author: {
        name: "Samuyl Joshi",
        image: "/assets/flags/ghana.png",
        designation: "Pastor",
      },
      tags: ["preaching"],
      publishDate: "2025",
    },
  ];
  export default blogData;
  