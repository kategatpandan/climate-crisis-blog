// ============================================
// CLIMATE BLOG - MAIN JAVASCRIPT
// Screen Navigation, Modals, Gallery & Interactions
// ============================================

// ---------- SCREEN TOGGLE ----------
const homeScreen = document.getElementById('home-screen');
const blogScreen = document.getElementById('blog-screen');
const galleryScreen = document.getElementById('gallery-screen');

// Set initial state
if (homeScreen) homeScreen.style.display = 'block';
if (blogScreen) blogScreen.style.display = 'none';
if (galleryScreen) galleryScreen.style.display = 'none';

function showHomeScreen() {
    if (homeScreen) homeScreen.style.display = 'block';
    if (blogScreen) blogScreen.style.display = 'none';
    if (galleryScreen) galleryScreen.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showBlogScreen() {
    if (homeScreen) homeScreen.style.display = 'none';
    if (blogScreen) blogScreen.style.display = 'block';
    if (galleryScreen) galleryScreen.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showGalleryScreen() {
    if (homeScreen) homeScreen.style.display = 'none';
    if (blogScreen) blogScreen.style.display = 'none';
    if (galleryScreen) galleryScreen.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Make functions globally available
window.showHomeScreen = showHomeScreen;
window.showBlogScreen = showBlogScreen;
window.showGalleryScreen = showGalleryScreen;


// ---------- MODAL FUNCTIONALITY ----------
function createModal(content) {
    const existingModal = document.querySelector('.modal');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.className = 'modal';
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    const title = document.createElement('h2');
    title.textContent = content.title;
    const closeBtn = document.createElement('span');
    closeBtn.className = 'modal-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = () => modal.remove();
    modalHeader.appendChild(title);
    modalHeader.appendChild(closeBtn);
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    modalBody.innerHTML = content.body;
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    modal.style.display = 'block';
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
    document.addEventListener('keydown', function escHandler(e) { 
        if (e.key === 'Escape') { 
            modal.remove(); 
            document.removeEventListener('keydown', escHandler); 
        } 
    });
}

// ---------- CARD CONTENT FOR MODALS ----------
const cardContents = {
    'Global warming causes': {
        title: 'Global Warming Causes',
        body: `
            <img src="images/global-warming-causes.jpg" alt="industrial emissions">
            <p><strong>As we see extreme weather events growing—in number and in intensity—all around us, it is evident that climate change is a crisis that must be tackled. But in order to find the solutions, we must know the basics around global warming.</strong></p>
            <h4>What is Global Warming?</h4>
            <p>Global warming refers to the long-term increase in the Earth's average surface temperature, primarily observed since the Industrial Revolution. Over the past century, the planet has become significantly warmer, with the last 10 years being the warmest on record. This warming affects not just temperatures but also the broader climate system, leading to melting glaciers, rising sea levels, shifting wildlife habitats, and more extreme weather events. Scientists distinguish global warming as the underlying temperature increase that drives the broader phenomenon of climate change, which includes changes in rainfall patterns, storms, and regional climate variability.</p>
            <p>The impacts of global warming are already evident across the globe. For instance, glaciers and ice sheets are shrinking, sea levels are rising, and extreme weather events—such as heatwaves, droughts, and floods—are occurring more frequently and intensely. If global temperatures continue to rise unchecked, these effects could push natural systems past tipping points, triggering irreversible changes that threaten ecosystems, human societies, and food and water security. Limiting global warming to 1.5°C, as recommended in the Paris Agreement, is critical to minimizing these devastating consequences.</p>
            <h4>What Causes Global Warming?</h4>
            <p>Global warming is primarily caused by the increase of greenhouse gases in the atmosphere, such as carbon dioxide (CO₂), methane (CH₄), and nitrous oxide (N₂O). These gases trap heat from the sun, preventing it from escaping back into space—a process known as the greenhouse effect. While the greenhouse effect is a natural phenomenon that keeps the Earth habitable, human activities have significantly amplified it. Since the Industrial Revolution, the burning of fossil fuels for energy, transportation, and industrial processes has released vast amounts of greenhouse gases, enhancing the natural greenhouse effect and causing the planet to warm at an unprecedented rate.</p>
            <p>In addition to fossil fuel combustion, other human activities contribute to global warming. Deforestation reduces the Earth’s capacity to absorb CO₂, while agriculture, livestock management, and industrial processes release additional greenhouse gases. Natural factors, such as volcanic eruptions and solar cycles, do influence the climate, but climate studies show that these account for only a small fraction of recent warming. The rapid increase in greenhouse gas concentrations—much faster than any natural changes over thousands of years—makes global warming a uniquely urgent challenge, affecting ecosystems and human societies in ways that are difficult to reverse.</p>
            <div class="example-modern"><strong>📌 Global efforts:</strong> To support limiting warming to 1.5°C, the U.S. faces the task of cutting emissions to net zero by 2050, while rich nations scale climate finance to at least $1.3 trillion per year by 2035.</div>
            <div class="ref-modern">sources: <a href="https://www.nrdc.org/stories/global-warming-101" target="_blank" rel="noopener noreferrer">NRDC-Global Warming 101</a>, <a href="https://www.nationalgeographic.com/environment/article/global-warming-overview" target="_blank" rel="noopener noreferrer">National Geographic</a>, <a href="https://share.google/uJfdIcsvc8J6EX0yQ" target="_blank">Learning Geology</a></div>
        `
    },
    'Climate change impact': {
        title: 'Climate Change Impact',
        body: `
            <img src="images/climate-change.jpg" alt="flood">
            <p><strong>Climate change, driven by human activities, is causing global warming, sea level rise, and ecosystem disruption, requiring urgent action to reduce emissions.</strong></p>
            <h4>What is Climate Change?</h4>
            <p>Climate change refers to long-term changes in the state of the climate, which can be identified by shifts in average conditions or variability that persist over decades or longer. It can result from natural processes such as volcanic eruptions or solar cycles, but in recent times, human activities have become the dominant cause. In 2024, the global mean near-surface temperature reached 1.55°C above the 1850–1900 average, making it the warmest year on record. The oceans, which absorb about 90% of energy in the climate system, are reaching record warmth, and global mean sea levels hit record highs, showing the rapid and widespread changes already occurring.</p>
            <h4>Causes of Climate Change</h4>
            <p>Human-induced, or anthropogenic, climate change is primarily caused by activities that increase greenhouse gas emissions. Key contributors include:</p>
            <h5> • Burning fossil fuels for energy and transportation</h5>
            <h5> • Deforestation and changes in land use</h5>
            <h5> • Industrial processes and waste management</h5>
            <h5> • Livestock farming and fertilization</h5>
            <p>These activities trap heat in the atmosphere, leading to global warming. According to the IPCC Sixth Assessment Report, human activities have unequivocally caused global warming, raising the 10-year average global surface temperature for 2011–2020 to approximately 1.1°C above pre-industrial levels.</p>
            <h4>Climate Change Impacts</h4>
            <p>Climate change is already affecting the atmosphere, oceans, ice sheets, and ecosystems, leading to a wide range of adverse impacts. These include:</p>
            <h5> • More frequent and intense heat waves, droughts, and storms</h5>
            <h5> • Rising sea levels due to melting glaciers and ice sheets</h5>
            <h5> • Disruption to ecosystems, biodiversity, and human livelihoods</h5>
            <h5> • Increased health risks, such as heat stress, air pollution effects, and the spread of disease</h5>
            <p>The risks and damages increase with every increment of warming, making it critical to limit global warming to 1.5°C rather than 2°C or higher, which would provide greater protection for ecosystems and human societies.</p>
            <h4>International Response</h4>
            <p>Organizations like the World Meteorological Organization (WMO) and the Intergovernmental Panel on Climate Change (IPCC) provide governments with scientific guidance to develop climate policies. They coordinate research on climate variations, extreme events, and impacts on human activities, helping countries make evidence-based decisions for mitigation and adaptation.</p>
            <div class="ref-modern">sources: <a href="https://wmo.int/topics/climate-change/" target="_blank">World Meteorological Organization</a>, <a href="https://share.google/6QHWX7QPtkPimpvPS" target="_blank">CHEM Trust</a></div>
        `
    },
    'Biodiversity loss': {
        title: 'Biodiversity Loss',
        body: `
            <img src="images/biodiversity-loss.jpg" alt="deforestation">
            <p><strong>Biodiversity loss is the decline in the variety and abundance of life on Earth, threatening ecosystems and the essential services they provide, such as pollination, clean water, and climate regulation. Human activities like habitat destruction, overexploitation, pollution, climate change, and invasive species are the main drivers of this crisis. Protecting biodiversity through conservation, sustainable practices, and global cooperation is crucial for maintaining ecosystem resilience and human well-being.</strong></p>
            <h4>Biodiversity Loss: Understanding the Crisis</h4>
            <p>Biodiversity loss refers to the decline in the variety and abundance of life on Earth, including genetic, species, and ecosystem diversity. This reduction threatens the natural services that ecosystems provide, such as pollination, climate regulation, water purification, and nutrient cycling, which are essential for human well-being. Currently, up to 1 million species are at risk of extinction, and extinction rates are tens to hundreds of times higher than natural background rates.</p>
            <h4>Causes of Biodiversity Loss</h4>
            <p>Human activities are the main drivers of biodiversity loss. Overfishing, hunting, poaching, and unsustainable harvesting directly reduce species populations. Land-use changes from urbanization, agriculture, and infrastructure destroy and fragment habitats, making it harder for species to survive. Climate change exacerbates the problem by altering habitats, forcing species to migrate or adapt, and increasing the frequency of extreme weather events. Pollution, including plastics, heavy metals, and pesticides, further damages ecosystems, while invasive species can outcompete native species and disrupt local ecological balances.</p>
            <h4>Impacts on Humans and Nature</h4>
            <p>Biodiversity loss has far-reaching consequences for humans and the environment. Declines in biodiversity threaten food security, reduce clean water availability, and increase vulnerability to natural disasters. It also affects livelihoods in agriculture, forestry, and fisheries, while eroding cultural traditions tied to local ecosystems. Loss of biodiversity can limit medical and scientific discoveries, as diverse ecosystems often provide potential treatments for diseases and buffer against the spread of infections.</p>
            <h4>Global Efforts and Risk Management</h4>
            <p>International agreements such as the Convention on Biological Diversity, the Kunming-Montreal Global Biodiversity Framework, CITES, and the Bonn Convention aim to conserve biodiversity and promote sustainable use of natural resources. Effective interventions include promoting environmental responsibility, integrating decision-making across sectors, taking precautionary regulatory actions, strengthening environmental laws, and developing early warning systems for biodiversity loss. Addressing biodiversity loss together with other environmental crises like climate change and pollution is crucial to ensure resilient ecosystems and human societies.</p>
            <div class="ref-modern">sources: <a href="https://share.google/oSv6HBVv9RlT3JSwx">Biodiversity Loss (EN0501) - UNDRR</a>, <a href="https://share.google/wxpuSyAPeqsJAshRE">CNRS News</a></div>
        `
    },
    'Ocean crisis': {
        title: 'Ocean Crisis', 
        body: `
            <img src="images/ocean-crisis.jpg" alt="coral">
            <p><strong>Human activities are the main threats to oceans, with 80% of marine pollution originating from land-based sources. Oceans provide critical benefits, including food, shelter, oxygen, climate regulation, and carbon absorption, but global warming, overfishing, plastic pollution, oil spills, pesticides, industrial waste, air pollution, and invasive species are causing widespread ecosystem damage. Solutions include establishing Marine Protected Areas, reducing destructive fishing, supporting local conservation, minimizing military sonar, preventing accidental catch, and reducing pollution.</strong></p>
            <h4><strong>Ocean Crisis: Understanding the Threat</strong></h4>
            <p>Oceans cover 70% of the Earth’s surface and are vital for life, providing food, shelter, half of the oxygen we breathe, climate regulation, and carbon absorption. However, human activities pose serious threats to marine ecosystems. Global warming is increasing ocean temperatures, melting polar ice, and raising sea levels, which threaten coastal populations. Chemical pollution from pesticides and industrial waste harms marine life and contributes to ocean acidification. Oil spills, air pollution, invasive species, overfishing, and plastic waste further degrade ocean health, putting countless species at risk.</p>
            <p>To protect oceans, conservationists advocate for solutions such as creating Marine Protected Areas, reducing destructive fishing practices, supporting local conservation efforts, minimizing military sonar, preventing accidental bycatch, and reducing pollution. By implementing these strategies, we can help preserve marine biodiversity, maintain ecosystem services, and sustain the health of the oceans for future generations.</p>
            <h4><strong>Threats to Oceans:</strong></h4>
            <h5>• Global Warming - Rising ocean temperatures, melting ice, rising sea levels, and habitat stress.</h5>
            <h5>• Pesticides -  Agricultural chemicals enter oceans via runoff, depleting oxygen and killing marine life.</h5>
            <h5>• Industrial Waste -  Factories release toxins, nutrients, and carbon dioxide, causing acidification, coral bleaching, and algal blooms.</h5>
            <h5>• Oil Spills - Harm marine animals, cause birth defects in fish, and have long-term ecological impacts.</h5>
            <h5>• Air Pollution - Contributes to ocean acidification, coral death, and inhibits shell formation in marine species.</h5>
            <h5>• Invasive Species - Disrupt ecosystems, outcompete native species, and spread diseases.</h5>
            <h5>• Overfishing - Tripling of overfished stocks in 50 years threatens fish populations and marine food chains.</h5>
            <h5>• Plastic Pollution - Millions of tons of plastics enter oceans annually, harming wildlife and leaching chemicals.</h5>
            <h4><strong>Solutions for Protecting Oceans:</strong></h4>
            <h5>• Establish Marine Protected Areas (MPAs) - Expand marine parks and reserves for long-term conservation.</h5>
            <h5>• Reduce Destructive Fishing Practices-  Use less invasive gear, AI targeting, and sustainable methods.</h5>
            <h5>• Foster Local Conservation - Support small-scale fishers and coastal conservation programs.</h5>
            <h5>• Minimize Military Sona - Reduce noise pollution that harms marine mammals.</h5>
            <h5>• Prevent Accidental Catch (Bycatch) - Implement technologies like LED-lit nets and monitoring programs.</h5>
            <h5>• Reduce Pollution - Limit plastics, toxic chemicals, and pesticide runoff through government, industry, and individual action.</h5>
            <div class="ref-modern">sources: <a href="https://share.google/lDZfPRleEJTsGnG0q">National Geographic</a>, <a href="https://share.google/z6udQjAb7u0wnflOC">yahoo!finance</a></div>
        `
    },
    'Food & Agriculture': {
        title: 'Food & Agriculture', 
        body: `
            <img src="images/food-agriculture.jpg" alt="rice">
            <p><strong>Climate change and agriculture are closely connected, as farming both contributes to greenhouse gas emissions and is heavily affected by changing environmental conditions. These impacts threaten global food production and food security, making it harder for people to access sufficient and nutritious food.</strong></p>
            <h4><strong>Causes of Climate Change to Food and Agriculture</strong></h4>
            <p>Agriculture is a major contributor to climate change, producing significant amounts of greenhouse gases that enhance the greenhouse effect. Key sources include methane emissions from livestock digestion, nitrous oxide from fertilizers, and carbon dioxide released from deforestation to expand farmland. Additional emissions arise from manure management, rice cultivation, crop residue burning, and the use of fuel on farms. Beyond production, other stages of the food system—such as industrial processing, packaging, transportation, refrigeration, and food waste—also generate greenhouse gases, though to a smaller extent. Animal-based foods, particularly red meat, dairy, and farmed shrimp, have the highest emissions due to the land, feed, and energy required for production, while plant-based foods generally have a lower carbon footprint. Altogether, these activities contribute substantially to global warming, creating a feedback loop where climate change further threatens agricultural productivity and food security.</p>
            <h4><strong>Impacts of Climate Change on Food and Agriculture</strong></h4>
            <p>Climate change has wide-ranging impacts on agriculture and food security, threatening both crop and livestock production. Rising temperatures, more frequent heat waves, altered rainfall patterns, and extreme weather events like droughts and floods reduce crop yields and disrupt growing seasons, while heat stress can lower livestock productivity, fertility, and immunity. Sea level rise and shifting pest and disease patterns further compromise agricultural land and food supply. These changes can lead to higher food prices, reduced access to nutritious food, and increased vulnerability to hunger, particularly in less-developed regions, ultimately challenging global food security and livelihoods.</p>
            <h4>Solutions to Address Climate Change Impacts on Agriculture and Food Systems</h4>
            <h5>• Shift to plant-rich diets - Eat more plant-based foods (beans, lentils, nuts, grains, fruits, and vegetables) and reduce consumption of high-emission animal products like red meat and dairy.</h5>
            <h5>• Adopt alternative proteins - Use plant-based meat and dairy substitutes, insect-based proteins, or cultivated (lab-grown) meat to lower the environmental impact of food production.</h5>
            <h5>• Improve livestock management - Use better feeds, feeding techniques, rotational grazing, and smaller herd sizes to reduce methane and nitrous oxide emissions from cattle and other animals.</h5>
            <h5>• Enhance crop resilience - Develop and plant crop varieties that are more tolerant to heat, drought, pests, and diseases to maintain yields under changing climate conditions.</h5>
            <h5>• Improve fertilizer and manure management - Apply fertilizers more efficiently, compost manure properly, and adopt practices that reduce nitrous oxide and methane emissions.</h5>
            <h5>• Restore degraded lands - Rehabilitate overused or damaged agricultural land to increase carbon sequestration and improve soil health.</h5>
            <h5>• Reduce food waste - Buy only what you need, use leftovers, accept imperfect-looking produce, and compost organic waste to prevent methane emissions.</h5>
            <h5>• Adapt agricultural practices - Adjust sowing times, cultivation techniques, and irrigation practices to cope with climate extremes and reduce crop losses.</h5>
            <h5>• Promote local and sustainable food systems - Support local farmers, small-scale agriculture, and sustainable food production methods to reduce transport emissions and improve resilience.</h5>
            <h5>• Support policies and technologies - Invest in climate-smart agriculture, precision farming, and international responses to food shortages to minimize greenhouse gas emissions and maintain food security.</h5>
            <div class="ref-modern">sources: <a href="https://share.google/cU0S4OLlbfr6Enuta">Future Learn</a>, <a href="https://share.google/Lya5dwTfwOaKvVp9O">United Nations</a>, <a href="https://share.google/SRbJviWBuJQAzb4pX">KNN India</a></div>
        `
    },
    'Urban heat': {
        title: 'Urban Heat & Climate Migration',
        body: `
            <img src="images/urban-heat.jpg" alt="urban">
            <p><strong>In NSW, nearly 90% of people live in towns or cities, where urban environments are generally hotter than surrounding rural areas. Large cities can be 1°C to 3°C warmer than rural regions, and in some locations, surfaces like roads and buildings can be 10–20°C hotter than the surrounding air. This phenomenon, called the urban heat island effect, happens because urban materials absorb heat from the sun and slowly release it, while lower levels of vegetation reduce natural cooling. Water and greenery that usually cool cities are often limited, making built-up areas especially vulnerable to high temperatures.</strong></p>
            <h4><strong>Impacts on Health and Wellbeing</strong></h4>
            <p>Urban heat has wide-ranging effects on human health, ecosystems, and urban infrastructure. Temperatures above 28°C have been shown to increase health risks in major Australian cities, while extreme heat events can reduce economic productivity, stress electricity grids, and threaten urban wildlife. Cities like Western Sydney are projected to experience more extreme heat days, with historical examples including Penrith reaching 48.9°C in 2020 and Parramatta enduring 47 days over 35°C in 2019. Urban heat worsens the impacts of climate change, making extreme weather events more frequent and intense.</p>
            <h4><strong>Causes of Urban Heat</strong></h4>
            <h5><strong>• Human activities</strong> - Transport, industry, and energy use directly generate heat. Increased air-conditioning use adds to urban temperatures, creating a feedback loop that increases greenhouse gas emissions. </h5>
            <h5><strong>• Built environment</strong> - Roads, buildings, and other infrastructure absorb and retain heat, releasing it long after air temperatures drop.</h5>
            <h5><strong>• Reduced vegetation and water</strong> - Plants and trees naturally cool urban areas through shade and evapotranspiration. Less greenery, combined with drought and water restrictions, reduces this cooling effect, raising temperatures further.</h5>
            <h4><strong>Strategies to Reduce Urban Heat</strong></h4>
            <h5><strong>• Increase green cover</strong> - Planting trees, adding green roofs, and creating parks provide shade and cooling, with evapotranspiration reducing peak summer temperatures by up to 5°C.</h5>
            <h5><strong>• Water-sensitive design</strong> - Incorporating water features such as wetlands, ponds, fountains, and misting systems can effectively cool surrounding areas.</h5>
            <h5><strong>• Adapt buildings and infrastructure</strong> - Using light-colored, reflective, or permeable materials, providing shaded structures, and designing buildings with green walls or roofs reduces heat absorption.</h5>
            <h5><strong>• Reduce greenhouse gas emissions</strong> - Limiting emissions helps slow climate change and prevents further increases in urban heat.</h5>
            <h5><strong>• Provide heat refuges</strong> - Cool public spaces, such as air-conditioned libraries or parks with shade and water features, give communities a safe place to escape extreme heat events.</h5>
            <div class="ref-modern">sources: <a href="https://share.google/SOdjE95qVjmkvDKfS">AdaptNSW</a>, <a href="https://share.google/1Kwjsls9CcHN3HrtP">Pavement Technology, Inc.</a></div>
        `
    },
    'Solutions': {
        title: 'Solutions',
        body: `
            <img src="images/solutions.jpg" alt="solar">
            <p><strong>Climate change, global warming, and biodiversity loss are interconnected environmental crises threatening life on Earth. Human activities like burning fossil fuels and deforestation drive global warming, causing rising temperatures and disrupted weather patterns. These changes harm ecosystems, leading to biodiversity loss and weakening nature’s ability to provide clean air, water, and food. Together, they emphasize the importance of the urgent need for collective action to protect the environment and secure a sustainable future.</strong></p>
            <h4><strong>Nature based solutions</strong></h4>
            <p>Nature-based solutions protect and restore ecosystems to absorb carbon and support biodiversity. Forest conservation prevents deforestation, reducing carbon emissions and preserving wildlife habitats. Reforestation and habitat restoration revive damaged ecosystems and reintroduce native species. Sustainable farming, like agroforestry and soil conservation, increases carbon storage while maintaining productivity. Restoring wetlands and mangroves helps absorb carbon and reduce flooding. In cities, green spaces and tree planting cool urban areas, improve air quality, and provide habitats for wildlife.</p>
            <h4><strong>Technological solutions</strong></h4>
            <p>Technological solutions reduce emissions and improve efficiency through innovation. Renewable energy like solar, wind, and hydropower replaces fossil fuels, while electric vehicles and better batteries cut transportation pollution. Smart grids optimize energy use, and technologies such as energy-efficient appliances, climate-resilient crops, and early warning systems help societies adapt to climate impacts.</p>
            <h4><strong>Scientific solutions</strong></h4>
            <p>Scientific advancements are crucial for tackling environmental challenges. Researchers are developing clean hydrogen fuel, improved battery storage, and carbon capture technologies to reduce emissions. Biotechnology creates crops resistant to drought and extreme weather, while sustainable materials and processes minimize environmental impact and support economic growth.</p>
            <h4><strong>Engineering solutions</strong></h4>
            <p>Engineering solutions use large-scale interventions to address climate change. Techniques like carbon dioxide removal and solar radiation management reduce global temperatures, while infrastructure such as sea walls, flood barriers, and climate-resilient buildings protects communities. Green infrastructure, including permeable pavements and green roofs, helps manage urban heat and flooding, combining innovation and design to build resilience.</p>
            <h4><strong>Political solutions</strong></h4>
            <p>Political action is essential for large-scale change. Governments can implement carbon taxes, emission regulations, and clean energy standards, while international cooperation ensures shared responsibility through global agreements. Supporting vulnerable communities with adaptation programs and strong, transparent policies helps ensure effective long-term environmental protection.</p>
            <h4><strong>Market based solutions</strong></h4>
            <p>Market-based solutions use economic incentives to reduce emissions and environmental harm. Carbon pricing, like taxes and cap-and-trade, encourages businesses to cut emissions, while sustainable practices, green investments, and eco-friendly products align environmental responsibility with economic benefits. By factoring environmental costs into the market, companies are motivated to adopt cleaner, more sustainable practices.</p>
            <h4><strong>Local solutions</strong></h4>
            <p>Local communities can take practical steps to reduce environmental impacts. Green infrastructure, community gardens, bike lanes, and pedestrian-friendly areas lower emissions, manage heat, and improve biodiversity. Energy-efficient buildings, renewable energy, and habitat protection further cut carbon footprints and strengthen ecosystem resilience.</p>
            <h4><strong>Government solutions</strong></h4>
            <p>Governments are key in both prevention and adaptation strategies. Investing in renewable energy, public transportation, and climate adaptation plans reduces risks and dependence on fossil fuels. Supporting research, sustainable agriculture, conservation, and green infrastructure helps protect biodiversity, while incentives and regulations guide society toward more sustainable practices.</p>
            <h4><strong>Community solutions</strong></h4>
            <p>Communities can contribute to environmental protection through collective action. Recycling, supporting local agriculture, clean-up drives, water conservation, green building, and urban tree planting reduce waste, emissions, and resource pressure while improving air quality and biodiversity. By working together, communities create meaningful local impacts that support global environmental goals.</p>
            <p><strong>Together, these solutions show that tackling climate change and global warming requires coordinated efforts from individuals, communities, governments, and industries. No single solution is enough on its own, but combined, they can significantly reduce emissions, protect the environment, and create a more sustainable future.</strong></p>
            <div class="ref-modern">sourcers: <a href="https://share.google/vep69jms9kUiny8Wj">CONCERN Worldwide</a>, <a href="https://share.google/2E6aM1ihI2HKEurzd">Climate Resilience Portal</a></div>
        `
    },
    'Why it matters': {
        title: 'Why Protecting Our Planet Matters',
        body: `
            <img src="images/why-it-matters.jpg" alt="forest">
            <p><strong>Nature is more than just trees, rivers, or animals—it is the living foundation of our everyday lives. From the air we breathe and the water we drink to the food on our tables and the shelter that protects us, nature quietly supports us in countless ways. It gives us beauty, inspiration, and a sense of connection to the world around us. Yet, we often take it for granted, overlooking how our choices affect the planet that sustains us. By valuing nature and understanding its importance, we not only protect the environment but also ensure that future generations can enjoy the same health, resources, and wonder that we do today.</strong></p>
            <h4><strong>Why it’s important that we value nature?</strong></h4>
            <p>Valuing nature is important because it provides the essential resources and services that sustain life on Earth, support economies, and maintain the balance of our ecosystems. Forests, rivers, oceans, soils, and biodiversity supply food, clean water, and air, regulate the climate, and protect against natural disasters. When we recognize the true value of these natural resources—sometimes called “natural capital”—we make better decisions that consider long-term benefits rather than just short-term gains. Protecting and restoring nature not only preserves wildlife and biodiversity but also strengthens communities, supports sustainable development, and helps combat climate change. By valuing nature, we ensure a healthier, more resilient planet for current and future generations.</p>
            <h4><strong>How we value nature?</strong></h4>
            <p>We value nature by recognizing the benefits it provides to people, society, and the economy, and by incorporating these benefits into our decisions and actions. This can be done through conserving and restoring ecosystems, protecting wildlife habitats, and managing natural resources sustainably. Governments, businesses, and financial institutions can consider the economic and social value of natural resources—such as forests, rivers, oceans, and biodiversity—when planning policies, investments, and projects. Communities and individuals also play a role by supporting sustainable practices, reducing waste, planting trees, and promoting green infrastructure. By measuring and accounting for the value of nature, we can make choices that protect the environment, support human well-being, and ensure that natural resources continue to sustain life for future generations.</p>
            <div class="ref-modern">sources: <a href="https://share.google/xNCo0fnHHMI20kUn8">Shorthand</a>, <a href="https://share.google/cUBMPvHuub9uECtBh">WWF</a>, <a href="https://share.google/U1gApwKhnjE6du47z">Articles - Mind Foundation</a></div>
        `
    }
};


// ---------- GALLERY DATA ----------
const galleryItems = [
    {
        img: "images/crops.jpg",
        title: "Crops Under Threat",
        description: "Climate change is making it harder to grow many of the world's essential crops, as rising temperatures, droughts, and floods reduce yields and disrupt farming systems. These changes not only threaten food security but also harm biodiversity, as ecosystems that support agriculture struggle to survive under global warming.",
        source: "🔗 Source: CONCERN Worldwide",
        sourceLink: "https://share.google/CLIqVMSUyVq9mR9XC",
        size: "square"
    },
    {
        img: "images/plastic-turtle.jpg",
        title: "Plastic and Turtle",
        description: "Plastic pollution is choking our oceans and threatening the survival of sea turtles, who often mistake it for food or become trapped in it. By reducing our plastic use and cleaning up waste, we can help protect these ancient mariners and give them a fighting chance to thrive.",
        source: "🔗 Source: SWOT - The State of the World's Sea Turtles",
        sourceLink: "https://share.google/4PhOcIqd8tsq4gTCY",
        size: "wide"
    },
    {
        img: "images/stronger-storms.jpg",
        title: "Stronger Storms",
        description: "Hurricanes, typhoons, and cyclones form over warm tropical oceans when rising moist air begins to spin due to the Earth's rotation, creating powerful storms with high winds, heavy rain, and storm surges. While climate change isn't increasing the number of storms, it is making them stronger, wetter, and slower, raising the risk of extreme wind speeds, intense rainfall, and coastal flooding.",
        source: "🔗 Source: BBC",
        sourceLink: "https://share.google/T84ihKFXOMJ5nTuAB",
        size: "square"
    },
    {
        img: "images/species-extinction.jpg",
        title: "Species Extinction",
        description: "Human activities like deforestation, pollution, and overexploitation are driving species loss, while global warming and climate change make it even harder for plants and animals to survive in their natural habitats. As temperatures rise and ecosystems are damaged, more species face extinction, showing how closely biodiversity loss is tied to the changing climate.",
        source: "🔗 Source: Foundation for the Philippine Environment",
        sourceLink: "https://share.google/avZG0aLMiiw4RPcWR",
        size: "square"
    },
    {
        img: "images/wildfires.jpg",
        title: "Wildfires",
        description: "Wildfires are becoming more frequent and intense, sending toxic smoke and pollutants into the air that threaten human health and the environment. Exposure to wildfire smoke, especially tiny particles like PM2.5, can harm the lungs, heart, brain, and other organs, making it crucial to protect vulnerable populations and better understand the long-term impacts.",
        source: "🔗 Source: World Health Organization - WHO",
        sourceLink: "https://share.google/2AaGLgHjjliAMECRU",
        size: "wide"
    },
    {
        img: "images/pacific-islands.jpg",
        title: "Pacific Islands at Risk",
        description: "Pacific Island nations like Tuvalu and Kiribati are facing a future where rising seas will flood their homes and communities, threatening not just land but the culture and lives of millions. For the people living there, climate change is not an abstract problem, it is an urgent struggle for survival, justice, and the chance for future generations to live with dignity.",
        source: "🔗 Source: NASA Jet Propulsion Laboratory (JPL) (.gov)",
        sourceLink: "https://share.google/iWXrMZUdHLStoqJiJ",
        size: "wide"
    },
    {
        img: "images/coral-reefs.jpg",
        title: "Coral Reefs at Risk",
        description: "Coral bleaching is a direct result of rising ocean temperatures caused by global warming, and it destroys the habitats that countless marine species rely on. As reefs die, we lose biodiversity, food sources, and natural coastal protection, showing how climate change affects both wildlife and human communities.",
        source: "🔗 Source: World Wildlife Fund",
        sourceLink: "https://share.google/Bj6tr76EJwtHFqXbR",
        size: "wide"
    },
    {
        img: "images/glacier.jpg",
        title: "Melting Glaciers",
        description: "Glaciers are melting faster because of rising global temperatures caused by human activity. This leads to rising sea levels and growing risks for people, wildlife, and the planet.",
        source: "🔗 National Geographic",
        sourceLink: "https://share.google/qV5hSNJjkTBWLbasJ",
        size: "wide"
    },
    {
        img: "images/industrial-air-pollution.jpg",
        title: "Industrial Air Pollution",
        description: "Industrial air pollution drives climate change by releasing greenhouse gases like carbon dioxide and methane, which trap heat in the atmosphere and disrupt global climate patterns. Reducing these emissions through cleaner production, renewable energy, and advanced technologies can mitigate warming while protecting human health and ecosystems.",
        source: "🔗 Source: superflox",
        sourceLink: "https://share.google/jmVcOs9hFqbvVqObd",
        size: "wide"
    },
    {
        img: "images/traffic-jams.jpg",
        title: "Traffic Jams",
        description: "Road traffic significantly contributes to global warming by emitting greenhouse gases and air pollutants that harm both the climate and human health. Reducing its impact requires cleaner vehicles, better public transit, smart traffic management, and lifestyle changes like walking and cycling.",
        source: "🔗 Source: ScienceDirect.com",
        sourceLink: "https://share.google/mxBRKURS7EcRhFdGb",
        size: "square"
    },
    {
        img: "images/logging.jpg",
        title: "Illegal Logging",
        description: "Illegal logging in Latin America is driving deforestation, destroying biodiversity, and harming Indigenous communities, all while generating huge profits for criminal networks. New measures like the EU's Regulation on Deforestation-Free Products are helping ensure that the wood we use comes from legal, sustainable sources, making it harder for illegal operations to thrive.",
        source: "🔗 Source: Earth.Org",
        sourceLink: "https://share.google/h2S6aGD7gXKTN2dK3",
        size: "square"
    },
    {
        img: "images/india-farmers.jpg",
        title: "Climate Hits India's Farmers",
        description: "Climate change is hitting Indian farmers hard, making their work unpredictable as heatwaves, erratic rains, and floods threaten their crops, food supply, and way of life. Supporting them with climate-smart farming, diverse crops, organic methods, and community programs can help protect their livelihoods, families, and the environment they depend on.",
        source: "🔗 Source: idronline.org",
        sourceLink: "https://idronline.org/article/agriculture/the-impact-of-climate-change-on-agriculture-what-we-know/?",
        size: "tall"
    }
];


// ---------- LIGHTBOX FUNCTIONALITY ----------
let currentLightboxIndex = 0;
let currentLightboxItems = [];

function openLightbox(index, items) {
    currentLightboxIndex = index;
    currentLightboxItems = items;
    
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    if (lightbox && lightboxImg && lightboxCaption) {
        lightboxImg.src = items[index].img;
        lightboxCaption.innerHTML = `
            <strong>${items[index].title}</strong><br>
            ${items[index].description}<br><br>
            <small><a href="${items[index].sourceLink}" target="_blank" rel="noopener noreferrer">${items[index].source}</a></small>
        `;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('galleryLightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function navigateLightbox(direction) {
    if (!currentLightboxItems.length) return;
    
    currentLightboxIndex += direction;
    
    if (currentLightboxIndex < 0) {
        currentLightboxIndex = currentLightboxItems.length - 1;
    } else if (currentLightboxIndex >= currentLightboxItems.length) {
        currentLightboxIndex = 0;
    }
    
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    if (lightboxImg && lightboxCaption) {
        lightboxImg.src = currentLightboxItems[currentLightboxIndex].img;
        lightboxCaption.innerHTML = `
            <strong>${currentLightboxItems[currentLightboxIndex].title}</strong><br>
            ${currentLightboxItems[currentLightboxIndex].description}<br><br>
            <small><a href="${currentLightboxItems[currentLightboxIndex].sourceLink}" target="_blank" rel="noopener noreferrer">${currentLightboxItems[currentLightboxIndex].source}</a></small>
        `;
    }
}

function addLightboxHTML() {
    // Check if lightbox already exists
    if (document.getElementById('galleryLightbox')) return;
    
    const lightboxHTML = `
        <div id="galleryLightbox" class="gallery-lightbox">
            <span class="lightbox-close">&times;</span>
            <button class="lightbox-prev">‹</button>
            <button class="lightbox-next">›</button>
            <div class="lightbox-content">
                <img id="lightboxImg" class="lightbox-img" src="" alt="">
                <div id="lightboxCaption" class="lightbox-caption"></div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    
    // Get elements
    const lightbox = document.getElementById('galleryLightbox');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    const lightboxContent = document.querySelector('.lightbox-content');
    
    // Close button click
    if (closeBtn) {
        closeBtn.onclick = function(e) {
            e.stopPropagation();
            closeLightbox();
        };
    }
    
    // Previous button click
    if (prevBtn) {
        prevBtn.onclick = function(e) {
            e.stopPropagation();
            navigateLightbox(-1);
        };
    }
    
    // Next button click
    if (nextBtn) {
        nextBtn.onclick = function(e) {
            e.stopPropagation();
            navigateLightbox(1);
        };
    }
    
    // Close when clicking outside the content
    if (lightbox) {
        lightbox.onclick = function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        };
    }
    
    // Prevent closing when clicking inside content
    if (lightboxContent) {
        lightboxContent.onclick = function(e) {
            e.stopPropagation();
        };
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const lightbox = document.getElementById('galleryLightbox');
        if (lightbox && lightbox.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                navigateLightbox(-1);
            } else if (e.key === 'ArrowRight') {
                navigateLightbox(1);
            } else if (e.key === 'Escape') {
                closeLightbox();
            }
        }
    });
}

// Make lightbox functions globally available
window.closeLightbox = closeLightbox;
window.navigateLightbox = navigateLightbox;


// Conclusion section navigation buttons
const conclusionHomeBtn = document.getElementById('conclusionHomeBtn');
const conclusionGalleryBtn = document.getElementById('conclusionGalleryBtn');

if (conclusionHomeBtn) {
    conclusionHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Hide blog screen and show home screen
        document.getElementById('blog-screen').style.display = 'none';
        document.getElementById('home-screen').classList.add('active');
        document.getElementById('gallery-screen').style.display = 'none';
        // Update active screen
        document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
        document.getElementById('home-screen').classList.add('active');
        // Scroll to top
        window.scrollTo(0, 0);
    });
}

if (conclusionGalleryBtn) {
    conclusionGalleryBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Hide blog screen and show gallery screen
        document.getElementById('blog-screen').style.display = 'none';
        document.getElementById('home-screen').classList.remove('active');
        document.getElementById('gallery-screen').style.display = 'block';
        // Scroll to top
        window.scrollTo(0, 0);
    });
}
// ---------- RENDER GALLERY ----------
function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = galleryItems.map((item, index) => `
        <div class="gallery-item" data-index="${index}">
            <img src="${item.img}" alt="${item.title}" loading="lazy">
            <div class="gallery-overlay">
                <h3>${item.title}</h3>
                <p>${item.description.substring(0, 80)}...</p>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            openLightbox(index, galleryItems);
        });
    });
}


// ---------- HOME SCREEN FLOATING NAVIGATION ----------
function isAboutSectionVisible() {
    const aboutSection = document.querySelector('#home-screen .intro-card');
    if (!aboutSection) return false;
    
    const rect = aboutSection.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    return rect.top <= windowHeight * 0.7 && rect.bottom >= 0;
}

function updateHomeNavigationVisibility() {
    const homeNav = document.querySelector('#home-screen .home-floating-nav');
    if (!homeNav) return;
    
    if (isAboutSectionVisible()) {
        homeNav.style.opacity = '1';
        homeNav.style.visibility = 'visible';
    } else {
        homeNav.style.opacity = '0';
        homeNav.style.visibility = 'hidden';
    }
}

// Toggle mobile references dropdown
function toggleMobileRefs() {
    const content = document.getElementById('mobileRefContent');
    const header = document.querySelector('.mobile-ref-header');
    
    if (content && header) {
        if (content.classList.contains('show')) {
            content.classList.remove('show');
            header.classList.remove('active');
        } else {
            content.classList.add('show');
            header.classList.add('active');
        }
    }
}

// Close dropdown when clicking outside (optional)
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.mobile-ref-dropdown');
    const header = document.querySelector('.mobile-ref-header');
    
    if (dropdown && !dropdown.contains(event.target)) {
        const content = document.getElementById('mobileRefContent');
        if (content && content.classList.contains('show')) {
            content.classList.remove('show');
            if (header) header.classList.remove('active');
        }
    }
});

