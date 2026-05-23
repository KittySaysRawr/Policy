        // Manifesto Data Provider
        window.getManifestoData = function() {
            return [
                {
                    id: 'nhs',
                    title: 'NHS',
                    icon: 'stethoscope',
                    highlight: 'Protecting the NHS: A fully public, properly funded health service that is there for everyone when they need it.',
                    subPills: [
                        {
                            title: 'Funding & Capacity',
                            description: 'Investing properly to ensure a world-class, public-funded health service for all.',
                            content: [
                                {
                                    text: 'Increase NHS funding by £30 billion annually by 2030, plus £20bn capital investment.',
                                    rationale: [
                                        'Reverses a decade of real-terms funding stagnation and austerity.',
                                        'Clears the backlog of hospital maintenance and upgrades diagnostic technology.',
                                        'Reduces waiting lists for elective surgeries and mental health referrals.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'BMA', url: 'https://www.bma.org.uk/' },
                                        { name: 'King\'s Fund', url: 'https://www.kingsfund.org.uk/' },
                                        { name: 'Health Foundation', url: 'https://www.health.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'NHS Community Dentistry: £5bn per year to ensure everyone can see a dentist.',
                                    rationale: [
                                        'Addresses the "dentistry deserts" preventing millions from accessing basic care.',
                                        'Integrates dental health fully into the NHS as a core service.',
                                        'Reduces long-term costs by preventing emergency dental hospital admissions.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'British Dental Association (BDA)', url: 'https://bda.org/' }
                                    ]
                                },
                                {
                                    text: 'Free Personal Care for all adults, delivered through a National Care Service.',
                                    rationale: [
                                        'Ensures dignity in old age and for disabled people regardless of wealth.',
                                        'Unblocks hospital beds by providing adequate support for patients to go home.',
                                        'Creates a professionalised, properly paid social care workforce.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'ADASS', url: 'https://www.adass.org.uk/' },
                                        { name: 'Age UK', url: 'https://www.ageuk.org.uk/' },
                                        { name: 'Institute for Public Policy Research', url: 'https://www.ippr.org/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Specialist Care',
                            description: 'Ensuring that mental health receives the same priority and funding as physical health.',
                            content: [
                                {
                                    text: 'Full parity of esteem for mental health services with physical health.',
                                    rationale: [
                                        'Ends the Cinderella status of mental health funding.',
                                        'Ensures quick access to therapy and crisis support in every community.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Mind', url: 'https://www.mind.org.uk/' },
                                        { name: 'Royal College of Psychiatrists', url: 'https://www.rcpsych.ac.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'economy',
                    title: 'Economy',
                    icon: 'trending-up',
                    highlight: 'Fairer Economy: Investing in public services and a green transition while ensuring the wealthiest pay their fair share.',
                    subPills: [
                        {
                            title: 'Wealth & Fairness',
                            description: 'Our fair tax policies ensure that wealth is redistributed to support essential public services and a green transition.',
                            content: [
                                {
                                    text: 'Wealth Tax of 1% on assets over £10m and 2% on assets over £1bn.',
                                    rationale: [
                                        'Raises £15–20 billion annually to fund the Green Economic Transition.',
                                        'Targets the top 1% of the wealthiest individuals to reduce record-high inequality.',
                                        'Provides capital for essential public infrastructure without increasing taxes on lower earners.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Wealth Tax Commission', url: 'https://www.ukwealth.tax/' }
                                    ]
                                },
                                {
                                    text: 'Equalise Capital Gains Tax with Income Tax rates.',
                                    rationale: [
                                        'Corrects the distortion where passive wealth is taxed at lower rates than active work.',
                                        'Generates approximately £12 billion to support the NHS and social care.',
                                        'Discourages speculative investment in favour of long-term productivity.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Institute for Fiscal Studies (IFS)', url: 'https://ifs.org.uk/' },
                                        { name: 'Tax Justice UK', url: 'https://www.taxjustice.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Living Standards',
                            description: 'Ensuring everyone can afford to live with dignity through a fair living wage.',
                            content: [
                                {
                                    text: 'Increase the minimum wage to £15 an hour for all ages.',
                                    rationale: [
                                        'Directly addresses the cost-of-living crisis for the lowest-paid workers.',
                                        'Removes the age discrimination that pays younger workers less for the same work.',
                                        'Stimulates local economies by increasing the spending power of lower-income households.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Living Wage Foundation', url: 'https://www.livingwage.org.uk/' },
                                        { name: 'New Economics Foundation', url: 'https://neweconomics.org/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'drugs',
                    title: 'Drugs',
                    icon: 'pill',
                    highlight: 'Drug Law Reform: Moving towards a public health approach, treating addiction as a health issue.',
                    subPills: [
                        {
                            title: 'Drug Regulation & Health',
                            description: 'Treating addiction as a health issue, not a criminal matter.',
                            content: [
                                {
                                    text: 'Replace the war on drugs with a health-led approach to addiction.',
                                    rationale: [
                                        'Addiction is treated as a health crisis, not a criminal activity.',
                                        'Reduces the burden on the criminal justice system and focuses resources on support.',
                                        'Increases access to addiction services and harm reduction strategies.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Green Party Drug Policy', url: 'https://www.greenpartydrugpolicy.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Legalise, regulate, and tax Cannabis; decriminalise personal drug use.',
                                    rationale: [
                                        'Ends the criminalisation of users, moving drug use to a public health framework.',
                                        'Generates significant tax revenue to fund addiction services and mental health.',
                                        'Strikes a blow to organised crime by taking the market out of their hands.',
                                        'Enables quality control, taxation, and reduces street crime.',
                                        'Protects users by allowing safer, regulated supply.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Green Party Drug Policy', url: 'https://www.greenpartydrugpolicy.org.uk/' },
                                        { name: 'Transform Drug Policy Foundation', url: 'https://transformdrugs.org/' },
                                        { name: 'Release', url: 'https://www.release.org.uk/' }
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
                    highlight: 'Safe & Warm Homes: Providing 150,000 social homes a year and making every home energy efficient.',
                    subPills: [
                        {
                            title: 'Supply & Rights',
                            description: 'Solving the housing crisis by building social homes and protecting tenant rights.',
                            content: [
                                {
                                    text: 'Build 150,000 new social homes per year and end the Right to Buy.',
                                    rationale: [
                                        'Addresses the massive social housing waiting lists.',
                                        'Ensures public housing stock remains available for future generations.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Shelter', url: 'https://www.shelter.org.uk/' },
                                        { name: 'National Housing Federation', url: 'https://www.housing.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Introduction of mandatory rent controls and an end to no-fault evictions.',
                                    rationale: [
                                        'Protects tenants from arbitrary homelessness and skyrocketing rents.',
                                        'Stabilises communities by allowing people to stay in their homes long-term.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Generation Rent', url: 'https://www.generationrent.org/' },
                                        { name: 'ACORN', url: 'https://www.acorntheunion.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Energy Efficiency',
                            description: 'Saving energy and reducing fuel poverty through a massive home insulation programme.',
                            content: [
                                {
                                    text: 'A £29 billion programme to insulate every home in the UK to a high standard.',
                                    rationale: [
                                        'Lifts millions out of fuel poverty by permanently lowering bills.',
                                        'Massively reduces carbon emissions from the UK\'s drafty housing stock.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Energy Saving Trust', url: 'https://energysavingtrust.org.uk/' },
                                        { name: 'Friends of the Earth', url: 'https://friendsoftheearth.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'climate',
                    title: 'Climate',
                    icon: 'globe',
                    highlight: 'Climate Emergency: Reaching Net Zero by 2040 through a rapid, just transition to a 100% renewable grid.',
                    subPills: [
                        {
                            title: 'Energy Transition',
                            description: 'Reaching Net Zero with a just transition to a 100% renewable energy grid.',
                            content: [
                                {
                                    text: 'Net Zero by 2040 and a total ban on new fossil fuel exploration.',
                                    rationale: [
                                        'Aligns with latest climate science to avoid the worst tipping points.',
                                        'Ends the UK\'s role in driving global temperature rises.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'IPCC', url: 'https://www.ipcc.ch/' },
                                        { name: 'CCC', url: 'https://www.theccc.org.uk/' },
                                        { name: 'Carbon Brief', url: 'https://www.carbonbrief.org/' }
                                    ]
                                },
                                {
                                    text: '70% of the UK\'s electricity from wind and solar by 2030.',
                                    rationale: [
                                        'Renewables are now the cheapest form of new electricity generation.',
                                        'Provides energy security and independence from global gas markets.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'IRENA', url: 'https://www.irena.org/' },
                                        { name: 'National Grid ESO', url: 'https://www.neso.energy/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'System Reform',
                            description: 'Ensuring energy systems serve the public good, not private profit.',
                            content: [
                                {
                                    text: 'Bring the Big Five energy companies into public ownership.',
                                    rationale: [
                                        'Allows for a coordinated national effort to decarbonise the grid.',
                                        'Ensures energy is treated as a public service, not a source of profit.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'We Own It', url: 'https://weownit.org.uk/' },
                                        { name: 'NEF', url: 'https://neweconomics.org/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'transport',
                    title: 'Transport',
                    icon: 'bus',
                    highlight: 'Integrated Transport: Nationalising railways and investing in affordable, green travel for everyone.',
                    subPills: [
                        {
                            title: 'Public Transport',
                            description: 'Rebuilding public transport focused on community needs and affordability.',
                            content: [
                                {
                                    text: 'Bring railways back into public ownership and simplify ticketing.',
                                    rationale: [
                                        'Ends the fragmented, profit-driven model that leads to high fares.',
                                        'Integrated planning allows for better connections between rail and bus.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Campaign for Better Transport', url: 'https://bettertransport.org.uk/' },
                                        { name: 'ASLEF', url: 'https://www.aslef.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Subsidy for local bus services to ensure every community has a reliable route.',
                                    rationale: [
                                        'Buses are the most used form of public transport but have seen massive cuts.',
                                        'Essential for tackling rural isolation and urban congestion.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Better Buses for Free', url: 'https://www.betterbuses.org.uk/' },
                                        { name: 'CPRE', url: 'https://www.cpre.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Active Travel',
                            description: 'Creating safe infrastructure for walking, cycling, and healthier, cleaner communities.',
                            content: [
                                {
                                    text: 'Invest £2.5 billion per year in walking, cycling and wheeling infrastructure.',
                                    rationale: [
                                        'Improves public health through increased physical activity.',
                                        'Reduces local air pollution and noise in residential areas.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Sustrans', url: 'https://www.sustrans.org.uk/' },
                                        { name: 'Cycling UK', url: 'https://www.cyclinguk.org/' }
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
                    highlight: 'Lifelong Learning: Scrap tuition fees and invest in schools to give every child a green start in life.',
                    subPills: [
                        {
                            title: 'Schools & Teachers',
                            description: 'Investing in our schools and teachers to give every child the best start in life.',
                            content: [
                                {
                                    text: 'Increase school funding by £8 billion per year and abolish OFSTED.',
                                    rationale: [
                                        'Reverses the real-terms cuts that have led to crumbling buildings and staff shortages.',
                                        'Replaces a high-pressure inspection regime with a supportive, collaborative model.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'NEU', url: 'https://neu.org.uk/' },
                                        { name: 'NAHT', url: 'https://www.naht.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Free school meals for every child in primary and secondary education.',
                                    rationale: [
                                        'Ensures no child goes hungry, improving focus and educational outcomes.',
                                        'Reduces the stigma associated with means-tested free meals.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Child Poverty Action Group', url: 'https://cpag.org.uk/' },
                                        { name: 'Food Foundation', url: 'https://foodfoundation.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Higher Education',
                            description: 'Making education accessible to all by removing barriers like tuition fees.',
                            content: [
                                {
                                    text: 'Abolish university tuition fees and restore student maintenance grants.',
                                    rationale: [
                                        'Removes the barrier of lifelong debt for students from all backgrounds.',
                                        'Treats higher education as a public good that benefits society as a whole.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'NUS', url: 'https://www.nus.org.uk/' },
                                        { name: 'Sutton Trust', url: 'https://www.suttontrust.com/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Early Years & Childcare',
                            description: 'High-quality, affordable childcare for all parents, supporting early development and workforce participation.',
                            content: [
                                {
                                    text: 'Universal free childcare for all children from pre-school age.',
                                    rationale: [
                                        'Reduces the massive financial burden on working parents.',
                                        'Supports early childhood development and narrows the attainment gap before school starts.',
                                        'Promotes workforce participation, particularly for mothers.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Pregnant Then Screwed', url: 'https://pregnantthenscrewed.com/' },
                                        { name: 'Early Education', url: 'https://www.early-education.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'nature',
                    title: 'Nature',
                    icon: 'leaf',
                    highlight: 'Nature Recovery: Putting nature at the heart of decision-making and ending the sewage crisis in our waters.',
                    subPills: [
                        {
                            title: 'Water Justice',
                            description: 'Ensuring clean water by bringing water companies into public ownership.',
                            content: [
                                {
                                    text: 'Bring water companies back into public ownership to end sewage spills.',
                                    rationale: [
                                        'Redirects dividends and bonuses into urgent infrastructure upgrades.',
                                        'Prioritises environmental health over shareholder returns.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Feargal Sharkey', url: 'https://twitter.com/Feargal_Sharkey' },
                                        { name: 'Surfers Against Sewage', url: 'https://www.sas.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Biodiversity',
                            description: 'Protecting our natural world to reverse the decline in wildlife populations.',
                            content: [
                                {
                                    text: 'A Rights of Nature Act to give ecosystems legal protection from harm.',
                                    rationale: [
                                        'Acknowledges that nature has an intrinsic right to exist and thrive.',
                                        'Provides communities with the legal tools to defend local habitats.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'ClientEarth', url: 'https://www.clientearth.org/' },
                                        { name: 'Earth Law Centre', url: 'https://www.earthlawcenter.org/' }
                                    ]
                                },
                                {
                                    text: 'Commit to protecting 30% of land and sea for nature by 2030.',
                                    rationale: [
                                        'Essential for reversing the decline in UK wildlife populations.',
                                        'Provides vital carbon sinks to help meet climate goals.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'RSPB', url: 'https://www.rspb.org.uk/' },
                                        { name: 'Wildlife Trusts', url: 'https://www.wildlifetrusts.org/' }
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    id: 'taxation',
                    title: 'Taxation',
                    icon: 'piggy-bank',
                    highlight: 'Taxing Pollution: Using the tax system to drive the transition while supporting those on the lowest incomes.',
                    subPills: [
                        {
                            title: 'Polluter Pays',
                            description: 'Using the tax system to make those who pollute pay for the damage they cause.',
                            content: [
                                {
                                    text: 'A Carbon Tax reaching £500 per tonne by 2030.',
                                    rationale: [
                                        'Initially set at £120/tonne, this tax makes polluters pay for their damage.',
                                        'Incentivises rapid industry-wide shifts to clean technology and energy efficiency.',
                                        'Revenue is used to fund green infrastructure and protect low-income households.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'London School of Economics (LSE)', url: 'https://www.lse.ac.uk/granthamine/research-theme/governance-and-legislation/pricing-carbon/' },
                                        { name: 'Zero Carbon Campaign', url: 'https://www.zerocarbon.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'National Insurance: Remove the upper earnings limit.',
                                    rationale: [
                                        'Currently, higher earners pay a lower percentage of NICs on salary above a threshold.',
                                        'Ensures that high earners pay the same rate as everyone else on their total income.',
                                        'Raises significant revenue to ensure sustainable funding for the NHS.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'IFS', url: 'https://ifs.org.uk/' },
                                        { name: 'Tax Policy Associates', url: 'https://www.taxpolicy.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'VAT on Private School Fees and end Charitable Status.',
                                    rationale: [
                                        'Ends a tax break that primarily benefits the wealthiest families.',
                                        'Raises funds to invest directly in the state school system for all children.',
                                        'Reduces the educational attainment gap driven by private sector advantages.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Institute for Fiscal Studies', url: 'https://ifs.org.uk/publications/tax-private-school-fees-and-state-school-spending' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'democracy',
                    title: 'Democracy',
                    icon: 'globe-2',
                    highlight: 'Political Reform: Breaking the two-party system with a fairer voting system and votes at 16.',
                    subPills: [
                        {
                            title: 'Voting & Voice',
                            description: 'Making our democracy fairer and more representative.',
                            content: [
                                {
                                    text: 'Replace First Past the Post with Proportional Representation.',
                                    rationale: [
                                        'Ensures every vote counts and seats match the share of the vote.',
                                        'Ends the tactical voting trap and encourages a broader range of ideas.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Electoral Reform Society', url: 'https://www.electoral-reform.org.uk/' },
                                        { name: 'Make Votes Matter', url: 'https://www.makevotesmatter.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Lower the voting age to 16 for all UK elections.',
                                    rationale: [
                                        'Engages young people in the democratic process at a critical age.',
                                        'Ensures those who will live with the long-term consequences of policy have a say.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'British Youth Council', url: 'https://www.byc.org.uk/' },
                                        { name: 'NUS', url: 'https://www.nus.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Deliberative Democracy',
                            description: 'Empowering citizens to shape policy through deliberation.',
                            content: [
                                {
                                    text: 'Citizens\' Assemblies on the climate crisis and constitutional reform.',
                                    rationale: [
                                        'Bypasses short-termist partisan gridlock by empowering representative citizen groups.',
                                        'Informs complex policy decisions with in-depth public deliberation and expert evidence.',
                                        'Restores public trust in the political process.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Climate Assembly UK', url: 'https://www.climateassembly.uk/' },
                                        { name: 'Sortition Foundation', url: 'https://www.sortitionfoundation.org/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'The Lords & Monarchy',
                            description: 'Creating a more accountable and democratic upper house.',
                            content: [
                                {
                                    text: 'Abolish the House of Lords and replace it with an elected Second Chamber.',
                                    rationale: [
                                        'Ends the undemocratic practice of hereditary and appointed law-makers.',
                                        'Ensures legislative scrutiny is performed by representatives of the people.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Unlock Democracy', url: 'https://www.unlockdemocracy.org.uk/' },
                                        { name: 'Unlock the Lords', url: 'https://www.unlockthelords.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'work',
                    title: 'Work',
                    icon: 'briefcase',
                    highlight: 'Good Work: Transitioning to a four-day working week and banning zero-hours contracts.',
                    subPills: [
                        {
                            title: 'Rights & Wellbeing',
                            description: 'Building a flexible work culture that improves mental and physical health.',
                            content: [
                                {
                                    text: 'Transition to a four-day working week with no loss of pay.',
                                    rationale: [
                                        'Improves mental health, productivity and work-life balance.',
                                        'Reduces the carbon emissions associated with commuting.',
                                        'Allows for a fairer distribution of caring responsibilities.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: '4 Day Week Global', url: 'https://www.4dayweek.com/' },
                                        { name: 'Autonomy', url: 'https://autonomy.work/' },
                                        { name: 'Wellcome Trust', url: 'https://wellcome.org/' }
                                    ]
                                },
                                {
                                    text: 'Ban on zero-hours contracts and a right to predictable hours.',
                                    rationale: [
                                        'Ends the insecurity that forces millions to struggle with unpredictable incomes.',
                                        'Gives workers the legal right to plan their lives and finances.',
                                        'Reduces the "stress premium" of precarious employment on health services.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'TUC', url: 'https://www.tuc.org.uk/' },
                                        { name: 'Citizens Advice', url: 'https://www.citizensadvice.org.uk/' },
                                        { name: 'Work Foundation', url: 'https://www.lancaster.ac.uk/work-foundation/' }
                                    ]
                                },
                                {
                                    text: 'Repeal anti-union laws and strengthen collective bargaining.',
                                    rationale: [
                                        'Empowers workers to negotiate better pay and conditions directly.',
                                        'Historical evidence shows union density correlates with lower income inequality.',
                                        'Protects the right to strike as a fundamental democratic freedom.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'OECD', url: 'https://www.oecd.org/' },
                                        { name: 'International Labour Organization (ILO)', url: 'https://www.ilo.org/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'social-security',
                    title: 'Benefits',
                    icon: 'hand-heart',
                    highlight: 'Security for All: Abolishing the cruel benefit system and moving towards a Universal Basic Income.',
                    subPills: [
                        {
                            title: 'Immediate Reform',
                            description: 'Providing immediate support to those facing the cost-of-living crisis.',
                            content: [
                                {
                                    text: 'Increase Universal Credit and legacy benefits by £40/week.',
                                    rationale: [
                                        'Provides immediate relief for those struggling most with the cost of living.',
                                        'Reduces the number of families relying on food banks.',
                                        'Highly effective stimulus as low-income households spend more in local economies.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Joseph Rowntree Foundation', url: 'https://www.jrf.org.uk/' },
                                        { name: 'Trussell Trust', url: 'https://www.trusselltrust.org/' }
                                    ]
                                },
                                {
                                    text: 'End the Two-Child Limit and the Benefit Cap.',
                                    rationale: [
                                        'Immediately lifts hundreds of thousands of children out of poverty.',
                                        'Removes a punitive system that penalises larger families.',
                                        'Reduces the long-term societal costs of child poverty (health and education).'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Child Poverty Action Group (CPAG)', url: 'https://cpag.org.uk/' },
                                        { name: 'Save the Children', url: 'https://www.savethechildren.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Disability & Dignity',
                            description: 'Reforming the benefits system to be supportive rather than punitive.',
                            content: [
                                {
                                    text: 'End punitive PIP/ESA assessments and move to a supportive model.',
                                    rationale: [
                                        'Replaces a high-stress, error-prone system with one based on lived experience.',
                                        'Reduces the number of decisions overturned on appeal, saving taxpayer money.',
                                        'Adopts the Social Model of Disability: focusing on removing societal barriers.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Disability Rights UK', url: 'https://www.disabilityrightsuk.org/' },
                                        { name: 'Scope', url: 'https://www.scope.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Long-term Goal',
                            description: 'Creating a foundation of economic security through UBI.',
                            content: [
                                {
                                    text: 'A plan to introduce a Universal Basic Income (UBI) for every adult.',
                                    rationale: [
                                        'Provides a permanent floor of security that cannot be taken away.',
                                        'Simplifies the welfare system and removes the stigma and complexity of benefits.',
                                        'Supports people in a future of automated work and gig-economy volatility.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'UBI Lab Network', url: 'https://www.ubilabnetwork.org/' },
                                        { name: 'RSA', url: 'https://www.thersa.org/' },
                                        { name: 'Basic Income Earth Network', url: 'https://basicincome.org/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Pensions',
                            description: 'A secure, dignified retirement for everyone.',
                            content: [
                                {
                                    text: 'Increase the State Pension to ensure it provides a decent standard of living.',
                                    rationale: [
                                        'Ensures pensioners are not forced to choose between heating and eating.',
                                        'Pensions as a tool for economic stability and reducing poverty in old age.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Age UK', url: 'https://www.ageuk.org.uk/' },
                                        { name: 'Pensions Policy Institute', url: 'https://www.pensionspolicyinstitute.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'inclusion',
                    title: 'Inclusion',
                    icon: 'users',
                    highlight: 'Nothing About Us, Without Us: Ensuring that marginalised communities, especially disabled people, are at the heart of the decisions that affect their lives.',
                    subPills: [
                        {
                            title: 'Co-Production',
                            description: 'Centering the voices of those with lived experience in public decision-making.',
                            content: [
                                {
                                    text: 'Mandate co-production in all public service design and delivery.',
                                    rationale: [
                                        'Ensures services are built by people with lived experience, not just for them.',
                                        'Identifies barriers that top-down policy making often misses.',
                                        'Shifts power back to citizens and communities.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Green Party Disability Group', url: 'https://disabilitygroup.greenparty.org.uk/' },
                                        { name: 'Coalition for Personalised Care', url: 'https://coalitionforpersonalisedcare.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Disabled Rights',
                            description: 'Fully upholding the rights of disabled people in all aspects of society.',
                            content: [
                                {
                                    text: 'Full implementation of the UN Convention on the Rights of Persons with Disabilities.',
                                    rationale: [
                                        'Adopts the Social Model of Disability: society must change to accommodate people.',
                                        'Guaranteeing independent living and removing the threat of punitive assessments.',
                                        'Equal access to all public spaces, transport, and communication.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Disability Rights UK', url: 'https://www.disabilityrightsuk.org/' },
                                        { name: 'UNCRPD', url: 'https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities.html' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Representation',
                            description: 'Ensuring all levels of government reflect the diversity of the UK population.',
                            content: [
                                {
                                    text: 'Support for diverse representation across all levels of government.',
                                    rationale: [
                                        'Decision-making bodies should reflect the diversity of the UK population.',
                                        'Enables policies that are sensitive to the unique challenges of different groups (LGBTIQA+, BAME, etc.).'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Operation Black Vote', url: 'https://www.obv.org.uk/' },
                                        { name: 'Stonewall', url: 'https://www.stonewall.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'global',
                    title: 'Global',
                    icon: 'map',
                    highlight: 'Global Solidarity: A foreign policy based on peace, cooperation and climate reparations.',
                    subPills: [
                        {
                            title: 'Aid & Climate',
                            description: 'Acting as a global citizen by supporting climate justice and global development.',
                            content: [
                                {
                                    text: 'Restore the international aid budget to 1% of GNI.',
                                    rationale: [
                                        'Fulfils our moral obligation to support those in the Global South.',
                                        'Invests in global stability and climate resilience.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Oxfam', url: 'https://www.oxfam.org.uk/' },
                                        { name: 'Bond', url: 'https://www.bond.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Support for a Loss and Damage fund for climate-hit nations.',
                                    rationale: [
                                        'Acknowledges the historic responsibility of industrialised nations for climate change.',
                                        'Provides essential funding for countries already facing catastrophic impacts.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Christian Aid', url: 'https://www.christianaid.org.uk/' },
                                        { name: 'UN Climate Change', url: 'https://unfccc.int/loss-and-damage' }
                                    ]
                                }
                            ]
                        },
                        

                        

                        {
                            title: 'Migration',
                            description: 'Creating safe and legal routes for those seeking refuge.',
                            content: [
                                {
                                    text: 'Ending the Hostile Environment and creating safe, legal routes for refugees.',
                                    rationale: [
                                        'Treats people seeking safety with the compassion and dignity they deserve.',
                                        'Undermines the business model of human traffickers.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Refugee Council', url: 'https://www.refugeecouncil.org.uk/' },
                                        { name: 'JCWI', url: 'https://www.jcwi.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'peace',
                    title: 'Peace',
                    icon: 'shield',
                    highlight: 'Peace & Disarmament: Redirecting military spending towards diplomacy and the climate crisis.',
                    subPills: [
                        {
                            title: 'Nuclear Weapons',
                            description: 'Investing in peace and diplomacy rather than expensive nuclear arsenals.',
                            content: [
                                {
                                    text: 'Cancel the Trident nuclear missile programme and redirect the £200bn.',
                                    rationale: [
                                        'Huge savings that can be spent on the NHS, schools and local services.',
                                        'Shows international leadership in moving towards a world without nuclear weapons.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'CND', url: 'https://cnduk.org/' },
                                        { name: 'Rethink Priority', url: 'https://rethinkpriorities.org/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'farming',
                    title: 'Farming',
                    icon: 'sprout',
                    highlight: 'Soil to Plate: Supporting farmers to transition to nature-friendly, organic methods.',
                    subPills: [
                        {
                            description: 'Supporting farmers in transitioning to sustainable, nature-friendly practices that feed the nation.',
                            content: [
                                {
                                    text: 'Double funding for nature-friendly farming to £4 billion annually.',
                                    rationale: [
                                        'Provides financial stability for farmers while restoring topsoil and biodiversity.',
                                        'Encourages a shift away from intensive, chemical-dependent agriculture.'
                                    ],
                                    sources: [
                                        { name: 'Wildlife Trusts', url: 'https://www.wildlifetrusts.org/' },
                                        { name: 'Nature Friendly Farming Network', url: 'https://www.nffn.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'End the exemption of large farms from nature-friendly regulations.',
                                    rationale: [
                                        'Ensures all agricultural businesses contribute to environmental restoration.',
                                        'Creates a level playing field for smaller, sustainable enterprises.'
                                    ],
                                    sources: [
                                        { name: 'Farmers Weekly', url: 'https://www.fwi.co.uk/' }
                                    ]
                                },
                                {
                                    text: 'Protect the UK\'s agricultural land from development and soil erosion.',
                                    rationale: [
                                        'Crucial for long-term food security in a changing climate.',
                                        'Maintains the viability of rural communities and their livelihoods.'
                                    ],
                                    sources: [
                                        { name: 'CPRE', url: 'https://www.cpre.org.uk/' },
                                        { name: 'Sustain', url: 'https://www.sustainweb.org/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'animals',
                    title: 'Animals',
                    icon: 'paw-print',
                    highlight: 'Animal Protection: Extending legal rights to all sentient animals and ending factory farming.',
                    subPills: [
                        {
                            title: 'Animal Welfare',
                            description: 'Ensuring the highest standards of protection for all sentient animals.',
                            content: [
                                {
                                    text: 'Ban blood sports, grouse shooting, and the badger cull.',
                                    rationale: [
                                        'Ends the cruel and unnecessary killing of animals for sport.',
                                        'Badger culls have not been shown to be as effective as vaccination in tackling bTB.',
                                        'Protects biodiversity and the natural balance of upland ecosystems.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'League Against Cruel Sports', url: 'https://league.org.uk/' },
                                        { name: 'RSPCA', url: 'https://www.rspca.org.uk/' },
                                        { name: 'Wildlife Trusts', url: 'https://www.wildlifetrusts.org/' }
                                    ]
                                },
                                {
                                    text: 'Phasing out factory farming and shifting towards high-welfare systems.',
                                    rationale: [
                                        'Reduces the immense suffering of billions of farm animals each year.',
                                        'Improves food safety and reduces the risk of antibiotic resistance from intensive systems.',
                                        'Encourages more sustainable, less resource-intensive food production.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Compassion in World Farming', url: 'https://www.ciwf.org.uk/' },
                                        { name: 'Animal Aid', url: 'https://www.animalaid.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'communities',
                    title: 'Local',
                    icon: 'map-pin',
                    highlight: 'Empowered Communities: Returning power to local councils and restoring community services.',
                    subPills: [
                        {
                            title: 'Council Powers',
                            description: 'Returning local decision-making and resources to local communities.',
                            content: [
                                {
                                    text: 'Give local councils the power to set their own business rates and taxing powers.',
                                    rationale: [
                                        'Reduces the dependence on central government handouts.',
                                        'Allows councils to respond more effectively to local economic needs.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Local Government Association', url: 'https://www.local.gov.uk/' },
                                        { name: 'Core Cities', url: 'https://www.corecities.com/' }
                                    ]
                                },
                                {
                                    text: 'Reopen local libraries, youth centres and swimming pools.',
                                    rationale: [
                                        'Restores the social glue that has been lost during a decade of austerity.',
                                        'Provides safe, welcoming spaces for young and old alike.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Unison', url: 'https://www.unison.org.uk/' },
                                        { name: 'Save Our Libraries', url: 'https://www.cilip.org.uk/page/LibrariesMatter' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'justice',
                    title: 'Justice',
                    icon: 'scale',
                    highlight: 'Compassionate Justice: Reforming the legal system to focus on rehabilitation and human rights.',
                    subPills: [
                        {
                            title: 'Legal System',
                            description: 'Restoring access to justice for everyone, regardless of wealth.',
                            content: [
                                {
                                    text: 'Fully restore Legal Aid to ensure everyone has access to justice.',
                                    rationale: [
                                        'Ensures the courts are not just for the wealthy.',
                                        'Allows vulnerable people to challenge unlawful evictions or benefit decisions.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Law Society', url: 'https://www.lawsociety.org.uk/' },
                                        { name: 'Bar Council', url: 'https://www.barcouncil.org.uk/' }
                                    ]
                                },
                                {
                                    text: 'Investment in diversion schemes and community-based sentences.',
                                    rationale: [
                                        'Evidence shows community sentences are more effective at reducing reoffending than short prison stays.',
                                        'Focuses on addressing the root causes of crime like addiction and mental health.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Howard League for Penal Reform', url: 'https://howardleague.org/' },
                                        { name: 'Prison Reform Trust', url: 'https://prisonreformtrust.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Prisons & Reform',
                            description: 'Focusing on rehabilitation and tackling the root causes of crime.',
                            content: [
                                {
                                    text: 'Halve the women\'s prison population.',
                                    rationale: [
                                        'The vast majority of women in prison are there for non-violent offences and have experienced trauma.',
                                        'Replaces imprisonment with better-funded community-based support and women\'s centres.',
                                        'Protects families and children from the intergenerational trauma of parental imprisonment.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Prison Reform Trust', url: 'https://prisonreformtrust.org.uk/' },
                                        { name: 'Women in Prison', url: 'https://www.womeninprison.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'culture',
                    title: 'Culture',
                    icon: 'palette',
                    highlight: 'Arts for Everyone: Supporting the arts and creative industries as vital for our national wellbeing.',
                    subPills: [
                        {
                            title: 'Arts Funding',
                            description: 'Celebrating and investing in the arts for national wellbeing.',
                            content: [
                                {
                                    text: 'Increase core funding for the arts by £5 billion per year.',
                                    rationale: [
                                        'Supports a sector that contributes massively to the UK economy and social life.',
                                        'Ensures arts education is available to all children, not just those in private schools.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Arts Council England', url: 'https://www.artscouncil.org.uk/' },
                                        { name: 'Creative Industries Federation', url: 'https://www.creativeindustriesfederation.com/' }
                                    ]
                                },
                                {
                                    text: 'A Creative Freelancers grant scheme to provide income stability.',
                                    rationale: [
                                        'Recognises the precarious nature of work in the creative industries.',
                                        'Helps maintain a diverse and vibrant pool of talent across the country.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Equity', url: 'https://www.equity.org.uk/' },
                                        { name: 'Musicians\' Union', url: 'https://musiciansunion.org.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'privacy',
                    title: 'Privacy',
                    icon: 'cpu',
                    highlight: 'Privacy & Digital Rights: Protecting personal data, promoting online anonymity, and ensuring universal high-speed access.',
                    subPills: [
                        {
                            title: 'Data Privacy',
                            description: 'Strict regulation to protect individual privacy in an increasingly digital world.',
                            content: [
                                {
                                    text: 'Strict regulation of AI and personal data collection.',
                                    rationale: [
                                        'Protects citizens from invasive surveillance and data misuse by tech giants.',
                                        'Ensures AI is developed transparently and with public interest oversight.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Open Rights Group', url: 'https://www.openrightsgroup.org/' },
                                        { name: 'Privacy International', url: 'https://privacyinternational.org/' }
                                    ]
                                },
                                {
                                    text: 'End surveillance of citizens by state and corporate actors.',
                                    rationale: [
                                        'Fundamental right to privacy without arbitrary state or commercial monitoring.',
                                        'Prevents the "chilling effect" on freedom of expression and dissent.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Liberty', url: 'https://www.libertyhumanrights.org.uk/' },
                                        { name: 'Big Brother Watch', url: 'https://bigbrotherwatch.org.uk/' }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Digital Inclusion & Security',
                            description: 'Treating high-speed internet as a fundamental right and ensuring robust cybersecurity.',
                            content: [
                                {
                                    text: 'Universal access to high-speed broadband in every UK home.',
                                    rationale: [
                                        'The internet is an essential utility for modern work, education, and services.',
                                        'Reduces the "digital divide" that leaves rural and low-income communities behind.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'Ofcom', url: 'https://www.ofcom.org.uk/' },
                                        { name: 'Good Things Foundation', url: 'https://www.goodthingsfoundation.org/' }
                                    ]
                                },
                                {
                                    text: 'Invest in cybersecurity as a national public infrastructure.',
                                    rationale: [
                                        'Protects critical public services and citizen data from digital attacks.',
                                        'Ensures resilience against increasingly sophisticated cyber threats.'
                                    ],
                                    sources: [
                                        { name: 'Green Party', url: 'https://greenparty.org.uk/' },
                                        { name: 'National Cyber Security Centre', url: 'https://www.ncsc.gov.uk/' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'costed',
                    title: 'Costed',
                    icon: 'calculator',
                    highlight: 'Transparency: A breakdown of our proposed investments in public services and the revenue sources to fund them.',
                    subPills: [
                        {
                            title: 'Investment Breakdown',
                            description: 'Major investments in our public services and infrastructure.',
                            content: [
                                {
                                    text: 'NHS Annual Budget Increase',
                                    rationale: ['Investing £30 billion annually by 2030 to restore capacity and reduce waiting lists.'],
                                    sources: [{ name: 'Green Party', url: 'https://greenparty.org.uk/' }]
                                },
                                {
                                    text: 'NHS Capital Investment',
                                    rationale: ['£20 billion in capital funding for crumbling infrastructure and technology upgrades.'],
                                    sources: [{ name: 'Green Party', url: 'https://greenparty.org.uk/' }]
                                },
                                {
                                    text: 'National Home Insulation Programme',
                                    rationale: ['£29 billion programme to lift homes out of fuel poverty and cut emissions.'],
                                    sources: [{ name: 'Green Party', url: 'https://greenparty.org.uk/' }]
                                },
                                {
                                    text: 'Renewable Energy Generation',
                                    rationale: ['£15 billion annual investment to scale up wind and solar infrastructure to reach net-zero.'],
                                    sources: [{ name: 'Green Party', url: 'https://greenparty.org.uk/' }]
                                },
                                {
                                    text: 'Rail and Bus Infrastructure',
                                    rationale: ['£10 billion annual investment to revitalise public transport and reduce reliance on private cars.'],
                                    sources: [{ name: 'Green Party', url: 'https://greenparty.org.uk/' }]
                                },
                                {
                                    text: 'Schools Funding Increase',
                                    rationale: ['Investing £8 billion per year to support teachers and infrastructure.'],
                                    sources: [{ name: 'Green Party', url: 'https://greenparty.org.uk/' }]
                                },
                                {
                                    text: 'Active Travel Infrastructure',
                                    rationale: ['£2.5 billion annually for walking, cycling, and wheeling.'],
                                    sources: [{ name: 'Green Party', url: 'https://greenparty.org.uk/' }]
                                },
                                {
                                    text: 'NHS Dentistry',
                                    rationale: ['£5 billion annually to ensure universal access to dental care.'],
                                    sources: [{ name: 'Green Party', url: 'https://greenparty.org.uk/' }]
                                }
                            ]
                        },
                        {
                            title: 'Revenue Sources',
                            description: 'Funding these investments through fair taxation of wealth and pollution.',
                            content: [
                                {
                                    text: 'Wealth Tax',
                                    rationale: ['Projected to raise £15–20 billion annually by taxing the top 1% of assets.'],
                                    sources: [{ name: 'Green Party', url: 'https://greenparty.org.uk/' }]
                                },
                                {
                                    text: 'Capital Gains Tax Equalisation',
                                    rationale: ['Projected to raise ~£12 billion annually by taxing passive wealth like active income.'],
                                    sources: [{ name: 'Green Party', url: 'https://greenparty.org.uk/' }]
                                },
                                {
                                    text: 'Fossil Fuel Subsidy Removal',
                                    rationale: ['Projected to raise £10–15 billion annually by ending direct and indirect subsidies to the fossil fuel industry.'],
                                    sources: [{ name: 'Green Party', url: 'https://greenparty.org.uk/' }]
                                },
                                {
                                    text: 'Corporate Tax Loophole Closure',
                                    rationale: ['Increasing tax revenue by £5–10 billion annually by strictly tackling corporate tax avoidance.'],
                                    sources: [{ name: 'Green Party', url: 'https://greenparty.org.uk/' }]
                                },
                                {
                                    text: 'Carbon Tax',
                                    rationale: ['Significant revenue from carbon pricing to fund the transition and support lower-income households.'],
                                    sources: [{ name: 'Green Party', url: 'https://greenparty.org.uk/' }]
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
