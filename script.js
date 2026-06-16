        // Manifesto Data Provider
        window.getManifestoData = function() {
            return [
                {
                    id: 'food-and-agriculture',
                    title: 'Agriculture',
                    icon: 'leaf',
                    highlight: 'Food and Agriculture: Creating an ecologically sustainable food system, transitioning to plant-based diets, reducing food waste, and reforming agricultural subsidies.',
                    subPills: [
                        {
                            title: 'Sustainable Production & Agro-ecology',
                            description: 'Transitioning to ecologically sustainable farming, supporting local mixed farms, and enforcing high animal welfare standards.',
                            content: [
                                {
                                    text: 'Rebalance agricultural production to produce more fruit and vegetables and less meat and dairy.',
                                    rationale: [
                                        'Addresses the climate crisis by massively reducing greenhouse gas emissions from ruminant digestion and intensive farming.',
                                        'Releases vast areas of land currently used for livestock feed to be used for crops, forestry, and wildlife restoration.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Support smaller mixed farms, community supported agriculture, and urban gardening initiatives rather than intensive mega-farms.',
                                    rationale: [
                                        'Reverses the economic pressure toward unsustainable intensive farming methods that degrade land.',
                                        'Promotes food sovereignty and guarantees fairer prices for domestic producers and consumers.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Sustain', url: 'https://www.sustainweb.org/' }
                                    ]
                                },
                                {
                                    text: 'Establish rigorous licensing based on the precautionary principle, restricting artificial fertilisers, pesticides, and banning GMO cultivation without proof of absolute safety.',
                                    rationale: [
                                        'Protects farm workers, rural communities, wildlife, and broader ecosystems from toxic chemical accumulation.',
                                        'Transitions the agricultural system heavily towards organic and natural methods.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Land, Environment & Climate',
                            description: 'Utilising carbon sequestration, reducing water pollution, and protecting natural waterways.',
                            content: [
                                {
                                    text: 'Target reducing nitrogen, phosphorus, and sediment pollution from agriculture into water environments by at least 50% by 2035.',
                                    rationale: [
                                        'Maintains the UK commitment to the Global Biodiversity Framework.',
                                        'Prevents the catastrophic degradation of rivers and waterways via chemical run-off and excessive slurry.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'River Trust', url: 'https://theriverstrust.org/' }
                                    ]
                                },
                                {
                                    text: 'Direct agricultural public subsidies exclusively towards environmentally and socially sustainable practices through a new Land Management Investment scheme.',
                                    rationale: [
                                        'Ensures public money is used to produce nutritious food and promote non-chemical farming, not to reward land hoarding.',
                                        'Requires full transparency regarding production methods as a strict condition for receiving support.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Apply a Carbon Tax to agricultural fuel and chemical inputs, and restore lowland peat soils to net carbon sequesters.',
                                    rationale: [
                                        'Uses financial levers to limit the massive emissions linked directly to intensive land use.',
                                        'Secures the health of British soils, our most important onshore carbon store.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Diet, Public Health & Trade',
                            description: 'Promoting healthy diets over ultra-processed food and ensuring fair-trade international supply chains.',
                            content: [
                                {
                                    text: 'Actively promote healthy diets and regulate to reduce the presence and advertising of ultra-processed foods.',
                                    rationale: [
                                        'Addresses the root causes of high levels of obesity and generalised public health degradation.',
                                        'Fights the dominance of vast food processing manufacturers that profit off unhealthy and highly processed products.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Require public sector bodies (schools, hospitals) to implement procurement processes utilising local, sustainably sourced seasonal produce.',
                                    rationale: [
                                        'Creates an immediate, guaranteed democratic market for ethical local producers.',
                                        'Secures baseline access to highly nutritious, healthy meals for public service users and children.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Ensure all international food trade deals mandate that imported food meets UK environmental, animal welfare, and labour condition standards.',
                                    rationale: [
                                        'Prevents the offshoring of carbon emissions and prevents the UK market from rewarding foreign exploitation.',
                                        'Eliminates the danger of undercutting ethical British farmers via lower-standard international free-trade.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Waste & Packaging Reduction',
                            description: 'Aiming to halve food waste by 2030 and radically reducing pointless food packaging.',
                            content: [
                                {
                                    text: 'Commit the UK to reducing food waste by half by 2030 (across retail, food service, and household sectors).',
                                    rationale: [
                                        'Tackles the vast inefficiencies of a consumerist food model while aligning with UN goals.',
                                        'Prevents needless methane production caused by food rotting in landfill.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Promote reusable packaging through deposit schemes and eliminate all unnecessary single-use food packaging.',
                                    rationale: [
                                        'Prevents millions of tonnes of domestic plastic from entering the waste stream and natural environment.',
                                        'Forces the food industry scaling mechanisms away from unsustainable disposability.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Secure food justice by enacting a Universal Basic Income (UBI) ensuring everyone has sufficient funds to afford healthy sustainable food.',
                                    rationale: [
                                        'Treats food poverty at its structural root—lack of basic household income.',
                                        'Decreases societal reliance on emergency food surplus distributions as a replacement for welfare.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'animal-rights',
                    title: 'Animals',
                    icon: 'paw-print',
                    highlight: 'Animal Rights: Eliminating exploitation, promoting natural habitats, and enforcing strong welfare standards.',
                    subPills: [
                        {
                            title: 'Farming & Food',
                            description: 'Reforming agriculture to phase out factory farming and ensure high welfare.',
                            content: [
                                {
                                    text: 'Phase out factory farming and transition to free-range, mixed rotational farming.',
                                    rationale: [
                                        'Improves animal welfare by allowing expression of natural behaviour.',
                                        'Ensures the application of the \'Five Freedoms\'.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Compassion in World Farming', url: 'https://www.ciwf.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Enforce clear labelling on animal-derived food describing life and slaughter methods.',
                                    rationale: [
                                        'Empowers consumers to make informed choices.',
                                        'Increases transparency in the food production system.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'RSPCA Assured', url: 'https://www.rspcaassured.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'End live exports and require CCTV in all slaughterhouses.',
                                    rationale: [
                                        'Minimises suffering caused by long-distance transport.',
                                        'Deters abuse and provides evidence for welfare enforcement.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Promote a transition to increasingly plant-based diets and ensure vegan/vegetarian options in public sector establishments.',
                                    rationale: [
                                        'Conserves natural resources and reduces greenhouse-gas emissions.',
                                        'Reduces animal cruelty and provides healthier food options.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'The Vegan Society', url: 'https://www.vegansociety.com/' }
                                    ]
                                },
                                {
                                    text: 'End overfishing, prohibit intensive fish farming, and restrict use of fishmeal.',
                                    rationale: [
                                        'Protects marine ecosystems from devastation.',
                                        'Reduces extreme suffering in intensive aquatic environments.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Marine Conservation Society', url: 'https://www.mcsuk.org/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Experimentation & Education',
                            description: 'Ending harmful animal testing and promoting humane educational practices.',
                            content: [
                                {
                                    text: 'Ban all experimentation and research which harms animals.',
                                    rationale: [
                                        'Eliminates unnecessary pain and suffering.',
                                        'Acknowledges physiological differences between humans and other animals.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Cruelty Free International', url: 'https://crueltyfreeinternational.org/' }
                                    ]
                                },
                                {
                                    text: 'Transfer government research funds to non-animal technologies like computer models and human tissue use.',
                                    rationale: [
                                        'Invests in more accurate, progressive scientific methods without animal models.',
                                        'Promotes prevention-focused health research based on human data.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Oppose the harmful use of animals in education and replace them with simulators and models.',
                                    rationale: [
                                        'Encourages an ethical approach to learning and biology.',
                                        'Stops breeding animals specifically for educational destruction.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Abolish research into and the practice of xenotransplantation.',
                                    rationale: [
                                        'Prevents treating animals as spare part factories.',
                                        'Mitigates the grave danger of cross-species virus transferral.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Wildlife, Pets & Entertainment',
                            description: 'Protecting animals in domestic, wild, and entertainment settings.',
                            content: [
                                {
                                    text: 'Ban the use of animals in circuses, abolish zoos, and end commercial racing (greyhound and horse racing whip use).',
                                    rationale: [
                                        'Recognises that such environments are cruel and degrading.',
                                        'Focuses zoos solely on genuine sanctuary and conservation.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'League Against Cruel Sports', url: 'https://www.league.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Regulate companion animal care, end puppy farming, and license all breeders.',
                                    rationale: [
                                        'Prevents the wholesale manipulation and destruction of pets.',
                                        'Ensures young animals stay with their mothers appropriately.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Dogs Trust', url: 'https://www.dogstrust.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'End the badger cull and implement humane wildlife management protocols.',
                                    rationale: [
                                        'Replaces ineffective killing with proven bTB vaccines and biosecurity.',
                                        'Ensures control is justified, targeted, and humane.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Badger Trust', url: 'https://www.badgertrust.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Restrict firework sales to licensed displays, mandate quiet fireworks, and ban outdoor balloon releases.',
                                    rationale: [
                                        'Reduces noise pollution and extreme distress for domestic and wild animals.',
                                        'Prevents litter and fatal hazards to wildlife.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Oppose all blood sports and the lethal commercial use of cetaceans (whaling).',
                                    rationale: [
                                        'Ends the infliction of pain and suffering for sport or leisure.',
                                        'Protects endangered species from unnecessary exploitation.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Whale and Dolphin Conservation', url: 'https://uk.whales.org/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Legal & Institutional Framework',
                            description: 'Strengthening laws and establishing enforcement bodies for animal protection.',
                            content: [
                                {
                                    text: 'Enforce the Animal Welfare Act (2006) provisions as Five Rights for animal wellbeing.',
                                    rationale: [
                                        'Acknowledges the sentience of vertebrate, cephalopod and decapod crustacean species.',
                                        'Protects animals from pain, injury, and psychological suffering.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Set up an Animal Welfare Department and require local Animal Rights Officers.',
                                    rationale: [
                                        'Provides structured oversight for the treatment of wild and domesticated animals.',
                                        'Ensures active enforcement of welfare regulations locally and nationally.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Create a national register of convicted animal-cruelty offenders paired with licensing.',
                                    rationale: [
                                        'Prevents abusers from working with or keeping animals.',
                                        'Improves systemic accountability and safety for animals based on the ViSOR model.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Initiate and develop an Animal Rights Division within the United Nations.',
                                    rationale: [
                                        'Elevates animal welfare to a global governance priority.',
                                        'Stimulates international cooperation on ending exploitation.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'refugees-and-asylum',
                    title: 'Asylum',
                    icon: 'heart-handshake',
                    highlight: 'Refugees & Asylum: Extending protection to climate refugees, establishing safe asylum routes, abolishing immigration detention, and providing immediate right to work.',
                    subPills: [
                        {
                            title: 'Safe Routes & Broadened Protection',
                            description: 'Expanding the definition of a refugee to include climate and LGBT+ refugees, and creating safe, legal routes for claiming asylum.',
                            content: [
                                {
                                    text: 'Acknowledge climate catastrophe as a valid ground for asylum and extend refugee definitions to cover those fleeing environmental breakdown.',
                                    rationale: [
                                        'Recognises that the climate emergency is a direct driver of displacement, often exacerbated by the historical emissions of wealthier nations.',
                                        'Modernises international protection to reflect the realities of the 21st century.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Establish safe, legal routes for seeking asylum, including the ability to apply for an asylum visa at UK embassies abroad or online.',
                                    rationale: [
                                        'Prevents people from having to undertake dangerous, life-threatening journeys facilitated by human traffickers.',
                                        'Ensures a managed, orderly, and humane system for processing claims before people reach the border.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Commit to accepting at least 10,000 refugees annually under the UN Resettlement Programme, supplementing normal asylum protections.',
                                    rationale: [
                                        'Ensures the UK takes a fair, proportionate share of global responsibility for displaced populations.',
                                        'Provides direct, structured sanctuary for the most vulnerable individuals identified by the UN.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Humane Process & Abolishing Detention',
                            description: 'Abolishing immigration detention, dividing the Home Office, and ensuring neutral, fully funded legal processes.',
                            content: [
                                {
                                    text: 'Completely abolish immigration detention and house all asylum seekers within the general community.',
                                    rationale: [
                                        'Ends the traumatising and punitive practice of incarcerating people who have committed no crime and are merely seeking safety.',
                                        'Integrates applicants into society rather than isolating them in dehumanising detainment centres.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Divide the Home Office to create a specialised Department of Migration, and abolish penalties on commercial carriers for transporting undocumented migrants.',
                                    rationale: [
                                        'Removes immigration processing from an intrinsically hostile, security-first department.',
                                        'Prevents airline and ferry staff from acting as proxy border guards, which forces refugees into unsafe crossings.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Process claims within three months, approach interviews from a neutral standpoint, and guarantee fully funded Legal Aid at all stages.',
                                    rationale: [
                                        'Ends the agony of years-long bureaucratic limbo that leaves applicants paralysed.',
                                        'Ensures that the primary objective of the system is identifying protection needs, not finding excuses for rejection.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Rights, Support & Integration',
                            description: 'Granting the right to work, providing UBI-level financial support, and ensuring NHS access for all applicants.',
                            content: [
                                {
                                    text: 'Allow all applicants of working age to take up employment immediately, with no restriction as to occupation.',
                                    rationale: [
                                        'Allows asylum seekers to support themselves, contribute to the economy, and maintain their dignity and skills.',
                                        'Reduces dependency on state support and breaks down barriers to integration.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Provide UBI-level financial support, free English tuition, and unconditional access to all NHS facilities from the date of application.',
                                    rationale: [
                                        'Ensures that no applicant is pushed into destitution or denied fundamental medical care during the process.',
                                        'Recognises that language skills and physical/mental health are essential for navigating the complex asylum system.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Grant indefinite leave to remain to successful applicants, abolish "No Recourse to Public Funds", and ease family reunion rules.',
                                    rationale: [
                                        'Provides true security and stability, allowing refugees to permanently rebuild their lives without the threat of future deportation.',
                                        'Prioritises human rights and family unity over restrictive financial thresholds.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'climate-emergency',
                    title: 'Climate',
                    icon: 'globe',
                    highlight: 'Climate Emergency: Eliminating domestic emissions, investing in renewables, and leading international cooperation on global boundaries.',
                    subPills: [
                        {
                            title: 'Targets & Governance',
                            description: 'Setting strict, accountable targets and legislation to return the climate within planetary boundaries.',
                            content: [
                                {
                                    text: 'Eliminate all carbon dioxide emissions within 10 years on a consumption basis.',
                                    rationale: [
                                        'Responds to the climate emergency timeline urgently.',
                                        'Avoids reliance on international carbon trading or offsets by acting domestically.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Climate Change Committee', url: 'https://www.theccc.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Introduce a pan-UK Well-being of Future Generations Act.',
                                    rationale: [
                                        'Ensures all four governments make decisions for the long-term benefit of humanity.',
                                        'Learns from the successful Welsh legislative experience.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Future Generations Commissioner for Wales', url: 'https://www.futuregenerations.wales/' }
                                    ]
                                },
                                {
                                    text: 'Strengthen the Climate Change Committee to set annual targets for each sector.',
                                    rationale: [
                                        'Ensures strict accountability based on the latest science and global equity.',
                                        'Requires public bodies and businesses to define locally-determined adaptation plans.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Energy & Infrastructure',
                            description: 'Decarbonising the energy grid and investing in nationwide retrofitting and technology.',
                            content: [
                                {
                                    text: 'Switch from fossil fuels to renewables by changing incentives and using direct investment.',
                                    rationale: [
                                        'Decarbonises the energy system with clean power.',
                                        'Allows expansion of the smart grid, heat networks, interconnectors, and energy storage.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Energy Saving Trust', url: 'https://energysavingtrust.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Invest heavily in energy efficiency and retrofitting, especially in housing.',
                                    rationale: [
                                        'Drives down demand for high-carbon space heating.',
                                        'Improves living conditions while progressively tightening vehicle and appliance standards.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'UK Green Building Council', url: 'https://www.ukgbc.org/' }
                                    ]
                                },
                                {
                                    text: 'Deploy technology to remove hundreds of megatonnes of CO2 via Carbon Capture and Storage (CCS).',
                                    rationale: [
                                        'Addresses legacy emissions required to safely return the climate to a stable state.',
                                        'Maintains safe operating spaces globally.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Economy & Transition',
                            description: 'Ensuring fairness through carbon pricing, divestment, and support for workers.',
                            content: [
                                {
                                    text: 'Implement a carbon tax and dividend with a progressive element.',
                                    rationale: [
                                        'Deters high individual emitters and prices out environmentally damaging products.',
                                        'Reflects most emissions of all greenhouse gases, not just CO2.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'New Economics Foundation', url: 'https://neweconomics.org/' }
                                    ]
                                },
                                {
                                    text: 'Require all UK pension and investment funds to divest from fossil fuel companies.',
                                    rationale: [
                                        'Encourages long-term ecological thinking in the finance sector.',
                                        'Urgently completely removes financial support for coal.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Carbon Tracker', url: 'https://carbontracker.org/' }
                                    ]
                                },
                                {
                                    text: 'Deliver a Just Transition by offering sufficient training and support to workers in high-carbon sectors.',
                                    rationale: [
                                        'Ensures no worker is left behind in the shift to a sustainable economy.',
                                        'Provides satisfying and secure work long-term.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Trades Union Congress (TUC)', url: 'https://www.tuc.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'International & Demand Reduction',
                            description: 'Taking global responsibility and managing domestic demand through regulation.',
                            content: [
                                {
                                    text: 'Pay compensation for climate-related loss and damage internationally.',
                                    rationale: [
                                        'Acknowledges the UK\'s historical responsibility as an early industrialiser.',
                                        'Makes equity a key element of delivering international action.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Loss and Damage Collabouration', url: 'https://www.lossanddamagecollabouration.org/' }
                                    ]
                                },
                                {
                                    text: 'Restrict imports of high-carbon goods.',
                                    rationale: [
                                        'Reduces the emissions associated with UK imports.',
                                        'Uses trade rules to encourage the use of lower carbon materials globally.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Ban the advertising of high-carbon products and enforce environmental health warnings.',
                                    rationale: [
                                        'Reduces demand and ensures consumers have an accurate picture of damaging services.',
                                        'Helps drive overall behavioural change toward zero-carbon alternatives.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Badvertising', url: 'https://www.badverts.org/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'countryside',
                    title: 'Countryside',
                    icon: 'trees',
                    highlight: 'Countryside: Protecting wild habitats, reforming rural land use, and revitalising communities.',
                    subPills: [
                        {
                            title: 'Wildlife',
                            description: 'Protecting biodiversity, habitats, and reforming legislation.',
                            content: [
                                {
                                    text: 'Consolidate the Wildlife and Countryside Act 1981 to ensure adequate protection for wildlife-rich sites.',
                                    rationale: [
                                        'Removes loopholes that allow further destruction of habitats.',
                                        'Extends a basic level of habitat protection across the whole countryside.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Natural England', url: 'https://www.gov.uk/government/organisations/natural-england' }
                                    ]
                                },
                                {
                                    text: 'Make it a general offence to cause cruelty or avoidable suffering to wild animals, including a ban on snaring.',
                                    rationale: [
                                        'Provides wild animals the same prosecution protections as domestic animals.',
                                        'Mandates humane methods for necessary pest control.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Review legislation to prevent the introduction of harmful non-native genotypes and plants.',
                                    rationale: [
                                        'Ensures good quality habitat restoration.',
                                        'Protects wild plant populations from invasive competition.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Plantlife', url: 'https://www.plantlife.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Rural Planning & Land Use',
                            description: 'Implementing ecologically sound planning for multi-purpose sustainable countryside usage.',
                            content: [
                                {
                                    text: 'Strengthen planning controls on large-scale damaging land-use changes like major farm buildings and deforestation.',
                                    rationale: [
                                        'Ensures an ecological focus in Local Development Frameworks.',
                                        'Preserves the landscape, ancient monuments, and countryside heritage.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'CPRE, The countryside charity', url: 'https://www.cpre.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Make planning decisions at the lowest appropriate democratic level (parish/town councils).',
                                    rationale: [
                                        'Empowers local custodians to build resilient rural communities.',
                                        'Abolishes democratically unsafe fast-track national infrastructure bodies.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Halt all damaging road construction in National Parks and oppose destructive military training internally.',
                                    rationale: [
                                        'Maintains the intrinsic value and natural beauty of designated parks.',
                                        'Encourages instead the enhancement of public transport, walking, and cycling.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Campaign for National Parks', url: 'https://www.cnp.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Halt the spread of light pollution by establishing a presumption against new rural lighting.',
                                    rationale: [
                                        'Protects the dark night sky and minimises wildlife disturbance.',
                                        'Promotes energy conservation and efficient design in new developments.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Rural Communities & Housing',
                            description: 'Addressing the rural housing crisis, transport deficits, and service inequalities.',
                            content: [
                                {
                                    text: 'Establish a Rural Housing Agency and support low-impact self-build initiatives.',
                                    rationale: [
                                        'Secures affordable homes for local workers and reverses rural homelessness.',
                                        'Meets needs via sustainable, self-reliant living principles.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Rural Housing Alliance', url: 'https://ruralhousingalliance.net/' }
                                    ]
                                },
                                {
                                    text: 'Discourage second home ownership and speculative land price increases.',
                                    rationale: [
                                        'Keeps home availability open to the permanent rural population.',
                                        'Reduces the strain on local facilities caused by transient populations.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Reform and increase the Rural Transport Grant and develop innovative shared community transit.',
                                    rationale: [
                                        'Reduces car dependency and the disproportionately high travel costs in rural areas.',
                                        'Secures equitable accessibility that limits environmental impact.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Campaign for Better Transport', url: 'https://bettertransport.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Ensure high-speed broadband parity and rural health funding allocation.',
                                    rationale: [
                                        'Reverses the trend of closing local facilities for urban centres.',
                                        'Provides modern telecommunications for non-agricultural rural enterprises and homeworking.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'culture-media-sports',
                    title: 'Culture',
                    icon: 'radio',
                    highlight: 'Culture, Media & Sports: Democratising access, promoting active participation, and protecting public broadcasting.',
                    subPills: [
                        {
                            title: 'Arts & Culture',
                            description: 'Fostering local creativity and removing barriers to entry.',
                            content: [
                                {
                                    text: 'Zero-rate live performances for VAT and modify licensing so small-scale live events in pubs and clubs are not stifled.',
                                    rationale: [
                                        'Stimulates grassroots culture instead of overly commercialised superstar entertainment.',
                                        'Rebalances the relationship between creators and local communities.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Arts Council England', url: 'https://www.artscouncil.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Ensure financial support for museums and cultural collections makes admission charges unnecessary.',
                                    rationale: [
                                        'Makes cultural heritage democratically accessible to everyone.',
                                        'Recognises cultural preservation as a fundamental state responsibility.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Shift arts funding to local levels and require regional arts boards to be represented by practising artists.',
                                    rationale: [
                                        'Provides non-commercial arts the autonomy needed to thrive organically.',
                                        'Empowers local creators rather than bureaucratic local governments.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Media & Broadcasting',
                            description: 'Protecting public service media, limiting monopoly ownership, and ensuring democratic oversight.',
                            content: [
                                {
                                    text: 'Abolish the BBC licence fee, replacing it with a guaranteed inflation-linked payment from general taxation.',
                                    rationale: [
                                        'Secures the BBC as a primary public service broadcaster independent of commercial ratings.',
                                        'Distances funding from direct government interference via a new Public Service Media Council.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Restrict print and broadcast media ownership so no entity owns more than 20% of a market.',
                                    rationale: [
                                        'Prevents trans-national monopolies from undermining informed democracies.',
                                        'Democratises access and encourages a diversity of locally rooted channels.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Media Reform Coalition', url: 'https://www.mediareform.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Expand OFCOM\'s remit to give social and cultural concerns equal weight and take statutory responsibility for print media.',
                                    rationale: [
                                        'Corrects the regulatory bias that only intervenes on grounds of commercial market failure.',
                                        'Protects the public from concentrated influence without obstructing investigative journalism.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Establish Community Media Centres to allow residents to produce local programming.',
                                    rationale: [
                                        'Provides training and reflects the diversity of perspectives in regional communities.',
                                        'Reduces financial barriers to running geographically based channels.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Advertising & Technology',
                            description: 'Curbing manipulative consumption and ensuring universal digital access.',
                            content: [
                                {
                                    text: 'Ban all advertising targeted at primary school children, and ban ads for alcohol, tobacco, and high-carbon products.',
                                    rationale: [
                                        'Protects the vulnerable from aggressive and manipulative marketing.',
                                        'Cuts demand for fossil fuels, flights, and SUVs to help tackle the climate emergency.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Badvertising', url: 'https://www.badverts.org/' }
                                    ]
                                },
                                {
                                    text: 'Guarantee broadband-capable infrastructure to every household at the same base price, funded by a small levy.',
                                    rationale: [
                                        'Prevents the digital divide from widening.',
                                        'Maintains standard universal access principles similar to postal services.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Make publicly-funded data (e.g., Ordnance Survey mapping, Post Office codes) available to citizens free of charge.',
                                    rationale: [
                                        'Ensures the public benefits from information generated at their expense.',
                                        'Facilitates greater democracy, innovation, and civic awareness.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Sports & Society',
                            description: 'Enhancing participation in sports, protecting local clubs, and ensuring free-to-air access.',
                            content: [
                                {
                                    text: 'Require schools to provide a full half-day per week of sport for every child, alongside daily physical exercise.',
                                    rationale: [
                                        'Improves children\'s development while establishing life-long community cooperative behaviours.',
                                        'Takes pressure off the National Health Service in the long term.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Sport England', url: 'https://www.sportengland.org/' }
                                    ]
                                },
                                {
                                    text: 'Permit local authorities and supporters\' trusts to buy shares in professional sports clubs or convert them to Mutual Organisations.',
                                    rationale: [
                                        'Binds sporting clubs back securely to the communities they represent.',
                                        'Protects clubs from being taken over and stripped by distant financial shareholders.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Supporters Direct', url: 'https://en.wikipedia.org/wiki/Supporters_Direct' }
                                    ]
                                },
                                {
                                    text: 'Allow "safe standing" areas in sports stadia and keep major sporting events on free-to-air TV.',
                                    rationale: [
                                        'Lowers cost barriers for fans while improving atmospheric match experiences safely.',
                                        'Inspires young people and allows maximum public engagement without paywalls.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Football Supporters\' Association', url: 'https://thefsa.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Protect school playing fields from development and ensure no new international venues are built unless locally useful.',
                                    rationale: [
                                        'Guarantees accessible grassroots infrastructure remains available.',
                                        'Prevents wasteful expenditure for one-off major international games.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'peace-security-and-defence',
                    title: 'Defence',
                    icon: 'shield',
                    highlight: 'Peace, Security & Defence: Promoting global peace over military escalation, joining the UN nuclear ban, cancelling Trident, and halting offensive arms exports.',
                    subPills: [
                        {
                            title: 'Global Peace & Human Security',
                            description: 'Focusing on Human Security, prioritising climate action as security, and reforming international alliances like the UN and NATO.',
                            content: [
                                {
                                    text: 'Adopt a Human Security approach that prioritises global cooperation, sustainable development, and addressing the climate emergency over military confrontation.',
                                    rationale: [
                                        'Recognises that true security is found in addressing shared threats like climate change, poverty, and ecological collapse rather than stockpiling arms.',
                                        'Shifts national focus from aggression to resilience and mutual survival.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Campaign to abolish permanent veto powers on the UN Security Council and require all military interventions to have a UN mandate.',
                                    rationale: [
                                        'Democratises the international security framework, preventing isolated superpowers from blocking necessary humanitarian or peace-building actions.',
                                        'Ensures military actions are universally sanctioned and bound by international law.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Push NATO towards a "No First Use" nuclear policy and focus its operations solely on the defence of member states without out-of-area overreach.',
                                    rationale: [
                                        'Transforms existing military alliances from aggressive expansionist blocs into strictly defensive, stabilising frameworks.',
                                        'Reduces the constant global tension of imminent nuclear escalation.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Nuclear Disarmament & Weapons',
                            description: 'Joining the UN Treaty on the Prohibition of Nuclear Weapons, cancelling Trident, and banning autonomous weapons.',
                            content: [
                                {
                                    text: 'Immediately join the UN Treaty on the Prohibition of Nuclear Weapons, dismantle all UK nuclear arsenals, and cancel the Trident programme.',
                                    rationale: [
                                        'Rejects the immoral mass-destruction deterrence logic that threatens entire civilian populations.',
                                        'Frees vast economic and scientific resources for the transition to a sustainable, low-carbon society.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Restrict the use of explosive weapons in populated areas and support international treaties banning chemical, biological, and cluster munitions.',
                                    rationale: [
                                        'Reaffirms absolute commitment to international humanitarian law and the minimisation of civilian casualty in conflict.',
                                        'Actively works to eradicate indiscriminate weapons that permanently scar communities long after wars end.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Prohibit the production of fully autonomous weapon systems and ban the use of UK-based armed drones in covert or extrajudicial operations.',
                                    rationale: [
                                        'Ensures lethal force always remains under meaningful human control and subject to moral and legal accountability.',
                                        'Stops shadowy execution campaigns that circumvent judicial process and national sovereignty.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Military Conversion & Arms Trade',
                            description: 'Ending subsidies for arms exports, enforcing strict ethical licensing, and converting weapons industries to climate solutions.',
                            content: [
                                {
                                    text: 'Close the government’s arms export agencies, end all state subsidies for arms transfers, and introduce a strictly defensive export licensing system.',
                                    rationale: [
                                        'Stops the taxpayer from subsidising the global spread of weaponry and conflict.',
                                        'Ensures that UK-produced military equipment is never sold to human rights abusers or used to destabilise regions.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Rapidly convert the skills and infrastructure of the weapons industry into developing products for environmental protection and climate response.',
                                    rationale: [
                                        'Protects local economies and engineering jobs by transitioning them into sustainable, future-proof sectors.',
                                        'Harnesses brilliant technical expertise to save the planet rather than destroy it.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Reduce the military carbon footprint, right-size forces for disaster relief, and raise the minimum armed forces recruitment age to 18.',
                                    rationale: [
                                        'Makes the military accountable to national climate commitments instead of ignoring standard emissions metrics.',
                                        'Protects children from military recruitment and adapts forces to the modern reality of climate-induced disasters.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'disability',
                    title: 'Disability',
                    icon: 'accessibility',
                    highlight: 'Disability: Removing systemic barriers, embracing the Social Model, and empowering disabled people through universal rights.',
                    subPills: [
                        {
                            title: 'Rights & Social Model',
                            description: 'Incorporating UNCRPD into law and adopting the Social Model of Disability across society.',
                            content: [
                                {
                                    text: 'Incorporate the UN Convention on the Rights of Persons with Disability (UNCRPD) into Welsh and English law.',
                                    rationale: [
                                        'Ensures disabled people’s rights are considered in all legislation and policy development.',
                                        'Guarantees the full enjoyment of fundamental freedoms without discrimination.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'UN CRPD', url: 'https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities.html' }
                                    ]
                                },
                                {
                                    text: 'Establish a Disabled People’s Commissioner for Wales and one for England.',
                                    rationale: [
                                        'Ensures robust enforcement of laws related to disabled people.',
                                        'Provides independent oversight to tackle systemic inequality and discrimination.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Mandate Disability Equality Training at all levels of government, public bodies, and in education.',
                                    rationale: [
                                        'Promotes the Social Model of Disability to overcome structural ableism.',
                                        'Challenges stereotypes that affect disabled people’s confidence and freedom of expression.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Economic Empowerment & Care',
                            description: 'Tackling poverty and expanding Universal Basic Income and tailored support.',
                            content: [
                                {
                                    text: 'Establish a needs-based disability premium within the Universal Basic Income (UBI) framework.',
                                    rationale: [
                                        'Tackles the disproportionately high rates of poverty experienced by disabled individuals.',
                                        'Ensures financial support is maintained regardless of employment status or cohabitation.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Ban private providers of disability assessments and stop quotas for denials.',
                                    rationale: [
                                        'Removes the harm and adverse conditions caused by profit-driven assessment systems.',
                                        'Ensures a responsive, individual-focused approach led by properly trained and disabled-led assessors.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'DPAC', url: 'https://dpac.uk.net/' }
                                    ]
                                },
                                {
                                    text: 'Expand Carer’s Allowance for all unpaid carers and provide a publicly-funded advocacy body for learning-disabled citizens.',
                                    rationale: [
                                        'Empowers disabled people and their carers to co-produce appropriate care packages.',
                                        'Ensures those who provide care receive financial security universally.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Mandate employers to implement Access to Work recommendations and report on disability pay inequality.',
                                    rationale: [
                                        'Closes the disability employment gap practically and legally.',
                                        'Stops workplace discrimination from depressing the wages and opportunities of disabled workers.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Transport & Infrastructure',
                            description: 'Designing fully accessible transport systems and resilient disaster protection plans.',
                            content: [
                                {
                                    text: 'Co-produce all public transport policies with disabled people and invest in accessible design at the earliest stages.',
                                    rationale: [
                                        'Guarantees that stations and vehicles meet physical and sensory needs as standard.',
                                        'Allows multiple disabled people to travel together safely and equitably.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Transport for All', url: 'https://www.transportforall.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Prioritise disabled people in all disaster risk, emergency, and pandemic planning.',
                                    rationale: [
                                        'Addresses the alarming disparity in mortality rates among disabled people during crises like COVID-19.',
                                        'Ensures emergency services are trained to provide suitable, tailored support in active emergencies.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Provide tailored financial support for disabled individuals to transition their personal energy use.',
                                    rationale: [
                                        'Acknowledges the inherently greater energy needs and associated costs for disabled people’s equipment or transport.',
                                        'Prevents environmental transition policies from inadvertently enforcing a lower living standard for disabled people.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Ensure all newly built housing is physically adaptable and provide robust funds for adapting existing homes.',
                                    rationale: [
                                        'Allows disabled people to remain in their own homes and local communities.',
                                        'Provides strong protections for renters who acquire a disability and need immediate accessibility modifications.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Habinteg', url: 'https://www.habinteg.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Education & SEND',
                            description: 'Securing robust funding for SEND and mandating universal training for educators.',
                            content: [
                                {
                                    text: 'Focus critical funding strictly into SEND (Special Educational Needs and Disabilities) provision.',
                                    rationale: [
                                        'Resolves the severe funding crisis preventing vulnerable children from secure learning environments.',
                                        'Safeguards inclusion alongside reliable structural support.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Special Needs Jungle', url: 'https://www.specialneedsjungle.com/' }
                                    ]
                                },
                                {
                                    text: 'Require all teachers in mainstream schools to receive standard SEND training.',
                                    rationale: [
                                        'Overcomes the barriers separating disabled students from their peers.',
                                        'Provides flexible, accessible learning that adapts effectively to neurodivergent and disabled pupils.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Ensure consistent education for hospitalised children and eradicate the transition gap between children\'s and adults\' services.',
                                    rationale: [
                                        'Stabilises the traumatic discontinuities in care and learning as legally defined service ages change.',
                                        'Leverages hybrid learning and support packets tailored to individual capabilities.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'drugs-policy',
                    title: 'Drugs',
                    icon: 'pill',
                    highlight: 'Drugs Policy: Ending prohibition with a public health approach to minimise harm, regulate supply, and protect communities.',
                    subPills: [
                        {
                            title: 'Public Health & Treatment',
                            description: 'Treating drug use as a health issue, offering safe consumption spaces and accessible treatment.',
                            content: [
                                {
                                    text: 'Establish Overdose Prevention Centres (OPCs) and provide Heroin-Assisted Treatment (HAT) under medical supervision.',
                                    rationale: [
                                        'Prevents fatal overdoses and transmission of infections like HIV and hepatitis.',
                                        'Increases treatment engagement for hard-to-reach groups and reduces street injecting.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Release', url: 'https://www.release.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Ensure widespread provision of Naloxone (overdose reversal drug) including to emergency services and prison leavers.',
                                    rationale: [
                                        'Provides an immediate, life-saving response to opiate overdoses.',
                                        'Equips frontline responders with essential harm reduction tools without prescription barriers.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Provide regular, free, and confidential drug safety testing at festivals and in urban centres.',
                                    rationale: [
                                        'Reduces the risk of poisoning or long-term damage from contaminated or high-strength drugs.',
                                        'Empowers users with tailored health and safer-use advice.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'The Loop', url: 'https://wearetheloop.org/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Legalisation & Regulation',
                            description: 'Ending prohibition by introducing a legally regulated system for drug production and supply.',
                            content: [
                                {
                                    text: 'Repeal the Misuse of Drugs Act 1971 and replace it with risk-based legal regulation of drugs.',
                                    rationale: [
                                        'Dismantles the illicit market that empowers organised criminal networks.',
                                        'Reduces the harms associated with unregulated production and supply.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Transform Drug Policy Foundation', url: 'https://transformdrugs.org/' }
                                    ]
                                },
                                {
                                    text: 'Supply recreational drugs via medical prescriptions, specialist pharmacies, and licensed sales depending on the drug\'s risk profile.',
                                    rationale: [
                                        'Ensures substances like cocaine, amphetamines, and MDMA are available in fixed doses with health consultations.',
                                        'Allows the state to manage purity, potency, and restrict sales to adults over 18.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Grant licenses for non-profit Cannabis Social Clubs and small businesses to sell recreational cannabis.',
                                    rationale: [
                                        'Provides a community-based, regulated environment for cultivation and consumption.',
                                        'Ensures product safety and restricts access to minors.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Justice & Decriminalisation',
                            description: 'Diverting individuals from the criminal justice system and expunging past records.',
                            content: [
                                {
                                    text: 'End all criminal sanctions for the possession of drugs for personal use globally.',
                                    rationale: [
                                        'Recognises that punishing personal consumption exacerbates poverty, isolation, and trauma.',
                                        'Frees up the justice system from prosecuting minor, non-violent offences.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Divert people involved in minor supply offences or personal possession to health services rather than prosecution.',
                                    rationale: [
                                        'Focuses on problem-solving solutions rather than punitive measures.',
                                        'Helps dependent users access education and support without gaining a criminal record.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Expunge criminal records relating to possession and small-scale supply, and pardon affected individuals.',
                                    rationale: [
                                        'Removes lifelong barriers to employment and housing caused by prohibitionist policing.',
                                        'Corrects the historical injustices of the failed "War on Drugs".'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Alcohol, Tobacco & Industry',
                            description: 'Implementing stricter controls and public health funding models for legal substances.',
                            content: [
                                {
                                    text: 'Establish publicly controlled Alcohol and Tobacco Control Foundations funded by taxation.',
                                    rationale: [
                                        'Directs tax revenues specifically into public health interventions reducing related harms.',
                                        'Counters the profit motives of legacy alcohol and tobacco industries.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Prohibit all forms of commercial advertising for regulated drugs, including alcohol and nicotine.',
                                    rationale: [
                                        'Protects vulnerable populations and children from predatory marketing.',
                                        'Treats legal and regulated substances as public health matters rather than consumer goods.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Support global producer communities by forming direct partnerships with coca and opium farmers in the Global South.',
                                    rationale: [
                                        'Guarantees fair and sustainable incomes for traditional growing regions.',
                                        'Shifts UK international aid away from enforcing the global "War on Drugs" towards legitimate agricultural cooperatives.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'economy',
                    title: 'Economy',
                    icon: 'pound-sterling',
                    highlight: 'Economy: Creating an ecologically sustainable, decentralised, and equitable economic system beyond infinite growth.',
                    subPills: [
                        {
                            title: 'Ecological Sustainability & Indicators',
                            description: 'Replacing GDP with indicators measuring actual well-being and acknowledging planetary boundaries.',
                            content: [
                                {
                                    text: 'Replace conventional economic indicators like GDP with metrics that measure progress towards sustainability, equity, and well-being.',
                                    rationale: [
                                        'Addresses the failure of current economic theory to reflect the real effects of human activity within a finite ecosystem.',
                                        'Validates policies based on social and ecological outcomes rather than mere economic growth.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Implement a Universal Basic Income (UBI) to reduce dependence on economic growth and support the informal economy.',
                                    rationale: [
                                        'Allows zero or negative growth to occur without individual hardship.',
                                        'Empowers home-based, voluntary, and personal economy work previously unaccounted for by formal measurements.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Basic Income Earth Network', url: 'https://basicincome.org/' }
                                    ]
                                },
                                {
                                    text: 'Prioritise industries with minimum environmental impact and proactively shrink those linked to defence, fossil fuels, and throwaway culture.',
                                    rationale: [
                                        'Conserves natural planetary resources and regenerates damaged natural environments.',
                                        'Maintains self-sustaining ecological cycles vital for all human economic activity.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Banking & Monetary Reform',
                            description: 'Restoring democratic control of the currency away from profit-driven private banks.',
                            content: [
                                {
                                    text: 'Create a National Monetary Authority (NMA) independently accountable to Parliament to issue debt-free national currency.',
                                    rationale: [
                                        'Removes the power of private banks to generate 97% of money via debt creation.',
                                        'Avoids the cyclical "boom and bust" crises requiring taxpayer bailouts.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Positive Money', url: 'https://positivemoney.org/' }
                                    ]
                                },
                                {
                                    text: 'Strictly separate retail and investment banking, prohibiting institutions from operating in both.',
                                    rationale: [
                                        'Ensures standard deposits are protected from reckless financial speculation.',
                                        'Prevents banks from using public subsidies to engage in hedge funds or private equity transactions.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Establish local, democratically accountable, non-profit Community Banks and a state-guaranteed People\'s Bank.',
                                    rationale: [
                                        'Provides extremely safe, non-profit havens for public deposits.',
                                        'Re-invests operating surpluses into local communities while offering affordable local finance.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Taxation & Wealth Distribution',
                            description: 'Implementing a fairer tax system through LVT, Eco-taxes, and Consolidated Income Tax.',
                            content: [
                                {
                                    text: 'Introduce a Consolidated Income Tax that treats all forms of income (earned, unearned, capital gains) precisely the same.',
                                    rationale: [
                                        'Ensures unearned investment wealth is taxed at the exact same proportional rate as normal labour.',
                                        'Simplifies individual taxation and effectively abolishes separate Capital Gains and Inheritance taxes.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Implement a comprehensive Land Value Tax (LVT) applied to the underlying capital value of land.',
                                    rationale: [
                                        'Fairly captures unearned wealth generated by the community and infrastructure rather than personal improvements.',
                                        'Provides revenue collection meant to eventually replace other property-oriented taxes.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Expand Eco-taxes, including a steadily rising carbon tax, coupled with dividends returned directly to residents.',
                                    rationale: [
                                        'Ensures pollution costs are directly borne by those responsible.',
                                        'Discourages ecologically unsustainable behaviours by raising the prices of polluting goods.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Corporate Responsibility & Localisation',
                            description: 'Transforming corporate law to enforce environmental well-being over shareholder dividends.',
                            content: [
                                {
                                    text: 'Amend the Companies Act so directors primarily prioritise the well-being of all living entities over shareholder dividends.',
                                    rationale: [
                                        'Forces companies to invest their profits into equitable, transparent "just transitions" before distributing extracted profits.',
                                        'Protects global ecosystems and future generations against aggressive short-term corporatism.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Require large companies to publicly report audited social and environmental impacts, paying a mandatory living wage.',
                                    rationale: [
                                        'Demands transparency regarding water/energy use, waste efficiency, and workplace discrimination.',
                                        'Curbes excessive executive pay while protecting frontline workers.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Support cooperatives, mutual economic enterprises, and end Private Finance Initiatives (PFIs) in public services.',
                                    rationale: [
                                        'Decentralises economic power in favour of smaller, democratically structured entities more receptive to local needs.',
                                        'Ensures infrastructural projects are publicly owned long-term, halting indefinite public payouts to private shareholders.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'education',
                    title: 'Education',
                    icon: 'graduation-cap',
                    highlight: 'Education: Fostering lifelong learning through a child-centred, democratically accountable, and fully comprehensive public system free from market pressures.',
                    subPills: [
                        {
                            title: 'Early Years & Compulsory Schooling',
                            description: 'Delaying academic instruction to support structured play and treating education as a collabourative community asset.',
                            content: [
                                {
                                    text: 'Extend early years education and defer formal academic learning until age 6, emphasising play, social cohesion, and character building.',
                                    rationale: [
                                        'Aligns with evidence recognising that developmentally appropriate early years are crucial and not mere preparation for school.',
                                        'Prevents early academic pressure, allowing variation in children’s development to manifest naturally.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Provide compulsory education from ages 7 to 16, and trial all-through schools to ease transitions between primary and secondary levels.',
                                    rationale: [
                                        'Eases the social challenges of school transitions and strengthens community cohesion.',
                                        'Allows children greater continuity of peer relationships and educational support environments.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Promote smaller schools (maximum 700 pupils) and classes of roughly 20 to support positive ethos and local accountability.',
                                    rationale: [
                                        'Provides community units with continuity of staff, reducing behavioural problems and establishing safety/security.',
                                        'Enhances local democratic involvement and limits the need for student transport.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Curriculum & Assessment Reform',
                            description: 'Abolishing rigid testing and replacing the National Curriculum with flexible learning entitlements.',
                            content: [
                                {
                                    text: 'Replace the prescriptive National Curriculum with flexible learning entitlements negotiated by teachers and students.',
                                    rationale: [
                                        'Caters for different learning styles and respects the child as a self-directed learner rather than a passive recipient.',
                                        'Allows inclusion of life skills, emotional literacy, environmental education, and democratic citizenship.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Abolish external SATS exams and the Year 1 Phonics Test to curb unnecessary testing pressures.',
                                    rationale: [
                                        'Removes regimes that oppress teaching and create undue anxiety on children as young as 5.',
                                        'Replaces standardised testing with broad continuous, collabourative assessment models.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Abolish competitive school league tables to discourage teaching-to-the-test mentalities and artificial admissions bubbles.',
                                    rationale: [
                                        'Recognises that league tables frequently inflate the perception of schools with higher-ability intake, penalising vulnerable communities.',
                                        'Empowers local authorities to promote balanced admissions processes instead.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'School Structure & Democracy',
                            description: 'Integrating Academies, abolishing new Grammar Schools, and ensuring fully comprehensive integration.',
                            content: [
                                {
                                    text: 'Integrate existing Academies and Free Schools fully back under Local Authority control and oversight.',
                                    rationale: [
                                        'Corrects the democratic deficit and ensures schools are collectively accountable for admissions, curriculum, and fair staff pay.',
                                        'Maintains local infrastructural planning and halts selective funding advantages.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Forbid new Grammar schools and gradually integrate existing selection-based schools into the comprehensive system.',
                                    rationale: [
                                        'Challenges the practice of grading children at 11, which causes social division and impacts confidence levels.',
                                        'Evidence shows mixed-ability educational settings yield higher standards of overall achievement.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Comprehensive Future', url: 'https://comprehensivefuture.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Remove charitable status and subsidies from private schools, forcing equitable taxation, and use generated funds for state integration.',
                                    rationale: [
                                        'Dismantles inherited structures that entrench societal financial inequalities from a young age.',
                                        'Re-allocates state-sponsored scholarship capital back into the democratically-controlled local authority apparatus.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Higher & Further Education',
                            description: 'Providing free lifelong learning, abolishing tuition fees, and writing off existing student debts.',
                            content: [
                                {
                                    text: 'Abolish all tuition fees across Further and Higher Education to treat it as a fundamental public right.',
                                    rationale: [
                                        'Resists marketisation models that view education as a product rather than a profound societal asset.',
                                        'Removes the overwhelming financial barrier for under-represented demographics entering universities.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'National Union of Students (NUS)', url: 'https://www.nus.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Cancel and completely write-off all existing student tuition fee loans and maintenance debts.',
                                    rationale: [
                                        'Liberates generations of students from crippling lifetime debt interest tied to accessing basic opportunity.',
                                        'Re-aligns public investment recognising that educated populace ultimately leads a robust economy.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Instate structural democratic governance of universities providing equal voting blocks for staff, students, and community.',
                                    rationale: [
                                        'Moves away from increasingly corporatised vice-chancellors determining university administration unilaterally.',
                                        'Enforces strong caps to limit vice-chancellors\' salaries to mutually agreed scales.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'University and College Union (UCU)', url: 'https://www.ucu.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'energy',
                    title: 'Energy',
                    icon: 'zap',
                    highlight: 'Energy: A decarbonised energy system based on efficient renewable sources, democratic control, and a rapid phase-out of fossil fuels and nuclear power.',
                    subPills: [
                        {
                            title: 'Power Generation & Infrastructure',
                            description: 'Replacing fossil fuels with renewables, storage technologies, and Green Hydrogen.',
                            content: [
                                {
                                    text: 'Substantially increase clean electricity generation based primarily on renewable, very low carbon sources like offshore wind, solar, and marine.',
                                    rationale: [
                                        'Replaces heavily polluting fossil fuel and nuclear sectors directly to meet essential planetary climate boundaries.',
                                        'Ensures continuity of supply when combined with comprehensive storage technology and links to international grids.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Produce Green Hydrogen from excess renewable electricity using electrolysis, phasing out production from fossil fuels altogether.',
                                    rationale: [
                                        'Creates versatile synthetic fuels compatible with future industry and large-scale transport models.',
                                        'Provides dynamic, clean energy storage for periods of lower renewable generation.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Phase out nuclear power, coal, and the incineration of waste completely.',
                                    rationale: [
                                        'Ends reliance on high-risk, expensive, and inflexible legacy energy systems.',
                                        'Prevents the creation of highly toxic legacy waste that damages communities and environments.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Buildings & Housing Efficiency',
                            description: 'Ending dependency on gas heating and conducting massive residential insulation retrofits.',
                            content: [
                                {
                                    text: 'Carry out large-scale refurbishment programmes to greatly increase the energy efficiency and insulation of all existing buildings.',
                                    rationale: [
                                        'Directly addresses fuel poverty by heavily reducing the baseline energy requirements needed to heat homes.',
                                        'Drastically cuts the overall national energy demand in accordance with the transition to renewables.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Phase out natural gas heating entirely, replacing it with solar thermal, heat pumps, and geothermal systems.',
                                    rationale: [
                                        'Removes a significant and persistent source of domestic carbon emissions.',
                                        'Replaces it with proven, hyper-efficient electrical and thermal alternatives.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Energy Saving Trust', url: 'https://energysavingtrust.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Provide emergency grants to homeowners, landlords, and councils to fund immediate insulation improvements for those at risk of fuel poverty.',
                                    rationale: [
                                        'Protects vulnerable populations from the short-term shocks of energy price instability.',
                                        'Creates immediate, localised skilled jobs in green construction and energy auditing.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Transport & Industry',
                            description: 'Electrifying travel, establishing new transport paradigms, and greening heavy industry.',
                            content: [
                                {
                                    text: 'Transition cars, vans, and HGVs increasingly to ultra-low emission engines using batteries and fuel cells.',
                                    rationale: [
                                        'Overhauls the majority of on-road vehicle dependency away from polluting combustion engines.',
                                        'Aligns the transport framework with incoming large-scale grid expansions.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Promote active travel (walking, cycling) and vastly expand electrified rail and public transport as the main substitute for car travel, while radically discouraging air travel.',
                                    rationale: [
                                        'Decreases aggregate national energy use to the minimum possible limits.',
                                        'Shifts the societal infrastructure toward high-density, low-impact sustainable mobility.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Sustrans', url: 'https://www.sustrans.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Provide incentives for industries to adopt renewable heat, hydrogen, and low-carbon electricity, avoiding long-term "lock-in" to high-carbon technologies.',
                                    rationale: [
                                        'Ensures commercial and industrial spheres are proactively engaged in lowering systemic emissions.',
                                        'Restructures broader domestic material throughput and manufacturing paradigms.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Social Justice, Finance & Nationalisation',
                            description: 'Implementing carbon taxes, removing fossil fuel subsidies, and nationalising energy suppliers.',
                            content: [
                                {
                                    text: 'Nationalise the five largest energy supply companies to ensure democratic control of the energy system.',
                                    rationale: [
                                        'Guarantees fair, affordable, and equal access to basic utilities rather than allowing corporate monopolies to profit-seek.',
                                        'Directs structural changes towards public interest and sustainability without un-accountable shareholder disruption.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Apply a Carbon Tax high enough to encourage rapid shifts to renewables, and completely remove all existing fossil fuel subsidies.',
                                    rationale: [
                                        'Creates systemic financial deterrents against legacy pollution paradigms.',
                                        'Actively prices the ecological damage caused by extraction and burning into the true cost of fossil fuels.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Shift current "green levies" from electricity bills over to gas bills.',
                                    rationale: [
                                        'Incentivises the transition away from gas and toward efficient domestic electric power.',
                                        'Balances domestic billing while preserving critical funding streams for green investments.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'anti-racism',
                    title: 'Equality',
                    icon: 'heart-handshake',
                    highlight: 'Anti-Racism: Dismantling systemic racism, addressing its colonial legacies, and fostering an equitable society.',
                    subPills: [
                        {
                            title: 'Systemic Reform',
                            description: 'Identifying and addressing institutional racism across public services.',
                            content: [
                                {
                                    text: 'Commit to dismantling systemic racism within party structures, policies, and practices.',
                                    rationale: [
                                        'Confronts all forms of racism, including antisemitism, Islamophobia, anti-Blackness, and antigypsyism.',
                                        'Leads by example in building a fairer, more inclusive future.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Runnymede Trust', url: 'https://www.runnymedetrust.org/' }
                                    ]
                                },
                                {
                                    text: 'Reform public services to dismantle systemic racism in health, education, housing, and justice.',
                                    rationale: [
                                        'Addresses the entrenched systems of power and oppression that systematically privilege certain racial groups.',
                                        'Breaks cycles of inequality and exclusion that impact generations.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Equality and Human Rights Commission', url: 'https://www.equalityhumanrights.com/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Decolonisation',
                            description: 'Advancing decolonial transformation in public life and society.',
                            content: [
                                {
                                    text: 'Promote the decolonisation of society, education, and the economy.',
                                    rationale: [
                                        'Involves revisiting historical narratives and promoting cultural empowerment and environmental justice.',
                                        'Recognises that decolonisation requires more than just reforming institutions.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Institute of Race Relations', url: 'https://irr.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Support community heritage work to collabourate across sectors.',
                                    rationale: [
                                        'Empowers racialised communities and fosters a culture of belonging.',
                                        'Reflects the diversity of society in cultural narratives.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Heritage Fund', url: 'https://www.heritagefund.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Justice & Rights',
                            description: 'Opposing discriminatory policies and advocating for reparative justice.',
                            content: [
                                {
                                    text: 'Oppose discriminatory racialised migration policies and support humane approaches.',
                                    rationale: [
                                        'Challenges laws and structures that undermine justice and human dignity for refugees and migrants.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Joint Council for the Welfare of Immigrants (JCWI)', url: 'https://www.jcwi.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Support global racial justice movements, including restorative justice and reparations.',
                                    rationale: [
                                        'Shows unwavering solidarity with global movements for justice and accountability.',
                                        'Demands an end to complicity in occupation and the recognition of fundamental human rights globally.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Amnesty International', url: 'https://www.amnesty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Oppose predictive policing and surveillance tech, demanding transparency and bias mitigation in AI.',
                                    rationale: [
                                        'Prevents the exacerbation of implicit bias and racial profiling in law enforcement.',
                                        'Promotes ethical AI laws with strict oversight to protect marginalised communities.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Liberty', url: 'https://www.libertyhumanrights.org.uk/' },
                                        { name: 'AlgorithmWatch', url: 'https://algorithmwatch.org/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'europe',
                    title: 'Europe',
                    icon: 'globe',
                    highlight: 'Europe: Supporting close cooperation, rejoining the EU when political will allows, and protecting freedom of movement, human rights, and environmental standards.',
                    subPills: [
                        {
                            title: 'Rejoining the EU & Single Market',
                            description: 'Working towards restoring full EU membership and entering a new customs union.',
                            content: [
                                {
                                    text: 'Pursue a policy to re-join the European Union as soon as the political will is present, using citizens\' assemblies to build public support.',
                                    rationale: [
                                        'Recognises that a united international response is essential for global issues like the climate crisis and biodiversity loss.',
                                        'Ensures the UK can influence and develop EU policies and standards from within.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Enter into a new customs union with the EU, and mirror or improve on the legislative rules governing the single market.',
                                    rationale: [
                                        'Eases internal trade border issues between Great Britain and Northern Ireland.',
                                        'Reduces bureaucracy, delay, and the cost of doing business with our closest neighbours.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Make co-operation with the EU the default approach in all policy areas while currently outside the EU.',
                                    rationale: [
                                        'Maintains alignment on workers\' rights, health and safety, animal rights, and environmental protections.',
                                        'Prevents a destructive regulatory race-to-the-bottom.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Freedom of Movement & Citizenship',
                            description: 'Restoring reciprocal rights, Youth Mobility, and ameliorating the impact of Brexit on individuals.',
                            content: [
                                {
                                    text: 'Negotiate a Youth Mobility Scheme to make it easier for young people between 18 and 30 to study and work in the EU.',
                                    rationale: [
                                        'Restores critical life and cultural opportunities for young generations robbed of free movement.',
                                        'Fosters deeper educational, linguistic, and professional integration across the continent.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Ameliorate Brexit impacts by providing paper certification for EU citizens with Settled Status and accepting ID cards in place of passports for EU tourists.',
                                    rationale: [
                                        'Creates a more humane, transparent, and user-friendly system for residents trying to prove their legal status.',
                                        'Reduces friction for tourism, school trips, and language schools.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Negotiate a simplified regime for musicians and performers travelling for professional reasons between the UK and EU.',
                                    rationale: [
                                        'Ends the restrictive 90-day rule that actively harms the cultural and creative industries.',
                                        'Promotes cross-border cultural exchange without crippling bureaucratic overhead.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Science, Education & Health Cooperation',
                            description: 'Rejoining key European educational and scientific sharing programmes.',
                            content: [
                                {
                                    text: 'Regain full membership of the Horizon Europe research programme on an equal footing, and return to full membership of Erasmus+.',
                                    rationale: [
                                        'Acknowledges that the domestic Turing scheme is not a satisfactory replacement for the collabourative Erasmus+ network.',
                                        'Ensures the UK remains at the cutting edge of scientific, educational, and research development.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Seek early agreement to join the European Centre for Disease Prevention and Control (ECDC) as an associate member and cooperate with the European Medicines Agency.',
                                    rationale: [
                                        'Ensures strong joint preparedness for tackling global health issues and future pandemics.',
                                        'Coordinates public health responses without dangerous isolationist delays.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Rejoin Euratom to ensure safe procurement, use, and disposal of nuclear materials.',
                                    rationale: [
                                        'Guarantees vital ongoing access to medical isotopes for healthcare systems.',
                                        'Provides technical stability and cooperation during the phase-out of legacy nuclear dependency.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Human Rights & Democratic Institutions',
                            description: 'Strictly defending the ECHR, Council of Europe, and international collabourative bodies.',
                            content: [
                                {
                                    text: 'Commit fully to the European Convention on Human Rights (ECHR) and remain an active member of the Council of Europe.',
                                    rationale: [
                                        'Guarantees the protection of fundamental rights and freedoms across the continent.',
                                        'Prevents domestic political attempts to strip fundamental human rights protections from UK citizens.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Council of Europe', url: 'https://www.coe.int/' }
                                    ]
                                },
                                {
                                    text: 'Support the UK’s active participation in the European Political Community (EPC) and the Organisation for Security and Co-operation in Europe (OSCE).',
                                    rationale: [
                                        'Provides vital forums for dialogue on common security, human rights, and participatory democracy.',
                                        'Maintains cooperative, negotiated resolutions to conflicts over militaristic interventionism.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Support EU efforts to address the root causes of conflict alongside programmes in the "Global Europe" instrument.',
                                    rationale: [
                                        'Recognises that lasting security and stability cannot be built with weapons, but by addressing underlying inequalities and resource stresses.',
                                        'Pools development and peace-building resources at the scale needed to effect actual change.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'forestry',
                    title: 'Forestry',
                    icon: 'tree-pine',
                    highlight: 'Forestry: Expanding UK forest cover to 30-40%, protecting ancient woodlands, and ensuring the Public Forestry Estate remains publicly owned.',
                    subPills: [
                        {
                            title: 'Expansion & Public Ownership',
                            description: 'Increasing UK tree cover, protecting ancient woodlands, and defending the Public Forest Estate.',
                            content: [
                                {
                                    text: 'Increase the area of tree cover in the UK to between 30% and 40% within ten years.',
                                    rationale: [
                                        'Reverses historic deforestation and maximises natural carbon sequestration capacity across the UK.',
                                        'Provides vital ecological, landscape, and health benefits while reducing reliance on imported timber.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Ensure the Public Forest Estate (PFE) remains in public hands, held in trust for the nation, with a permanent moratorium on selling ancient woodland.',
                                    rationale: [
                                        'Prevents the privatisation and enclosure of vital national natural assets for private profit.',
                                        'Secures democratic accountability through the creation of a publicly funded UK Forestry and Woodlands Council.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Forestry England', url: 'https://www.forestryengland.uk/' }
                                    ]
                                },
                                {
                                    text: 'Enforce a strong presumption to protect all ancient woodland and prioritise planting new forests on degraded agricultural land.',
                                    rationale: [
                                        'Preserves irreplaceable ecosystems that cannot be replicated by new plantation forestry.',
                                        'Balances food production by utilising Grade 4 and 5 land for strategic woodland expansion.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Woodland Trust', url: 'https://www.woodlandtrust.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Biodiversity & Ecology',
                            description: 'Banning biodiversity offsetting, increasing unharvested forestry, and encouraging rewilding.',
                            content: [
                                {
                                    text: 'Amend the National Planning Policy Framework (NPPF) to completely exclude the practice of \'biodiversity offsetting\'.',
                                    rationale: [
                                        'Prevents developers from destroying intact local ecosystems under the false promise of replacing them elsewhere.',
                                        'Forces genuine on-site ecological protection and integration during the planning process.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Promote rewilding to encourage natural regeneration and significantly increase the area of protected, unharvested forestry in the UK.',
                                    rationale: [
                                        'Allows complex ecosystems to re-establish naturally without intensive human management.',
                                        'Aligns with the Kunming-Montreal Global Biodiversity Framework to protect fundamental habitats.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Rewilding Britain', url: 'https://www.rewildingbritain.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Strengthen Biosecurity by increasing the capacity of Plant Health Services and training border staff to identify problem plants and pests.',
                                    rationale: [
                                        'Protects domestic ecosystems from devastating invasive species and imported fungal diseases.',
                                        'Addresses critical vulnerabilities in the national ecological risk register.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Wood Culture & Industry',
                            description: 'Promoting timber in construction, reducing imported wood products, and integrating forestry into education.',
                            content: [
                                {
                                    text: 'Promote a \'Wood First\' policy in all new buildings and retrofitting, drastically reducing the import of timber that can be grown dynamically in the UK.',
                                    rationale: [
                                        'Substitutes high-carbon construction materials (concrete/steel) with renewable, carbon-storing timber.',
                                        'Drives a secure, self-sufficient domestic market for sustainable forestry products.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Facilitate the replacement of oil-based packaging with sustainable wood products and utilise forest residues for energy only when secondary to soil health.',
                                    rationale: [
                                        'Displaces single-use plastics with biodegradable, localised alternatives.',
                                        'Ensures biomass burning does not undercut necessary ecological soil retention and natural carbon sinks.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Ensure no person lives more than 500m from green spaces with trees, and support Forest Schools to integrate woodland ecosystems into curricula.',
                                    rationale: [
                                        'Democratises access to the profound health and well-being benefits of natural canopy cover.',
                                        'Instills a foundational understanding of ecology and conservation in younger generations.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Forest School Association', url: 'https://forestschoolassociation.org/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'public-administration',
                    title: 'Government',
                    icon: 'landmark',
                    highlight: 'Public Administration: Decentalising power to the most local levels, implementing proportional representation, and replacing the House of Lords with an elected chamber.',
                    subPills: [
                        {
                            title: 'Direct Democracy & Subsidiarity',
                            description: 'Basing governance on the principle that power flows upwards from the people, with decisions made at the most local level possible.',
                            content: [
                                {
                                    text: 'Enact the principle of subsidiarity, ensuring that no decision is made centrally if it can be done equally well, or better, locally.',
                                    rationale: [
                                        'Reverses the feudal top-down power structure, empowering citizens rather than treating them as subjects.',
                                        'Ensures governance is representative of the actual needs and ecological realities of local communities.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Promote direct participation through decentralisation, encouraging face-to-face discussion and human-scale social activity.',
                                    rationale: [
                                        'Moves beyond simple voting to active participation, fostering cross-party cooperation and weakening rigid ideologies.',
                                        'Utilises models like "Open Space" to build inclusive, grassroots decision-making processes.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Introduce a Bill of Rights and Citizens\' Initiatives, allowing a percentage of the electorate to trigger binding referenda on any government decision.',
                                    rationale: [
                                        'Provides a vital legal check against oppressive or unrepresentative government actions.',
                                        'Gives voters direct control over policy between election periods.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Electoral Reform',
                            description: 'Replacing First-Past-The-Post with proportional representation, lowering the voting age to 16, and basing voting rights on residence.',
                            content: [
                                {
                                    text: 'Introduce Alternative Vote Plus (AV+) for Westminster and Single Transferable Vote (STV) for local elections to ensure proportionality.',
                                    rationale: [
                                        'Ensures every vote counts and political representation accurately reflects the diversity of public opinion.',
                                        'Ends the sterile two-party dominance that characterises the current "First Past The Post" system.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Lower the voting age to 16 for all elections and base the right to vote on residence rather than nationality.',
                                    rationale: [
                                        'Respects the maturity and political agency of 16-year-olds who are reaching adulthood.',
                                        'Ensures all members of a community, regardless of origin, have a say in the laws they must follow.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Replace private donations with capped individual contributions and proportional state funding for political parties.',
                                    rationale: [
                                        'Eliminates the corrupting influence of wealthy individuals and big business on political decision-making.',
                                        'Level the playing field so parties compete on the quality of their ideas rather than their war chests.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Constitutional & Institutional Reform',
                            description: 'Drafting a written constitution, replacing the House of Lords, disestablishing the Church, and ending the political role of the Monarchy.',
                            content: [
                                {
                                    text: 'Draft a written constitution based on Green principles and replace the House of Lords with a fully elected body chosen by proportional representation.',
                                    rationale: [
                                        'Replaces a chaotic, unwritten anachronism with a clear, democratic framework for rights and governance.',
                                        'Ensures all law-makers are directly accountable to the public.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Separate Church and State by disestablishing the Church of England and removing all legislative roles from the Monarchy.',
                                    rationale: [
                                        'Reflects the reality of a multicultural, pluralistic society where no religion or inherited position should hold special political privilege.',
                                        'Ensures that civil rights and offices are completely independent of birthright or religious belief.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Establish Regional Assemblies and abolish the City of London Corporation’s special status.',
                                    rationale: [
                                        'Provides a democratic regional tier of government where needed, subject to local consent.',
                                        'Ends the undemocratic influence and ambassadorial role of the financial industry over the UK government.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'housing',
                    title: 'Housing',
                    icon: 'home',
                    highlight: 'Housing: Ensuring affordable, secure homes for all by ending Right to Buy, introducing rent controls, and adopting a Housing First approach to end rough sleeping.',
                    subPills: [
                        {
                            title: 'Public Ownership & Social Housing',
                            description: 'Massively expanding council housing, ending sell-offs, and supporting community-led co-operatives.',
                            content: [
                                {
                                    text: 'Abolish the Right to Buy and large-scale sell-offs of social housing, keeping existing council stock in public hands.',
                                    rationale: [
                                        'Stops the depletion of vital public assets that are urgently needed to house those unable to afford market rates.',
                                        'Ensures public money invested in social housing yields long-term security rather than short-term private profit.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Target over 50% of all newly created housing to be social housing, ensuring sufficient capital funding for local authorities to build and buy back homes.',
                                    rationale: [
                                        'Directly tackles the chronic shortage of genuinely affordable, high-quality public housing.',
                                        'Rebalances the housing ecosystem away from speculative development toward meeting fundamental human needs.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Support Community Land Trusts (CLTs) and housing co-operatives with seed funding, simplified conveyancing, and direct transfers of public land.',
                                    rationale: [
                                        'Empowers residents through democratic, community-led management of their own neighbourhoods.',
                                        'Creates housing models that remain affordable in perpetuity, insulated from speculative market forces.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'National CLT Network', url: 'https://www.communitylandtrusts.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Renters\' Rights & Market Cooling',
                            description: 'Introducing rent controls, abolishing "no-fault" evictions, and taxing land value to stabilise prices.',
                            content: [
                                {
                                    text: 'Replace Assured Shorthold Tenancies with standard Stable Rental Tenancies, abolishing Section 21 \'no fault\' evictions.',
                                    rationale: [
                                        'Provides renters with necessary long-term security, ending the constant threat of arbitrary displacement.',
                                        'Reduces community breakdown, child poverty impacts, and stress caused by housing insecurity.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Shelter', url: 'https://www.shelter.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Introduce strict rent controls aiming for a \'Living Rent\', where median local rents take up no more than 35% of local median take-home pay.',
                                    rationale: [
                                        'Prevents extractive, unaffordable rent hikes that impoverish working tenants and absorb government housing benefits.',
                                        'Balances a fair return for landlords with the primary need for tenants to have affordable shelter.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Gradually introduce a Land Value Tax and abolish demand-subsidies like \'Help to Buy\' to stabilise and reduce excessive house prices.',
                                    rationale: [
                                        'Removes the financial incentives that fuel speculative banking, property hoarding, and artificial price inflation.',
                                        'Brings house prices back to an affordable ratio compared to average incomes over the long term.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'New Economics Foundation', url: 'https://neweconomics.org/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Empty Homes & Ending Homelessness',
                            description: 'Adopting Housing First, taxing empty properties, and cracking down on rogue landlords.',
                            content: [
                                {
                                    text: 'Adopt a \'Housing First\' model to end rough sleeping, providing stable accommodation without requiring prior compliance to treatment programmes.',
                                    rationale: [
                                        'Recognises that stable, secure shelter is the foundational prerequisite for addressing complex health or addiction issues.',
                                        'A proven, humane intervention that successfully ends chronic homelessness where conditional models fail.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Homeless Link', url: 'https://homeless.org.uk/knowledge-hub/housing-first/' }
                                    ]
                                },
                                {
                                    text: 'Introduce mandatory council tax premiums on long-term empty properties and second homes, enabling local authorities to determine rates.',
                                    rationale: [
                                        'Penalises the hoarding of scarce housing stock as private wealth assets while local populations face severe shortages.',
                                        'Encourages the return of underutilised housing into the functional residential market.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Introduce a national landlord licensing scheme and ban Lettngs agents from charging any fees to potential and current tenants.',
                                    rationale: [
                                        'Forces rogue and slum landlords out of the market while enforcing safe, habitable living standards.',
                                        'Eliminates predatory upfront costs that prevent low-income households from accessing private accommodation.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Generation Rent', url: 'https://www.generationrent.org/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'industry-and-jobs',
                    title: 'Industry',
                    icon: 'factory',
                    highlight: 'Industry and Jobs: Transitioning to a zero-waste circular economy, democratising corporate governance, and implementing a Green Industrial Strategy for sustainable employment.',
                    subPills: [
                        {
                            title: 'Green Industrial Strategy & Training',
                            description: 'Transitioning to sustainable industries, supporting green jobs, and guaranteeing retraining for affected workers.',
                            content: [
                                {
                                    text: 'Implement a Green Industrial Strategy prioritising a zero-waste circular economy, renewable energy generation, and local sustainable enterprises.',
                                    rationale: [
                                        'Shifts production away from endless consumption models towards sustainable practices that respect environmental and planetary boundaries.',
                                        'Creates thousands of new green jobs focused on reuse, repair, remanufacturing, and low-carbon infrastructure.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Establish a National Industrial Training Council to guarantee alternative employment or training without loss of wages for workers in transitioning industries.',
                                    rationale: [
                                        'Ensures a just transition where workers in declining, high-carbon sectors are protected and supported into new, sustainable livelihoods.',
                                        'Equips the workforce with the vocational skills necessary to build a sustainable, resilient economy.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Replace blast furnaces with electric arc furnaces supplied by well-sorted UK scrap steel.',
                                    rationale: [
                                        'Urgently decarbonises heavy industry and reduces reliance on highly polluting, resource-intensive extraction methods.',
                                        'Promotes a localised circular economy for critical materials.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Democratic Corporate Governance',
                            description: 'Basing corporate governance on stakeholder value, democratising workplaces, and regulating multinationals.',
                            content: [
                                {
                                    text: 'Amend the legal responsibilities of Company Directors to prioritise overall stakeholder value rather than the sole interest of shareholders.',
                                    rationale: [
                                        'Ensures companies operate in the long-term interest of society, their employees, and the environment rather than seeking short-term financial extraction.',
                                        'Embedding "triple bottom line" reporting forces companies to quantify net social and environmental contributions alongside financial metrics.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Enforce mandatory representation on company boards for elected workforce members and require at least 40% of board members to be women.',
                                    rationale: [
                                        'Democratises industrial decision-making, giving workers a direct say in their conditions and the strategic direction of their enterprise.',
                                        'Breaks established corporate monopolies on power, ensuring diverse representation at the highest levels of governance.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Grant employees of limited liability companies the right to ballot on mutualising (transforming into a co-operative) their workplace.',
                                    rationale: [
                                        'Provides a pathway for communities and workers to directly own and govern localised, sustainable enterprises.',
                                        'Shifts the economic structure away from exploitative transnational corporate scaling toward democratic social franchises.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Spatial Planning & Localisation',
                            description: 'Reversing regional inequalities, utilising Community Banks, and introducing carbon tariffs.',
                            content: [
                                {
                                    text: 'Implement a National Economic Spatial Strategy to actively direct investment towards neglected regions and halt the over-concentration of industry in London and the South East.',
                                    rationale: [
                                        'Reduces acute inter-regional economic inequality and builds systemic resilience across all parts of the UK.',
                                        'Relieves unsustainable pressures on housing, water, and infrastructure in hyper-concentrated urban centres.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Establish Community Banks to provide preferential funding rates for local co-operatives and sustainable small enterprises.',
                                    rationale: [
                                        'Decentralises financial power, enabling communities to directly fund enterprises fulfilling specific local employment and environmental needs.',
                                        'Overcomes the barriers small green businesses face accessing affordable capital from profit-driven multinational banks.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Adopt carbon border tariffs to establish a level playing field for domestic sustainable production against environmentally harmful imports.',
                                    rationale: [
                                        'Prevents environmental dumping by penalising overseas production that relies on lower social or ecological standards.',
                                        'Incentivises global supply chains to clean up their practices to maintain access to UK markets.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'international',
                    title: 'International',
                    icon: 'globe',
                    highlight: 'International: Promoting global equity, cancelling poor countries\' debts, aligning trade with climate goals, and defending human rights through a democratised UN.',
                    subPills: [
                        {
                            title: 'Global Trade & Debt Justice',
                            description: 'Writing off the debts of the poorest countries and replacing the WTO with a General Agreement on Sustainable Trade.',
                            content: [
                                {
                                    text: 'Write off all foreign debts owed by "Least Developed" countries and those needing support to meet their Millennium Development Goals.',
                                    rationale: [
                                        'Frees poor countries from exploitative interest payments that force them to sacrifice their environments and populations for export-driven growth.',
                                        'Stops the massive net transfer of wealth from the poorest parts of the world to wealthy nations and corporations.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Replace the WTO with a General Agreement on Sustainable Trade and a democratised World Localisation Organisation.',
                                    rationale: [
                                        'Reverses globalisation by prioritising localised production, fair trade rules, and ensuring trade is subservient to environmental and labour rights.',
                                        'Allows nations to democratically protect their own economies and ecosystems from volatile, extractive global markets.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Ban the import of products grown on recently deforested land and ensure all trade respects the Global Biodiversity Framework.',
                                    rationale: [
                                        'Takes responsibility for the UK\'s consumption footprint and prevents trade from driving global ecological collapse.',
                                        'Incentivises sustainable agrarian reform globally rather than corporate land grabs.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Development & Climate Finance',
                            description: 'Increasing combined ODA and Climate Finance to 2.5% of GNI, given as grants, and restoring a standalone DFID.',
                            content: [
                                {
                                    text: 'Increase combined ODA and Climate Finance to 2.5% of GNI by 2030 and restore a standalone Department for International Development.',
                                    rationale: [
                                        'Recognises the UK\'s historical climate debt and provides targeted reparations for past colonial and fossil-fuel exploitation.',
                                        'Ensures structural support for mitigation and adaptation in the Global South without tying it to British foreign policy or corporate interests.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Provide foreign assistance exclusively as grants, not loans, and end any form of tied aid.',
                                    rationale: [
                                        'Ensures aid genuinely supports the poorest nations rather than pushing them further into debt traps.',
                                        'Allows developing countries to plan their own infrastructural transitions rather than servicing foreign capital.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Direct aid toward local ownership and indigenous empowerment, guaranteeing projects require their permission when affecting their lands.',
                                    rationale: [
                                        'Ends neo-colonial models of resource extraction by legally empowering local communities and respecting indigenous treaties.',
                                        'Funds the protection of cultural diversity and biodiversity simultaneously.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Human Rights & Global Democracy',
                            description: 'Sanctioning rights-abusing regimes, supporting Palestinian and Kashmiri self-determination, and reforming the UN.',
                            content: [
                                {
                                    text: 'Implement a UN Human Rights Index with severe, targeted sanctions for regimes systematically abusing civil, political, or minority rights.',
                                    rationale: [
                                        'Replaces arbitrary military interventions with a legally-binding, objective standard to tackle state-sponsored violence and repression.',
                                        'Ensures UK foreign policy acts consistently rather than selectively shielding geopolitical allies who commit abuses.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Campaign for a negotiated solution in Palestine/Israel based on mutual recognition, secure borders, and the evacuation of illegal settlements.',
                                    rationale: [
                                        'Addresses the root causes of the conflict through an end to blockade, apartheid practices, and human rights deprivations.',
                                        'Seeks a sustainable peace based on international law, ending collective punishment, and recognising equal rights.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Support the right to self-determination for the Kashmiri people and push to compel UK companies to cease trading arms used against them.',
                                    rationale: [
                                        'Recognises the ongoing human rights abuses and unlawful detentions resulting from India\'s revocation of Kashmir’s autonomy.',
                                        'Acknowledges the UK\'s historical responsibility to use diplomatic influence to seek peace and uphold UN resolutions.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'workers-rights-and-employment',
                    title: 'Jobs',
                    icon: 'briefcase',
                    highlight: 'Workers\' Rights & Employment: Transitioning to a 32-hour work week, establishing a Universal Basic Income, and ensuring trade union rights for all.',
                    subPills: [
                        {
                            title: 'Individual Rights & Protections',
                            description: 'Reducing the working week, increasing paid leave, and introducing a Universal Basic Income for economic security.',
                            content: [
                                {
                                    text: 'Reduce the full-time working week to 35 hours in the short term and 32 hours in the medium term, with no loss of pay.',
                                    rationale: [
                                        'Addresses overwork and stress, improves overall quality of life, and promotes a fairer distribution of available employment.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Introduce a Universal Basic Income payable to every citizen as a fundamental right to guarantee economic security.',
                                    rationale: [
                                        'Uncouples basic survival from formal employment, increasing individual freedom, and eradicating poverty and economic insecurity at its source.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Guarantee at least 28 days of paid holiday per year, abolish zero-hour contracts by mandating guaranteed minimum hours, and remove the 48-hour opt-out.',
                                    rationale: [
                                        'Ends exploitative, precarious employment practices and guarantees a stable, secure, and healthy balance between work and family life.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Trade Unions & Industrial Relations',
                            description: 'Guaranteeing union recognition, protecting the right to strike, and establishing specialised Labour Courts.',
                            content: [
                                {
                                    text: 'Enact a statutory right to join a trade union for all workers, guaranteeing union recognition and requiring employers to provide appropriate facilities.',
                                    rationale: [
                                        'Rebalances the structural power dynamics between capital and labour by ensuring every worker has access to robust, independent collective representation.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Protect the statutory right to strike and picket peacefully, protecting workers from unfair dismissal during industrial action, and outlawing lockouts.',
                                    rationale: [
                                        'Safeguards the fundamental human right to withdraw labour collectively without fear of punitive retaliation, discrimination, or loss of livelihood.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Establish separate, specialised Labour Courts and District Committees, composed of union, business, and community representatives.',
                                    rationale: [
                                        'Takes industrial relations out of the traditional, often hostile judiciary, placing it in the hands of balanced bodies focused on conciliation and justice.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Workplace Democracy & New Economy',
                            description: 'Instituting a maximum pay ratio, mandating worker representation on boards, and supporting worker cooperatives.',
                            content: [
                                {
                                    text: 'Require medium and large-sized companies to include employee-elected directors on their management boards.',
                                    rationale: [
                                        'Democratises economic power, ensuring that those who actually create an organisation\'s wealth have a direct say in how it is managed and distributed.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Institute a maximum 10:1 pay ratio in all organisations, legally limiting the highest paid staff to ten times the salary of the lowest paid worker.',
                                    rationale: [
                                        'Directly tackles extreme income inequality, preventing corporate executive greed from impoverishing the broader workforce.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Grant employees the legal right to buy out their companies and convert them into worker cooperatives, funded by a Green National Investment Bank.',
                                    rationale: [
                                        'Transforms the trajectory of the economy towards mutualism and democratic ownership, aligning business operations with community and environmental needs.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'crime-and-justice',
                    title: 'Justice',
                    icon: 'scale',
                    highlight: 'Crime and Justice: Focusing on restorative justice, social crime prevention, and rehabilitation rather than retribution.',
                    subPills: [
                        {
                            title: 'Restorative Justice & Prevention',
                            description: 'Addressing the social causes of crime and restoring harm rather than relying on punitive retribution.',
                            content: [
                                {
                                    text: 'Shift away from retributive punishment towards restorative justice, making amends directly to victims and the community.',
                                    rationale: [
                                        'Deals constructively with both victims and offenders to heal societal rifts.',
                                        'Intervenes minimally to build a stable, just society instead of outlawing individuals.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Restorative Justice Council', url: 'https://restorativejustice.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Establish Departments of Crime Prevention focusing on social pressures, alongside local mediation centres.',
                                    rationale: [
                                        'Shifts focus from purely reactive policing to mitigating poverty, inequality, and social crises.',
                                        'Provides non-adversarial resolution for civil, domestic, and neighbourhood disputes.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Repeal the Vagrancy Act 1824 and recognise homelessness as a social issue, not a crime.',
                                    rationale: [
                                        'Stops the state from criminalising and discriminating against homeless individuals.',
                                        'Prevents the abuse of police powers against the vulnerable.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Crisis', url: 'https://www.crisis.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Police & Accountability',
                            description: 'Ensuring democratic, diverse policing by consent and robust independent oversight.',
                            content: [
                                {
                                    text: 'Make police forces accountable to elected local government and end the disproportionate use of stop and search.',
                                    rationale: [
                                        'Builds meaningful trust with communities by enforcing laws fairly and proportionately.',
                                        'Ensures policing operates entirely by the consent of the community.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Liberty', url: 'https://www.libertyhumanrights.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Implement fully independent inquiries into police corruption, criminality, and deaths in police custody.',
                                    rationale: [
                                        'Guarantees transparent investigations free from internal bias.',
                                        'Holds police to the exact same legal standards and scrutiny as all UK citizens.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'INQUEST', url: 'https://www.inquest.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Require thorough anti-racism and equalities training, full implementation of the Lawrence report, and diverse recruitment.',
                                    rationale: [
                                        'Transforms the internal culture to accurately reflect Britain\'s diversity.',
                                        'Ensures hate crimes targeting marginalised communities are proactively investigated.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Sentencing & Prison Reform',
                            description: 'Significantly reducing incarceration, improving conditions, and focusing on reintegration.',
                            content: [
                                {
                                    text: 'Significantly reduce the prison population by prioritising community sentencing over custodial sentences.',
                                    rationale: [
                                        'Ends the high financial and social costs of ineffective imprisonment.',
                                        'Limits detention strictly to those presenting a grave danger to the public.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Prison Reform Trust', url: 'https://prisonreformtrust.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Replace existing women\'s prisons with suitable geographically dispersed, small, supportive community centres.',
                                    rationale: [
                                        'Recognises the extreme vulnerabilities, mental health requirements, and childcare obligations of female offenders.',
                                        'Allows community sentences to break the cycle of repeat offending far more effectively.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Women in Prison', url: 'https://www.womeninprison.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Improve prison conditions, restore prisoner voting rights, provide meaningful education, and end prison privatisation.',
                                    rationale: [
                                        'Maintains human dignity, prevents self-harm, and reduces institutionalisation.',
                                        'Integrates offenders back into society via real work and artistic opportunities rather than corporate profit models.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Howard League for Penal Reform', url: 'https://howardleague.org/' }
                                    ]
                                },
                                {
                                    text: 'End the custodial detention of young people under 18 in favour of small secure residential homes run by Social Services.',
                                    rationale: [
                                        'Ensures vulnerable young people receive the specialised care and education they need to mature safely.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Targeted Crime & Protection',
                            description: 'Tackling domestic abuse, hate crime, environmental destruction, and gun violence comprehensively.',
                            content: [
                                {
                                    text: 'Provide guaranteed refuge funding, multi-agency support, and relationship education to tackle domestic abuse.',
                                    rationale: [
                                        'Ensures victims face no financial barriers when escaping life-threatening abusive situations.',
                                        'Instils respect and non-violence at an early educational stage to break generational cycles.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Refuge', url: 'https://www.refuge.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Establish rigorous gun licensing requiring public safety tests, and instate a complete ban on automatic and replica weapons.',
                                    rationale: [
                                        'Shifts the burden to the applicant to relentlessly prove their safety and mental suitability.',
                                        'Eradicates gun culture and removes highly lethal firearms from the community entirely.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Gun Control Network', url: 'https://www.gun-control-network.org/' }
                                    ]
                                },
                                {
                                    text: 'Establish dedicated Wildlife and Animal Crimes Units and vigorously prosecute systemic environmental destruction.',
                                    rationale: [
                                        'Holds those most culpable for climate breakdown to rigorous international and domestic legal standards.',
                                        'Ensures the vigorous protection of habitats and prosecuted wildlife abuse.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Implement a comprehensive strategy to significantly reduce and end hate crime against minority groups.',
                                    rationale: [
                                        'Ensures all members of society, regardless of ethnicity, gender identity, or faith, can live free from intimidation.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'International & Financial Justice',
                            description: 'Advocating for global human rights and tackling white-collar economic crime.',
                            content: [
                                {
                                    text: 'Campaign forcefully via national and international instruments for the global abolition of the death penalty.',
                                    rationale: [
                                        'Opposes the ultimate irreversible and inhumane punishment.',
                                        'Upholds a justice system based on compassion and universal human rights.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Amnesty International', url: 'https://www.amnesty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Ensure proper and robust prosecution for financial sector fraud and banking mis-selling',
                                    rationale: [
                                        'Removes the impunity surrounding widespread corporate and white-collar economic crimes.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'land',
                    title: 'Land',
                    icon: 'map',
                    highlight: 'Land: Reforming land ownership, introducing Commons Trusts, implementing a Land Value Tax, and prioritising biodiversity and carbon sequestration in land transitions.',
                    subPills: [
                        {
                            title: 'Ownership & Commons Trusts',
                            description: 'Transforming land ownership with strict stewardship responsibilities and the creation of democratic Commons Trusts.',
                            content: [
                                {
                                    text: 'Enforce compulsory registration of all land, requiring full tax payment on UK earnings and defining ultimate beneficial owners.',
                                    rationale: [
                                        'Improves transparency and accountability, ensuring those who control land contribute fairly to the national economy.',
                                        'Addresses unjust, historical concentrations of wealth by exposing hidden ownership structures.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Establish Commons Trusts to manage unregistered land and enforce legally binding stewardship responsibilities on all land title holders.',
                                    rationale: [
                                        'Replaces the outdated system where unregistered land defaults to the Crown, returning it to democratic community control.',
                                        'Ensures land is managed for the "common good" with positive outcomes for biodiversity, not just private exploitation.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Empower Commons Trusts to issue warnings and, as a last resort, compulsorily purchase land for breaches of stewardship.',
                                    rationale: [
                                        'Provides real teeth to environmental and social stewardship requirements, holding company directors personally responsible for severe failures.',
                                        'Prioritises restorative justice to repair damaged lands.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Use Transition & Ecology',
                            description: 'Restoring peatlands, dedicating 25% of land per square kilometre to nature, and optimising land for biological carbon sequestration.',
                            content: [
                                {
                                    text: 'Target 25% of land in each square kilometre of the UK (except explicitly conserved areas) to comprise natural or semi-natural habitat.',
                                    rationale: [
                                        'Aligns with the Biosphere Functional Integrity Planetary Boundary to ensure pervasive biodiversity across all landscapes.',
                                        'Integrates nature recovery directly into urban, agricultural, and industrial land uses.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Urgently restore peatlands to a near-natural condition by immediately ceasing tree planting on peat and rewetting lowland farmland.',
                                    rationale: [
                                        'Stops massive, ongoing greenhouse gas emissions from degraded peatlands.',
                                        'Protects one of the UK’s most critical natural carbon sinks and unique ecological habitats.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Significantly increase land dedicated to producing renewable raw materials (e.g., wood, hemp, flax) to displace high-carbon imports.',
                                    rationale: [
                                        'Transitions the economy away from heavy reliance on concrete, steel, and plastics towards sustainable, bio-based alternatives.',
                                        'Supports rural livelihoods while driving national self-sufficiency and mitigating the climate emergency.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Planning & Fiscal Mechanisms',
                            description: 'Reforming the planning system, using Land Value Tax, and introducing regional Land Commissions to guide just transitions.',
                            content: [
                                {
                                    text: 'Introduce Land Commissions across the UK to review ownership distribution and advise on equitable decentralisation.',
                                    rationale: [
                                        'Provides the structural framework to safely and fairly dismantle historically entrenched monopolies on land ownership.',
                                        'Empowers local communities by ensuring ownership policies reflect democratic, regional needs.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Implement a Land Use Framework to coordinate the planning system, integrating a carbon tax on land-use change emissions.',
                                    rationale: [
                                        'Ensures all development and agricultural shifts align with national carbon-reduction and biodiversity targets.',
                                        'Maintains democratic control over scarce land resources while penalising environmentally destructive construction.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Deploy fiscal measures including Land Value Tax (LVT) and eco-taxes to drive sustainable land use and fund Commons Trusts.',
                                    rationale: [
                                        'Captures unearned wealth from land value speculation and redirects it into public goods and environmental restoration.',
                                        'Provides powerful financial incentives for property owners to adopt sustainable stewardship and punishing speculative hoarding.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'marine-and-coastal',
                    title: 'Marine',
                    icon: 'anchor',
                    highlight: 'Marine and Coastal: Establishing 30% of waters as fully protected Marine Protected Areas, reforming fisheries for sustainability, and halting destructive deep-sea practices.',
                    subPills: [
                        {
                            title: 'Governance & Protected Areas',
                            description: 'Devolving governance, establishing Commons Trusts, and protecting at least 30% of UK and Overseas Territories waters.',
                            content: [
                                {
                                    text: 'Commit to making at least 30% of UK domestic and Overseas Territories waters into fully protected, no-take Marine Protected Areas by 2030.',
                                    rationale: [
                                        'Provides highly vulnerable ecosystems and over-exploited commercial species the absolute sanctuary they need to safely recover and reproduce.',
                                        'Ensures the UK takes global leadership in marine conservation across its vast territorial footprint.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Transfer management of the seabed from the Crown Estate to new, democratic Commons Trusts that manage regions based on ecosystem-wide needs.',
                                    rationale: [
                                        'Returns control of marine resources to communities and prioritises long-term ecological sustainability over royal or private profit.',
                                        'Integrates land and sea under a coherent, democratic planning framework.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Prevent UK Overseas Territories from acting as "flags of convenience" and enforce rigorous maritime standards across all jurisdictions.',
                                    rationale: [
                                        'Closes loopholes that allow global shipping and fishing operators to evade environmental regulations and ethical labour standards.',
                                        'Elevates the global baseline for maritime accountability.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Sustainable Fisheries & Aquaculture',
                            description: 'Reforming fishing quotas based on science, banning destructive deep-sea practices, and supporting low-impact coastal fleets.',
                            content: [
                                {
                                    text: 'Ban bottom trawling, gillnetting, and long-lining for deep-sea species in UK waters, and enforce a ban on discards at sea.',
                                    rationale: [
                                        'Halts the indiscriminate destruction of delicate ocean floor ecosystems and top-predator species.',
                                        'Stops the wasteful practice of throwing dead, non-target fish back into the ocean entirely.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Reallocate fishing quotas to preferentially support sustainable, low-impact operations and local inshore fishing fleets.',
                                    rationale: [
                                        'Shifts the economic value of fisheries away from large, destructive industrial vessels back to local coastal communities.',
                                        'Protects traditional livelihoods while inherently enforcing gentler catch methods.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Phase out industrial fish farming that relies on wild-caught feed, overstocking, or toxic chemicals, supporting only small-scale sustainable aquaculture.',
                                    rationale: [
                                        'Prevents aquaculture from exacerbating wild overfishing or polluting surrounding coastal waters with disease and effluents.',
                                        'Ensures farmed fish are cultivated in harmony with local marine life rather than threatening it.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Erosion, Energy & Pollution',
                            description: 'Tighter controls on marine energy, phasing out offshore aggregate dredging, and halting sewage and plastic pollution.',
                            content: [
                                {
                                    text: 'Phase out offshore aggregate dredging and the export of seabed sand and gravel entirely.',
                                    rationale: [
                                        'Stops the stripping of the seabed which creates marine deserts devoid of flora and fauna.',
                                        'Prevents the deepening of waters that worsens coastal erosion and destroys vital shoreline habitats.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Require oil/gas operators to establish integrated Environmental Management Systems with strict liability for decommissioning and structural removal.',
                                    rationale: [
                                        'Ensures fossil fuel companies remain fully responsible for safely removing abandoned rigs and preventing chronic long-term leakage.',
                                        'Internalises the true cost of fossil fuel extraction on the marine environment.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Ban raw sewage discharges into marine environments and place higher penalties on industrial polluters, alongside phasing out plastic bags.',
                                    rationale: [
                                        'Protects human health at beaches and prevents mass mortality of marine mammals, birds, and corals.',
                                        'Ensures the ocean is treated as a complex, vital ecosystem rather than a limitless dumping ground.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'migration',
                    title: 'Migration',
                    icon: 'users',
                    highlight: 'Migration: Ending immigration detention, treating migrants fairly, removing income thresholds, and granting immediate voting rights and public funds access to visa residents.',
                    subPills: [
                        {
                            title: 'Humane System & Visa Simplification',
                            description: 'Abolishing detention, dividing the Home Office, and removing restrictive income and language hurdles.',
                            content: [
                                {
                                    text: 'End immigration detention and establish that migration is not a criminal offence under any circumstances.',
                                    rationale: [
                                        'Replaces a punitive, hostile environment with a fair and humane system of managed immigration.',
                                        'Treats migrants with dignity, ending the traumatising practice of locking people up for administrative reasons.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Replace the Home Office duties by creating a Department of Migration to handle non-profit visa applications.',
                                    rationale: [
                                        'Dismantles the structurally hostile Home Office culture regarding immigration.',
                                        'Ensures visa processes are straightforward, handled at-cost without profit, and minimised of legal complexities.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Remove all minimum income requirements and language tests from all visa applications.',
                                    rationale: [
                                        'Stops discriminating against families and workers based on wealth or origin.',
                                        'Replaces punitive language hurdles with free language classes to encourage genuine integration, rather than exclusion.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Rights for Visa Residents & Visitors',
                            description: 'Granting voting rights, abolishing "No Recourse to Public Funds", and providing a 3-month automatic visitor visa.',
                            content: [
                                {
                                    text: 'Grant all visa residents full rights to vote in all elections and referendums.',
                                    rationale: [
                                        'Treats all migrants as citizens in waiting, ensuring democratic empowerment and inclusion in their communities.',
                                        'Aligns political representation with the reality of living, working, and paying taxes in the country.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Abolish "No Recourse to Public Funds" conditions, giving all visa residents full access to the NHS and welfare system.',
                                    rationale: [
                                        'Ensures no one living in the UK is forced into destitution or denied medical care because of their visa status.',
                                        'Applies universal principles of care and social safety nets to everyone participating in society.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Automatically grant a three-month visitor visa upon arrival for those without a prior visa, with time to apply for other status.',
                                    rationale: [
                                        'Ends arbitrary border turn-backs and affords an immediate, legal transition period for all new arrivals.',
                                        'Provides standard, transparent short-term access for anyone arriving at the border (excluding national security threats).'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Pathways to Settled Status & Family',
                            description: 'Creating amnesty for undocumented migrants, ensuring automatic citizenship for UK-born children, and easing family reunions.',
                            content: [
                                {
                                    text: 'Offer undocumented migrants free support to regularise their status and grant settled status after five years.',
                                    rationale: [
                                        'Provides a practical, humane amnesty that brings exploited, underground populations back into formal legal protection.',
                                        'Ends the fear of deportation for established, undocumented community members.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Automatically grant British Citizenship to all children born in the UK, and ensure citizenship is inalienable.',
                                    rationale: [
                                        'Re-establishes birthright citizenship to stop the intergenerational transmission of precarious legal status.',
                                        'Eliminates the threat of the state stripping citizenship from vulnerable individuals.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Guarantee visa residents the right to bring family members to the UK to live with them.',
                                    rationale: [
                                        'Prioritises human rights and the unity of families over arbitrary immigration quotas.',
                                        'Recognises that establishing roots and integrating robustly relies on familial and community support.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'nationality',
                    title: 'Nationality',
                    icon: 'id-card',
                    highlight: 'Nationality: Transitioning from nationality to residence-based citizenship, providing equal rights including voting and UBI, and ensuring birthright nationality for all born in the UK.',
                    subPills: [
                        {
                            title: 'Residence-Based Citizenship',
                            description: 'Replacing the concept of legal nationality with a citizenship model based on physical residence and community commitment.',
                            content: [
                                {
                                    text: 'Progressively transfer all rights and responsibilities between individuals and government to depend on residence, not nationality.',
                                    rationale: [
                                        'Replaces an inherited, exclusionary system with one based on active participation and presence in a community.',
                                        'Treats all long-term residents equally, ensuring that those who live and work in the UK receive full citizenship benefits like UBI and the right to vote.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Promote equal rights for all residents and nationals, encompassing access to housing, employment, health care, and political activity.',
                                    rationale: [
                                        'Eliminates structural discrimination against migrant workers and non-national residents.',
                                        'Ensures a cohesive society where everyone contributing to the community shares the exact same social protections.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Reform of British Nationality',
                            description: 'Creating a single class of British nationality, allowing multiple nationalities, and making applications completely free.',
                            content: [
                                {
                                    text: 'Replace current legislation with a single inclusive class of British nationality that guarantees the right of residence for all holders.',
                                    rationale: [
                                        'Ends the discriminatory historical tiering of nationality that functioned to restrict the right of Black and ethnic minority people to live in the UK.',
                                        'Provides clarity and equal standing for all who hold British nationality.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Automatically grant British nationality to all children born in the UK, without requiring any fees for nationality applications.',
                                    rationale: [
                                        'Re-establishes birthright citizenship, ensuring no child born in the UK faces precariety or statelessness.',
                                        'Removes financial barriers that purposefully prevent the poorest families from securing their legal rights.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Permit British Nationals to hold multiple nationalities and ensure the system does not discriminate on grounds of race, religion, or sexual orientation.',
                                    rationale: [
                                        'Values global citizenship and complex identities without forcing people to legally renounce their heritage.',
                                        'Corrects historical racial and social biases embedded within the immigration system.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Employment & Equal Rights',
                            description: 'Accepting overseas qualifications and opening all public sector and Civil Service jobs to all residents.',
                            content: [
                                {
                                    text: 'Accept equivalent overseas educational and professional qualifications for public sector jobs and fund conversion courses where necessary.',
                                    rationale: [
                                        'Stops the enormous waste of imported skills, expertise, and labour.',
                                        'Allows qualified migrants to fully contribute to society and rebuild their professional careers without confronting systemic bureaucratic barriers.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Make Civil Service jobs wholly available to all suitably qualified residents, completely removing nationality restrictions.',
                                    rationale: [
                                        'Reflects the principle that the government should be open to all who legally reside in and serve the community.',
                                        'Diversifies the ranks of public administration to reflect the actual, lived demographics of the population.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'health',
                    title: 'NHS',
                    icon: 'heart-pulse',
                    highlight: 'Health: A holistic, fully publicly-funded NHS, focusing on preventative care, mental health parity, and comprehensive reproductive rights free from market forces.',
                    subPills: [
                        {
                            title: 'NHS Funding & Structure',
                            description: 'Repealing privatisation, ensuring free healthcare, and keeping the NHS out of trade agreements.',
                            content: [
                                {
                                    text: 'Repeal the Health and Care Act 2022 and remaining provisions of the Health and Social Care Act 2012, replacing them with a new Health and Care Act.',
                                    rationale: [
                                        'Reverses creeping privatisation and ensures the NHS remains a fully public service, devoid of market forces.',
                                        'Ensures healthcare is driven by need, not corporate profit or competitive tendering.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Maintain health spending at around the European Union average, funded fully by taxation and free at the point of entry.',
                                    rationale: [
                                        'Corrects historic underfunding and places the UK system on par with developed peer nations.',
                                        'Reaffirms the founding principles of universal, equitable healthcare access.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Explicitly exclude the NHS and all aspects of care from all international trade agreements.',
                                    rationale: [
                                        'Protects the national service from being partitioned and sold to foreign private medical conglomerates.',
                                        'Guarantees domestic democratic sovereignty over healthcare delivery.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Prevention, Maternity & Reproductive Rights',
                            description: 'Prioritising early health, independent midwife continuity, and decriminalising abortion.',
                            content: [
                                {
                                    text: 'Shift the focus of health services towards illness prevention and health promotion, allocating more resources to community care.',
                                    rationale: [
                                        'Addresses the social and ecological root causes of ill health rather than just offering biochemical treatments.',
                                        'Promotes long-term societal wellbeing and reduces the structural strain on acute hospital facilities.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Ensure all women are entitled to the care of a single midwife through prenatal care, birth, and postnatal care.',
                                    rationale: [
                                        'Reinstates the proven model of continuous care which greatly improves childbirth experiences and safety.',
                                        'Stops the fragmentation of maternity services that leaves mothers unsupported.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Remove abortion from the 1861 Offences Against the Person Act, decriminalising it and treating it as a standard medical procedure.',
                                    rationale: [
                                        'Ends the threat of imprisonment for terminating a pregnancy.',
                                        'Secures absolute moral autonomy and reproductive freedom without criminal stigmatisation.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'BPAS', url: 'https://www.bpas.org/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Mental Health & Social Care Focus',
                            description: 'Ensuring mental health parity, expanding talking therapies, and banning conversion therapies.',
                            content: [
                                {
                                    text: 'Provide readily available talking therapies within 28 days as an addition or alternative to medication.',
                                    rationale: [
                                        'Treats the psychological roots of distress rather than defaulting to pharmaceutical management.',
                                        'Prevents minor crises from escalating into severe mental health emergencies due to long waiting lists.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Mind', url: 'https://www.mind.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Make illegal any form of \'Conversion\' therapy aimed at curing the sexuality or gender identity of an individual.',
                                    rationale: [
                                        'Bans an unethical, scientifically discredited practice that causes severe psychological harm.',
                                        'Protects vulnerable adults and minors from institutionalised homophobia and transphobia.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Stonewall', url: 'https://www.stonewall.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Ensure 24/7 access to quality mental health crisis care and reverse the decline in inpatient psychiatric bed numbers.',
                                    rationale: [
                                        'Provides immediate safety for those in acute distress regardless of their circumstances.',
                                        'Recognises that community care must be supported by adequate safe inpatient provision when necessary.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'End of Life & Patient Autonomy',
                            description: 'Expanding palliative care, introducing presumed organ donation, and establishing an assisted dying framework.',
                            content: [
                                {
                                    text: 'Implement a system of "soft" presumed consent (opt-out) for organ donation across the UK.',
                                    rationale: [
                                        'Dramatically increases the availability of vital organs for transplant, saving thousands of lives.',
                                        'Respects bodily autonomy via a clear opt-out mechanism while shifting the default towards saving others.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'NHS Blood and Transplant', url: 'https://www.nhsbt.nhs.uk/' }
                                    ]
                                },
                                {
                                    text: 'Establish a legal framework allowing the right to an assisted death, with strict safeguards, independent advocacy, and mandatory counselling.',
                                    rationale: [
                                        'Provides compassionate, dignified options for individuals suffering from incurable, terminal illnesses.',
                                        'Creates rigorous systemic protections to ensure absolute patient autonomy and prevent exploitation.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Dignity in Dying', url: 'https://www.dignityindying.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Provide universal palliative care training for all clinical and care staff to expand holistic, non-discriminatory end-of-life support.',
                                    rationale: [
                                        'Ensures the process of dying is managed with the highest clinical and ethical competence across all settings.',
                                        'Guarantees dignity, respect, and spiritual/emotional support for the dying and their families.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'local-planning-and-built-environment',
                    title: 'Planning',
                    icon: 'building-2',
                    highlight: 'Local Planning & Built Environment: Mandating sustainable, zero-carbon building standards, protecting green spaces, and empowering communities in the planning process.',
                    subPills: [
                        {
                            title: 'Planning Policy & Community Empowerment',
                            description: 'Revising national frameworks for carbon budgets, empowering local neighbourhood plans, and curbing developer dominance.',
                            content: [
                                {
                                    text: 'Require local and neighbourhood plans to be co-produced with communities and remain within set bioregional carbon and energy budgets.',
                                    rationale: [
                                        'Shifts planning power away from remote national inspectorates toward local, democratic decision-making that respects environmental limits.',
                                        'Ensures local growth does not breach national and global carbon commitments.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Publish all developer viability assessments and strictly limit maximum developer surpluses to 15%.',
                                    rationale: [
                                        'Ends the practice of developers avoiding affordable housing and community infrastructure obligations by hiding behind opaque profitability claims.',
                                        'Rebalances the economic incentives away from excessive speculation and towards social value.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Legislate to grant communities in England and Wales the power to buy land, including rights of first refusal and Compulsory Sale Orders.',
                                    rationale: [
                                        'Allows communities to bring abandoned, neglected, or hoarded land back into productive, community-owned use.',
                                        'Provides local people with direct agency over the spatial development of their areas.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Sustainable Urban Development',
                            description: 'Mandating 25% nature habitat in developments, prioritising true brownfield sites, and restricting inappropriate sprawl.',
                            content: [
                                {
                                    text: 'Require all large new developments to contain at least 25% natural or semi-natural habitat, independently of off-site offsetting.',
                                    rationale: [
                                        'Integrates nature recovery and biodiversity directly into human-made environments, fulfilling planetary health goals.',
                                        'Prevents the creation of sterile ecological dead-zones in new suburban and urban extensions.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Require new developments to strictly follow a mitigation hierarchy for wildlife and avoid releasing high-ecological value brownfield land.',
                                    rationale: [
                                        'Preserves critical urban ecosystems that are often misclassified as simply "brownfield" and bulldozed for development.',
                                        'Ensures true biodiversity net-gain rather than accounting tricks.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Prohibit new out-of-town retail parks and car-based superstores, while capping new retail parking provisions.',
                                    rationale: [
                                        'Ends the structural prioritisation of carbon-intensive car dependency.',
                                        'Revitalises local, pedestrian-friendly high streets and protects independent businesses from mega-retailers.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Building Standards & Retrofitting',
                            description: 'Enforcing zero-carbon use, whole-life carbon reporting, and prioritising massive retrofitting over new construction.',
                            content: [
                                {
                                    text: 'Require all planning applications to submit whole-life carbon and energy calculations, with sanctions for developers who exceed budgets.',
                                    rationale: [
                                        'Forces the construction industry to confront both embodied carbon in materials and operational energy use over a building’s entire lifecycle.',
                                        'Prevents the rubber-stamping of structurally inefficient buildings.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Prioritise the retrofit, modification, and refurbishment of existing buildings over new construction and demolition.',
                                    rationale: [
                                        'Dramatically reduces emissions by maintaining the massive amounts of embodied carbon already trapped within the existing built environment.',
                                        'Prevents the unnecessary generation of huge volumes of construction and demolition waste.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Implement strict new building regulations prioritising low-carbon materials (e.g. timber) and Circular Economy principles (e.g. design for disassembly).',
                                    rationale: [
                                        'Transitions the construction industry from a linear, extraction-heavy model to a sustainable, regenerative cycle.',
                                        'Ensures that future buildings act as carbon sinks and material banks rather than environmental liabilities.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'pollution',
                    title: 'Pollution',
                    icon: 'factory',
                    highlight: 'Pollution: Establishing an Environmental Protection Commission, mandating toxic chemical audits, and ending "dilute and disperse" waste practices.',
                    subPills: [
                        {
                            title: 'National Regulation & Transparency',
                            description: 'Establishing a powerful Environmental Protection Commission (EPC) and guaranteeing the public right to know about emissions.',
                            content: [
                                {
                                    text: 'Establish a national Environmental Protection Commission (EPC) to replace existing pollution inspectorates and license environmentally benign processes.',
                                    rationale: [
                                        'Consolidates environmental oversight into a powerful, independent body focused strictly on minimum waste and maximum efficiency.',
                                        'Ensures all new and established products are rigorously vetted for environmental safety before market approval.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Require industries to systematically audit their toxic chemical usage and publish binding timetables to reduce and phase them out.',
                                    rationale: [
                                        'Forces internal accountability within polluting industries and drives rapid transition towards non-toxic alternatives.',
                                        'Shifts the burden of proof onto producers to justify their chemical reliance.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Guarantee comprehensive public rights to know about local chemical usage, emissions, and associated health or environmental impacts.',
                                    rationale: [
                                        'Empowers local communities to understand exactly what they are breathing and drinking.',
                                        'Removes the veil of corporate secrecy that protects systemic polluters from public scrutiny.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Local Enforcement & Accountability',
                            description: 'Empowering Community Health and Environmental Councils (CHECs) to regulate operations and enforce severe corporate liability.',
                            content: [
                                {
                                    text: 'Set up local Community Health and Environmental Councils (CHECs) fully empowered to inspect facilities, sample waste, and revoke operating licenses immediately without Crown immunity.',
                                    rationale: [
                                        'Democratises environmental enforcement by placing direct regulatory power into the hands of affected local representatives.',
                                        'Ensures that no entity, including the state, is above the law when it comes to polluting the environment.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Hold polluters strictly liable for the costs of control and all resulting environmental or health damages, however remote in time or distance.',
                                    rationale: [
                                        'Enforces the absolute "polluter pays" principle, preventing corporations from socialising the devastating costs of their profit-driven pollution.',
                                        'Deters reckless industrial expansion into complex or fragile ecosystems.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Progressively revise all hazardous workplace Threshold Limit Values downwards to account for chronic, long-term, and interacting synergistic effects.',
                                    rationale: [
                                        'Acknowledges that standard exposure limits routinely ignore the complex, compounded biology of chronic industrial exposure.',
                                        'Prioritises supreme worker safety over baseline operating conveniences.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Waste & Atmospheric Targets',
                            description: 'Aligning with WHO PM2.5 guidelines, ending "dilute and disperse", and banning toxic imports.',
                            content: [
                                {
                                    text: 'Legally bind the UK to meet World Health Organisation (2021) guidelines for PM2.5 atmospheric pollution within a single decade.',
                                    rationale: [
                                        'Addresses the catastrophic public health crisis driven by particulate matter causing respiratory and cardiovascular diseases.',
                                        'Acts as a fundamental step towards stabilising the Atmospheric Aerosol Planetary Boundary.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'End all "dilute and disperse" waste disposal and mandate strictly separate recycling, treating, and processing of all refuse types.',
                                    rationale: [
                                        'Abandons the archaic and ecologically ruinous practice of treating the oceans and atmosphere as limitless dumping grounds.',
                                        'Protects public sewerage, water tables, and rivers from accumulating toxic and semi-organic industrial sludge.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Immediately ban the import of toxic, hazardous, or radioactive waste into the UK for treatment, reprocessing, or disposal.',
                                    rationale: [
                                        'Stops the UK from operating as a global toxic dump or profiting from international waste trading.',
                                        'Forces countries to develop localised, sustainable waste-processing infrastructures at the source of generation.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'population',
                    title: 'Population',
                    icon: 'users-round',
                    highlight: 'Population: Addressing the climate impact of over-consumption, guaranteeing universally free and comprehensive family planning, and structuring a sustainable economy for an ageing demographic.',
                    subPills: [
                        {
                            title: 'Family Planning & Education',
                            description: 'Providing a comprehensive, free family planning service in convenient high-street locations and mandating sex education.',
                            content: [
                                {
                                    text: 'Establish a comprehensive, free family planning service in convenient high-street locations, fully funded by a protected NHS budget.',
                                    rationale: [
                                        'Ensures that having children remains entirely a matter of free, informed choice without financial barriers or stigma.',
                                        'Recognises that accessible family planning is a fundamental aspect of human rights and public health.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Mandate comprehensive relationship and sex education in schools covering wider emotional and societal aspects, not just the biological.',
                                    rationale: [
                                        'Empowers young people with the knowledge and emotional tools necessary to protect their health and build equitable relationships.',
                                        'Addresses the root causes of unintended pregnancies through proactive education.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Supply condoms free on demand from chemists and at subsidised prices from machines in public places.',
                                    rationale: [
                                        'Removes the final barriers of cost and access for essential contraception.',
                                        'Promotes safe sexual health practices uniformly across all demographic groups.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Ecological Footprint',
                            description: 'Reducing the total resource consumption of the UK to respect the Earth\'s carrying capacity without aggressive population targets.',
                            content: [
                                {
                                    text: 'Legally commit to reducing the UK’s total ecological footprint as a primary mechanism for reaching a sustainable population impact.',
                                    rationale: [
                                        'Recognises that the UK consumes far more than its sustainable share of global resources.',
                                        'Focuses on reducing per capita impact and material consumption rather than establishing draconian population limits.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Require the Office of National Statistics (ONS) to monitor population trends alongside natural resource and footprint accounts.',
                                    rationale: [
                                        'Ensures that demographic planning is inextricably linked to the physical realities of the climate and ecological emergency.',
                                        'Bases future housing, health, and economic policies on hard data regarding ecological limits.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Transition to regional and economic planning that does not rely on an influx of exploited labour from overseas just to maintain growth.',
                                    rationale: [
                                        'Breaks the destructive assumption that economic health requires an ever-expanding base of workers to function.',
                                        'Allows the UK economy to stabilise even if population levels remain static or fall.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Demographic Transition & Global Duty',
                            description: 'Adapting the economy for an ageing population and increasing overseas aid for global women\'s reproductive rights.',
                            content: [
                                {
                                    text: 'Reject the economic model that demands an ever-growing younger population to support the retired, replacing it with flexible policies for an ageing demographic.',
                                    rationale: [
                                        'Acknowledges that continuous demographic growth is ecologically impossible on a finite planet.',
                                        'Supports flexible working and preventive healthcare to make an ageing population socially and economically manageable.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Substantially increase overseas aid to support the reproductive health rights, education, and sustainable development of poorer nations.',
                                    rationale: [
                                        'Addresses global drivers of population growth—poverty, inequality, and lack of education—at their source.',
                                        'Acknowledges the immense ecological debt owed by high-consuming rich nations to the global south.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'natural-resources-and-waste',
                    title: 'Resources',
                    icon: 'recycle',
                    highlight: 'Natural Resources & Waste: Transitioning to a circular economy, opposing incineration, returning water to public ownership, and implementing strict resource taxation.',
                    subPills: [
                        {
                            title: 'Circular Economy & Taxation',
                            description: 'Introducing Resource Taxation, mandating recycled contents, and reducing the UK material footprint by 30%.',
                            content: [
                                {
                                    text: 'Introduce a system of Resource Taxation applied at extraction or import points, with zero or reduced rates on recycled and reused materials.',
                                    rationale: [
                                        'Internalises the profound environmental costs of primary extraction into market prices.',
                                        'Provides a massive financial incentive for industries to prioritise waste reduction, material recycling, and product longevity.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Pass a Waste Avoidance and Recycling Act to ban unnecessary disposable products and impose variable Recovery Charges on packaging.',
                                    rationale: [
                                        'Holds producers legally responsible for the waste they design.',
                                        'Generates dedicated funding for local authority waste recovery schemes.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Legally commit to reducing the UK’s material consumption footprint by 30% within the next decade.',
                                    rationale: [
                                        'Aligns the national economy with the Global Biodiversity Framework goals.',
                                        'Limits the absolute physical burden placed upon the planet and prevents the depletion of finite resources.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Waste Management Strategy',
                            description: 'Creating Regional Waste Disposal Authorities, targeting zero waste, and ending massive residual waste incineration.',
                            content: [
                                {
                                    text: 'Shift the duty of waste disposal to democratically controlled Regional Waste Disposal Authorities funded by local districts.',
                                    rationale: [
                                        'Creates a structural and direct financial incentive for local councils to aggressively reduce waste sizes at the source.',
                                        'Improves regional coordination for advanced mechanical, biological, and anaerobic digestion treatments.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Reject the large-scale incineration of residual municipal waste and aim for absolute zero waste sent to landfill or incinerators.',
                                    rationale: [
                                        'Recognises that large-scale incineration is dangerously polluting and actively destroys usable materials.',
                                        'Ends the perverse incentive created by long-term incinerator contracts that require high volumes of waste to stay profitable.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Require authorities to sort and isolate dry recyclables and compostable waste, targeting an over 80% recycling/composting rate.',
                                    rationale: [
                                        'Maximises high-value material recovery and shifts treatment of biological matter towards biogas generation and composting.',
                                        'Reserves only a small fraction of strictly inert residual waste for processing.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Public Ownership & Mineral Rights',
                            description: 'Returning water to public ownership, placing mineral rights into Commons Trusts, and opposing seabed mining.',
                            content: [
                                {
                                    text: 'Bring all water resources, from reservoir to tap, back into full public ownership administered by democratically elected local bodies.',
                                    rationale: [
                                        'Eliminates corporate profit motives that inevitably lead to systemic environmental negligence and raw sewage discharges.',
                                        'Ensures water is managed as a vital human right and public common rather than a financial asset.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Transfer all mineral extraction rights so they are held in trust by Commons Trusts, subject to strict local and national consent.',
                                    rationale: [
                                        'Empowers frontline communities to protect their local environments from extractive exploitation.',
                                        'Ensures legally binding requirements for rigorous ecological restoration following any industrial harvesting.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Push for an immediate international moratorium on seabed mineral mining and resource extraction from global wilderness areas.',
                                    rationale: [
                                        'Protects uniquely vulnerable global ecosystems, such as Antarctica and the deep ocean floor, from irreversible destruction.',
                                        'Holds trans-national companies accountable for systemic environmental damage and harm to indigenous populations.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'rights-and-responsibilities',
                    title: 'Rights',
                    icon: 'scale',
                    highlight: 'Rights & Responsibilities: Enshrining the Rights of Nature in law, ending trans healthcare segregation, establishing universal access to justice, and decriminalising sex work.',
                    subPills: [
                        {
                            title: 'Rights of Nature & Environmental Duties',
                            description: 'Recognising that the Earth and its ecosystems have an inherent legal right to exist, regenerate, and be restored.',
                            content: [
                                {
                                    text: 'Legally recognise the Rights of Nature, empowering communities to defend ecosystems in court against corporate exploitation.',
                                    rationale: [
                                        'Shifts environmental protection from an anthropocentric regulatory scheme to a fundamental legal defence of the living world.',
                                        'Stops corporations from using legal privileges to violate the fundamental rights of natural habitats.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Establish the universal principle that human rights must be integrated with our active responsibility to protect life support systems.',
                                    rationale: [
                                        'Rejects the liberal tradition that treats rights purely as individual freedom of action, recognising that infinite exploitation is impossible on a finite planet.',
                                        'Ensures all political actions are evaluated by their impact on the biosphere and future generations.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Recognise a child’s fundamental human right to access nature, outdoor spaces, and environmental education.',
                                    rationale: [
                                        'Combats "Nature Deficit Disorder" and recognises that physical and mental well-being are intrinsically tied to ecological immersion.',
                                        'Addresses the systemic inequality that denies poorer communities access to green spaces.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'LGBTQIA+ Rights & Healthcare',
                            description: 'Implementing absolute self-determination for gender recognition, moving trans healthcare to primary care, and banning conversion therapy.',
                            content: [
                                {
                                    text: 'Allow individuals to legally update their gender via statutory declaration, recognising non-binary identities and ending medical gatekeeping.',
                                    rationale: [
                                        'Recognises that gender identity is a matter of profound personal truth, not a psychiatric condition requiring state permission.',
                                        'Provides dignity and legal reality to all trans, non-binary, and intersex citizens.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Close segregated Gender Identity Clinics (GICs) and move gender-affirming care (including informed-consent HRT) into standard primary NHS care.',
                                    rationale: [
                                        'Dismantles a catastrophic, segregated healthcare model that actively harms trans people through years-long waitlists.',
                                        'Treats gender-affirming care as standard, vital medical provision handled by local GPs.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Implement a comprehensive, loophole-free ban on all forms of conversion therapy for the entire LGBTQIA+ community.',
                                    rationale: [
                                        'Outlaws a torturous, coercive practice that has driven countless queer and trans youth to depression and suicide.',
                                        'Refuses to grant religious or psychiatric exemptions for human rights abuses.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Civil Liberties, Justice & Equality',
                            description: 'Guaranteeing universal legal aid, decriminalising sex work, and fighting systemic racism and discrimination.',
                            content: [
                                {
                                    text: 'Guarantee comprehensive legal aid and prompt access to justice regardless of a person’s financial situation.',
                                    rationale: [
                                        'Recognises that a legal system where rights are only accessible to the wealthy is fundamentally unjust and illegitimate.',
                                        'Provides vital protection for citizens facing eviction, police disputes, or benefit cuts.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Fully decriminalise all aspects of sex work involving consenting adults, and support licensing for safe, commercial brothels.',
                                    rationale: [
                                        'Removes the criminalisation that forces sex workers into the shadows, empowering them to unionise, report abuse, and work safely.',
                                        'Focuses law enforcement entirely on eradicating coercion, violence, and human trafficking.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Enact specific statutory duties to protect Gypsy, Roma, and Traveller communities, and repeal discriminatory public order injunctions.',
                                    rationale: [
                                        'Ends the state-sanctioned criminalisation of traditional nomadic lifestyles.',
                                        'Ensures equal access to life outcomes, appropriate housing, and cultural preservation for heavily marginalised groups.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'science-and-technology',
                    title: 'Science',
                    icon: 'microscope',
                    highlight: 'Science & Technology: Regulating AI robustly, prioritising environmental research over military R&D, and applying the Precautionary Principle to new tech.',
                    subPills: [
                        {
                            title: 'Research & Funding',
                            description: 'Increasing public R&D spending, diverting military research to civilian use, and enforcing the Haldane principle.',
                            content: [
                                {
                                    text: 'Increase public spending on R&D to at least 1% of GDP, ensuring long-term funding streams and separating international subscriptions.',
                                    rationale: [
                                        'Ensures foundational scientific inquiry is well-funded independent of short-term corporate or political whims.',
                                        'Provides the necessary capital for long-term ecological and sustainable technology development.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Reduce military ("defence") research to a sustainable minimum, re-allocating freed resources to civilian and environmental research.',
                                    rationale: [
                                        'Shifts vast intellectual and financial resources away from systems of destruction towards systems of preservation and societal benefit.',
                                        'Prioritises solving the climate and ecological crises over geopolitical arms races.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Adhere strictly to the Haldane principle, ensuring research councils, not politicians, determine which projects receive funding.',
                                    rationale: [
                                        'Protects scientific integrity from political interference and ideological agendas.',
                                        'Ensures grants are awarded based on scientific merit and societal need.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Technology & Precaution',
                            description: 'Applying the Precautionary Principle to new technologies, banning inbuilt obsolescence, and imposing a moratorium on GMOs.',
                            content: [
                                {
                                    text: 'Apply a formalised Precautionary Principle to technologies posing plausible risks of ecocide, catastrophe, or human extinction.',
                                    rationale: [
                                        'Acknowledges that existential threats to humanity and the biosphere must be proactively regulated before deployment.',
                                        'Places the burden of proof for safety on the developers of high-risk novel entities.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Ban inbuilt obsolescence in tech, establishing a Standards Commission to mandate durability, repairability, and lifecycle recycling.',
                                    rationale: [
                                        'Combats the massive environmental devastation caused by e-waste and endless consumption cycles.',
                                        'Promotes a circular economy where products are treated as long-term investments rather than disposable commodities.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Enforce a strict moratorium on the environmental release and importation of GMOs pending comprehensive ecological and health safety checks.',
                                    rationale: [
                                        'Protects biodiversity and local ecosystems from irreversible contamination by untested synthetic genetics.',
                                        'Prevents a few multinational corporations from monopolising global agriculture through patented organisms.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Artificial Intelligence Regulation',
                            description: 'Establishing comprehensive regulation for AI, prohibiting lethal autonomous weapons, and protecting workers displaced by automation.',
                            content: [
                                {
                                    text: 'Establish a legally-enforceable regulatory system for AI that mandates safety audits, transparency, and energy-performance labelling.',
                                    rationale: [
                                        'Ensures AI serves humans and nature, preventing systemic risks from unchecked generative or general-purpose AI.',
                                        'Highlights the massive energy and water consumption costs of training and running AI models.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Prohibit by law the use of lethal autonomous weapon systems, deceptive AI designed for manipulation, and routine biometric identification.',
                                    rationale: [
                                        'Draws a hard ethical line against the use of algorithms for mass surveillance, emotional coercion, and automated killing.',
                                        'Protects democratic institutions from deepfakes and algorithmic manipulation.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Protect workers displaced by AI and automation using robust mechanisms like Universal Basic Income (UBI).',
                                    rationale: [
                                        'Recognises that technological disruption shouldn’t lead to mass poverty or loss of livelihood.',
                                        'Allows the benefits of increased productivity to be shared collectively rather than hoarded by tech monopolies.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'tourism-and-heritage',
                    title: 'Tourism',
                    icon: 'map-pinned',
                    highlight: 'Tourism & Heritage: Fostering sustainable, low-carbon tourism, protecting ecosystems from over-tourism, and pursuing the restitution of misappropriated cultural objects.',
                    subPills: [
                        {
                            title: 'Sustainable Infrastructure & Funding',
                            description: 'Establishing a regeneration fund, zero VAT on restorations, and tailored energy efficiency frameworks for historic buildings.',
                            content: [
                                {
                                    text: 'Establish a Green Heritage & Tourism Regeneration Fund to support long-term conservation, community ownership, and low-carbon tourism.',
                                    rationale: [
                                        'Provides necessary, non-competitive funding to restore historic town centres. post-industrial areas, and at-risk heritage sites.',
                                        'Ensures tourism investment aligns with the UK’s carbon-neutral and biodiversity targets.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Reduce VAT to 0% for all repair, maintenance, and restoration work on listed and heritage buildings.',
                                    rationale: [
                                        'Removes the financial penalty on sustainable building conservation compared to new-build construction.',
                                        'Incentivises the preservation and adaptive reuse of existing historic properties.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Reform EPC assessments for heritage buildings to measure whole-life carbon and exempt them from inappropriate fabric interventions.',
                                    rationale: [
                                        'Protects historic building fabric from damaging installations like plastic windows or non-breathable insulation.',
                                        'Prioritises overall operational carbon reduction while funding heritage-appropriate energy upgrades.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Local Control & Inclusive Narratives',
                            description: 'Regulating short-term lets, empowering local authorities, and ensuring heritage reflects diverse, pluralistic histories.',
                            content: [
                                {
                                    text: 'Introduce a mandatory national licensing scheme for short-term lets (e.g., Airbnb) and grant councils power to cap their numbers.',
                                    rationale: [
                                        'Protects local communities from housing stress and the hollowing-out effects of unchecked holiday rentals.',
                                        'Ensures short-term lets comply with health, safety, and local planning needs.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Introduce a Tourist Levy on overnight stays to fund local infrastructure, green spaces, and sustainable tourism initiatives.',
                                    rationale: [
                                        'Allows communities to directly capture tourism revenue to offset the local costs of high visitor numbers.',
                                        'Keeps funds managed locally to maintain and improve the areas tourists are visiting.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Ensure heritage interpretations reflect pluralistic histories, actively uncovering voices of minority, LGBTQ+, and working-class communities.',
                                    rationale: [
                                        'Moves beyond narrow, dominant Eurocentric narratives to celebrate a diverse and lived shared heritage.',
                                        'Fosters civic pride and intergenerational learning by empowering marginalised communities to tell their stories.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Restitution, Planning & Transport',
                            description: 'Returning misappropriated cultural objects, protecting heritage in planning, and limiting cruise/aviation impact.',
                            content: [
                                {
                                    text: 'Establish a framework and a \'Restitution of Cultural Objects Panel\' to facilitate the return of items misappropriated during colonial expansion.',
                                    rationale: [
                                        'Provides a moral and legal pathway for ethical stewardship and the repatriation of contested global artifacts.',
                                        'Obligates institutions like the British Museum to de-accession and restore cultural objects to their rightful origins.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Strengthen the National Planning Policy to prioritise statutory protections for heritage assets and natural environments against development.',
                                    rationale: [
                                        'Ensures the preservation of irreplaceable built heritage and fragile ecosystems from being overridden by commercial interests.',
                                        'Demands comprehensive environmental and heritage impact assessments for all planning applications.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Heavily regulate cruise ship pollution, remove zero-rated VAT on airline tickets, and prioritise public/active transport for tourist sites.',
                                    rationale: [
                                        'Radically reduces the massive environmental footprint of the travel industry.',
                                        'Drives a transition towards a low-carbon, accessible tourism model centre.d on rail, cycling, and green transport hubs.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'transport',
                    title: 'Transport',
                    icon: 'train',
                    highlight: 'Transport: Re-nationalising the railways, prioritising walking and cycling in all planning, and ending the use of fossil-fuel road vehicles by 2035.',
                    subPills: [
                        {
                            title: 'Active Travel & Modal Hierarchy',
                            description: 'Prioritising walking, cycling, and public transport through a strict modal hierarchy and "Streets for All" planning.',
                            content: [
                                {
                                    text: 'Implement a strict transport planning hierarchy that prioritises walking, disabled access, cycling, and public transport above private cars and planes.',
                                    rationale: [
                                        'Ensures infrastructure investments benefit the most sustainable, healthy, and equitable modes of travel first.',
                                        'Reverses decades of car-centric planning that has marginalised pedestrians and cyclists.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Adopt a "Streets for All" approach, introducing 20mph limits in built-up areas and reallocating road space away from cars.',
                                    rationale: [
                                        'Reclaims streets as safe, outdoor living spaces for residents rather than mere thoroughfares for dangerous, high-speed traffic.',
                                        'Dramatically reduces road casualties and encourages active travel by improving the public realm.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Mandate comprehensive walking and cycling infrastructure, including safe route networks, junction priority, and secure cycle parking.',
                                    rationale: [
                                        'Removes the safety fears and practical barriers that currently deter people from walking and cycling.',
                                        'Treats active travel as a serious, primary mode of transport rather than an afterthought.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Public Transport & Re-nationalisation',
                            description: 'Re-nationalising the railway network, increasing rural accessibility, and ending the fragmented privatisation of transport.',
                            content: [
                                {
                                    text: 'Bring the entire rail network (track and operators) back into public ownership and cancel existing private franchises.',
                                    rationale: [
                                        'Ends a disastrous, fragmented privatisation experiment that extracted profits while delivering poor safety and reliability.',
                                        'Allows the railway to be run universally as a public service rather than a vehicle for private shareholders.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Invest massively in public transport infrastructure, reopening disused lines, expanding capacity, and ensuring all stations are fully accessible.',
                                    rationale: [
                                        'Provides a genuine, high-quality alternative that can successfully draw millions of journeys away from the road network.',
                                        'Ensures public mobility is not restricted by a person’s physical ability.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Substantially increase the Rural Transport Grant to guarantee frequent, integrated, and reliable bus and rail services for remote communities.',
                                    rationale: [
                                        'Recognises that shifting away from cars is impossible in rural areas without robust, heavily subsidised public transport.',
                                        'Prevents the social and local economic isolation of communities outside major urban centres.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Decarbonisation & Traffic Reduction',
                            description: 'Ending the use of fossil-fuel vehicles by 2035, introducing a scrappage scheme, and implementing a "polluter pays" tax system.',
                            content: [
                                {
                                    text: 'End the use of fossil-fuel burning cars and vans by 2035, accelerating the transition to zero-tailpipe-emission vehicles by 2027.',
                                    rationale: [
                                        'Takes necessary, decisive action to eliminate the massive greenhouse gas and particulate emissions produced by road transport.',
                                        'Forces the automotive industry to rapidly transition to truly sustainable technologies.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Introduce a vehicle scrappage scheme that compensates owners with grants towards zero-emission vehicles, bicycles, or public transit passes.',
                                    rationale: [
                                        'Provides a fair, financially viable pathway for citizens to transition away from heavily polluting legacy vehicles.',
                                        'Simultaneously encourages a shift towards active modes and public transit.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Apply the "polluter pays" principle through increased road fuel taxes, graded vehicle purchase taxes, and new aviation fuel levies.',
                                    rationale: [
                                        'Forces the transport sector to internalise its massive environmental "externalities" (air pollution, noise, congestion, road damage).',
                                        'Generates the hypothecated funding necessary to continually improve and subsidise sustainable alternatives.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'social-welfare',
                    title: 'Welfare',
                    icon: 'hand-heart',
                    highlight: 'Social Welfare: Introducing free social care, supporting independent living, and providing universal early education and childcare.',
                    subPills: [
                        {
                            title: 'Independent Living & Social Care',
                            description: 'Providing free personal care for disabled adults, ending institutionalisation, and adopting the social model of disability.',
                            content: [
                                {
                                    text: 'Make personal care and support for disabled adults entirely free at the point of use and fully publicly funded.',
                                    rationale: [
                                        'Ensures disabled individuals operate from an equal financial foundation rather than being impoverished by care costs.',
                                        'Removes financial barriers to accessing vital communication aids, therapies, and mobility support.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Base assessments on self-assessment by disabled people, utilising person-centred processes to meet agreed needs and support independent living.',
                                    rationale: [
                                        'Places agency and autonomy back into the hands of disabled individuals, replacing inflexible, top-down institutional care.',
                                        'Allows individuals to manage their own care packages and choose providers they trust.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Ensure residential care is provided free of charge when needed, ending the requirement for people to sell their homes to pay for care.',
                                    rationale: [
                                        'Protects the lifelong savings and assets of older people and disabled individuals.',
                                        'Ensures healthcare needs are treated uniformly regardless of setting, ending the disparity between NHS medical care and social residential care.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Children, Early Education & Families',
                            description: 'Providing free universal early education from age one, regulating childminding, and protecting vulnerable children.',
                            content: [
                                {
                                    text: 'Provide free universal early education and childcare from age one up to the start of formal schooling.',
                                    rationale: [
                                        'Gives every child, regardless of background, a solid developmental foundation.',
                                        'Removes crippling childcare costs that prevent parents, particularly women, from fully participating in the workforce.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Implement a comprehensive national strategy to prevent child sexual abuse, including robust relationship and sex education.',
                                    rationale: [
                                        'Shifts focus from reactive punishment to proactive prevention by educating children on boundaries and treating potential abusers before harm occurs.',
                                        'Dismantles taboos that allow abuse to remain hidden within institutions and families.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Ensure small, therapeutic public sector homes are provided for children unable to live in family environments.',
                                    rationale: [
                                        'Recognises that some children require specialised, professional therapeutic care rather than foster placements.',
                                        'Ensures these homes are run by highly qualified, well-paid staff focused on the child\'s recovery and potential.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Support for Carers',
                            description: 'Implementing a carer income guarantee, investing in local authority support, and supporting young carers.',
                            content: [
                                {
                                    text: 'Introduce a carer income guarantee to dramatically increase financial support above the current inadequacy of Carer’s Allowance.',
                                    rationale: [
                                        'Recognises the massive economic and social value generated by unpaid carers.',
                                        'Prevents carers from being pushed into poverty due to their vital responsibilities.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Place a new legal duty on the NHS to actively identify carers and signpost them to support, including annual health checks.',
                                    rationale: [
                                        'Ensures carers do not sacrifice their own physical and mental health while caring for others.',
                                        'Integrates carer support directly into primary healthcare pathways.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Extend the Pupil Premium to include young carers and ensure schools are equipped to identify and support them.',
                                    rationale: [
                                        'Prevents young carers from falling behind educationally due to responsibilities at home.',
                                        'Provides targeted funding to institutions to offer the flexibility and resources these students require.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'wildlife-and-habitats',
                    title: 'Wildlife',
                    icon: 'leaf',
                    highlight: 'Wildlife & Habitats: Enacting a Rights of Nature Act, protecting a minimum of 30% of UK land and sea by 2030, and dedicating 25% of farmland to nature.',
                    subPills: [
                        {
                            title: 'Rights & Protections for Nature',
                            description: 'Enshrining the Rights of Nature in law, establishing an independent Commission for Nature, and enforcing strict legal protections.',
                            content: [
                                {
                                    text: 'Enact a Rights of Nature Act and establish an independent Commission for Nature to oversee enforcement and environmental targets.',
                                    rationale: [
                                        'Recognises that ecosystems have an inherent right to exist, persist, and regenerate.',
                                        'Consolidates and strengthens current environmental legislation under an independent, powerful regulatory body.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Commit to protecting at least 30% of UK land, fresh water, and sea by 2030 to reverse biodiversity loss.',
                                    rationale: [
                                        'Ensures all UK land and water target commitments are met and legally binding.',
                                        'Honours international obligations like the UN Convention on Biological Diversity.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Introduce vicarious liability laws for wildlife crime, making landowners legally responsible for criminal acts against nature on their estates.',
                                    rationale: [
                                        'Creates strong deterrence against wildlife persecution and ensures accountability for environmental destruction at the highest levels of land ownership.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Nature Regeneration Strategy',
                            description: 'Creating a connected Nature Regeneration Network, transitioning to agro-ecological farming, and banning harmful pesticides.',
                            content: [
                                {
                                    text: 'Develop a protected, joined-up Nature Regeneration Network across land and aquatic environments to allow species movement and habitat recovery.',
                                    rationale: [
                                        'Prevents ecological fragmentation and secures vital wildlife corridors essential for species survival and adaptation.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Require farmers to devote a minimum of 25% of their land to natural or semi-natural habitat, transitioning to regenerative agro-ecological farming.',
                                    rationale: [
                                        'Reverses the devastating impact of intensive farming on biodiversity.',
                                        'Replaces intensive agricultural practices with those that support natural ecosystems.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Ban pesticides that harm pollinators, including neonicotinoids, and phase out the use of all harmful agricultural chemicals by 2040.',
                                    rationale: [
                                        'Protects critical insect populations and reverses the catastrophic decline in pollinators necessary for ecosystem health.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Rebalancing Human-Nature Relationship',
                            description: 'Ensuring universal access to nature, integrating outdoor learning into education, and using nature for health.',
                            content: [
                                {
                                    text: 'Increase open access land and ensure cheap, public transport is available from inner cities to National Parks and natural spaces.',
                                    rationale: [
                                        'Recognises that access to nature is a fundamental right, breaking down barriers for marginalised and urban communities.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Embed nature at the heart of the education system, amending the national curriculum to support direct experiences of nature and outdoor activities.',
                                    rationale: [
                                        'Raises a generation that understands, values, and is equipped to protect the natural world.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Expand "green social prescribing" to use engagement with nature to improve human physical and mental health.',
                                    rationale: [
                                        'Acknowledges the profound medicinal and psychological benefits of connecting with the natural environment.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ];
        };

        // Dark mode preference helper
        window.manifestoApp = function() {
            return {
                darkMode: localStorage.getItem('darkMode') === null ? true : localStorage.getItem('darkMode') === 'true',
                dyslexia: localStorage.getItem('dyslexia') === 'true',
                reduceMotion: localStorage.getItem('reduceMotion') === 'true',
                isMobileMenuOpen: false,
                showMobileSearch: false,
                openPolicy: null,
                openedFromSearch: false,
                isSearching: false,
                isLoading: true,
                gridScrollPosition: 0,
                openSubPill: 0,
                searchQuery: '',
                filteredPolicies: [],
                policies: [],
                safeCreateIcons() {
                    try {
                        if (typeof lucide !== 'undefined') {
                            lucide.createIcons();
                        }
                    } catch (e) {
                        console.error("Error creating icons", e);
                    }
                },
                highlightText(text, query) {
                    if (!query) return text;
                    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    const regex = new RegExp(`(${escapedQuery})`, 'gi');
                    return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800 text-slate-900 dark:text-white rounded">$1</mark>');
                },
                init() {
                    // Apply initial dark mode
                    if (this.darkMode) {
                        document.documentElement.classList.add('dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                    }

                    // Load policies from the data provider
                    this.policies = window.getManifestoData();
                    
                    // Sort policies alphabetically by title
                    this.policies.sort((a, b) => a.title.localeCompare(b.title));

                    // Init Fuse
                    this.fuse = new Fuse(this.policies, {
                        keys: ['title', 'highlight', 'subPills.title', 'subPills.content.text'],
                        threshold: 0.4,
                        ignoreLocation: true
                    });

                    this.$watch('openPolicy', () => {
                        this.openSubPill = 0;
                    });

                    this.$nextTick(() => {
                        this.safeCreateIcons();
                    });

                    this.$watch('searchQuery', (query) => {
                        if (!query) {
                            this.filteredPolicies = [];
                            return;
                        }
                        this.filteredPolicies = this.fuse.search(query).map(result => result.item);
                    });

                    this.$watch('darkMode', val => {
                        localStorage.setItem('darkMode', val);
                        if (val) {
                            document.documentElement.classList.add('dark');
                        } else {
                            document.documentElement.classList.remove('dark');
                        }
                        this.$nextTick(() => this.safeCreateIcons());
                    });
                    this.$watch('dyslexia', val => localStorage.setItem('dyslexia', val));
                    this.$watch('reduceMotion', val => localStorage.setItem('reduceMotion', val));

                    this.$watch('openPolicy', () => {
                        this.$nextTick(() => this.safeCreateIcons());
                    });
                }
            };
        };

        // Critical: Prevent flash of light mode and set default to dark
        if (localStorage.getItem('darkMode') === null || localStorage.getItem('darkMode') === 'true') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