// ---------- EVENT LISTENERS ----------
document.addEventListener('DOMContentLoaded', function() {
    // Add lightbox HTML
    addLightboxHTML();
    
    // Render gallery
    renderGallery();

    // ===== ADD TAP OVERLAY FOR MOBILE GALLERY ITEMS =====
    const galleryItemsElements = document.querySelectorAll('#gallery-screen .gallery-item');
    
    galleryItemsElements.forEach(item => {
        item.addEventListener('touchstart', function(e) {
            galleryItemsElements.forEach(i => i.classList.remove('tapped'));
            this.classList.add('tapped');
            setTimeout(() => {
                this.classList.remove('tapped');
            }, 2000);
        });
    });

    // Open blog button
    const openBlogBtn = document.getElementById('openBlogBtn');
    if (openBlogBtn) {
        openBlogBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            showBlogScreen();
        });
    }
    
    // ===== HOME SCREEN NAVIGATION =====
    const homeNavHome = document.getElementById('homeNavHome');
    const homeNavAbout = document.getElementById('homeNavAbout');
    const homeNavBlog = document.getElementById('homeNavBlog');
    const homeNavGallery = document.getElementById('homeNavGallery');
    
    if (homeNavHome) {
        homeNavHome.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    if (homeNavAbout) {
        homeNavAbout.addEventListener('click', function(e) {
            e.preventDefault();
            const aboutSection = document.querySelector('.intro-card');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
    
    if (homeNavBlog) {
        homeNavBlog.addEventListener('click', function(e) {
            e.preventDefault();
            showBlogScreen();
        });
    }
    
    if (homeNavGallery) {
        homeNavGallery.addEventListener('click', function(e) {
            e.preventDefault();
            showGalleryScreen();
        });
    }
    
    // ===== BLOG SCREEN NAVIGATION =====
    const blogHomeNav = document.querySelectorAll('#blog-screen .home-floating-nav a');
    if (blogHomeNav.length >= 4) {
        blogHomeNav[0].addEventListener('click', function(e) {
            e.preventDefault();
            showHomeScreen();
        });
        
        blogHomeNav[1].addEventListener('click', function(e) {
            e.preventDefault();
            showHomeScreen();
            setTimeout(() => {
                const aboutSection = document.querySelector('.intro-card');
                if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        });
        
        blogHomeNav[2].addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        blogHomeNav[3].addEventListener('click', function(e) {
            e.preventDefault();
            showGalleryScreen();
        });
    }
    
    // ===== GALLERY SCREEN NAVIGATION =====
    const galleryNavHome = document.getElementById('galleryNavHome');
    const galleryNavAbout = document.getElementById('galleryNavAbout');
    const galleryNavBlog = document.getElementById('galleryNavBlog');
    const galleryNavGallery = document.getElementById('galleryNavGallery');
    
    if (galleryNavHome) {
        galleryNavHome.addEventListener('click', function(e) {
            e.preventDefault();
            showHomeScreen();
        });
    }
    
    if (galleryNavAbout) {
        galleryNavAbout.addEventListener('click', function(e) {
            e.preventDefault();
            showHomeScreen();
            setTimeout(() => {
                const aboutSection = document.querySelector('.intro-card');
                if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        });
    }
    
    if (galleryNavBlog) {
        galleryNavBlog.addEventListener('click', function(e) {
            e.preventDefault();
            showBlogScreen();
        });
    }
    
    if (galleryNavGallery) {
        galleryNavGallery.addEventListener('click', function(e) {
            e.preventDefault();
            showGalleryScreen();
        });
    }
    
    // ===== CARD CLICK HANDLERS FOR MODALS =====
    document.querySelectorAll('.large-card, .small-card').forEach(card => {
        card.addEventListener('click', function() {
            let title = '';
            if (this.classList.contains('large-card')) {
                title = this.querySelector('.large-card-title')?.textContent;
            } else {
                title = this.querySelector('.small-card-title')?.textContent;
            }
            if (title && cardContents[title]) {
                createModal(cardContents[title]);
            }
        });
    });
    
    // Hide home screen floating nav initially
    const homeFloatingNav = document.querySelector('#home-screen .home-floating-nav');
    if (homeFloatingNav) {
        homeFloatingNav.style.opacity = '0';
        homeFloatingNav.style.visibility = 'hidden';
        homeFloatingNav.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
    }
    
    // Initial visibility check
    updateHomeNavigationVisibility();
    
    // Store original function reference
    const originalShowHomeScreen = showHomeScreen;
    window.showHomeScreen = function() {
        originalShowHomeScreen();
        setTimeout(updateHomeNavigationVisibility, 100);
    };
});

// ===== SCROLL EVENT FOR HOME SCREEN FLOATING NAV =====
window.addEventListener('scroll', function() {
    const homeScreenEl = document.getElementById('home-screen');
    if (homeScreenEl && homeScreenEl.style.display !== 'none') {
        updateHomeNavigationVisibility();
    }
});

// ===== RESIZE EVENT HANDLER =====
window.addEventListener('resize', function() {
    const homeScreenEl = document.getElementById('home-screen');
    if (homeScreenEl && homeScreenEl.style.display !== 'none') {
        updateHomeNavigationVisibility();
    }
});