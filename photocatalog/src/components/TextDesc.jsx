import React from 'react'

const TextDesc = ({selectedImage,taj, maldives, goa,ladakh, singapore, italy}) => {
  return (
    <span className='textPortion'>
          {selectedImage === taj && (<>
            <span className='head'>Taj Mahal</span>
            <span className='desc'>The Taj Mahal, situated in Agra, Uttar Pradesh, India, is an architectural marvel that stands as a testament to love and beauty. Built in the 17th century, it was commissioned by the Mughal Emperor Shah Jahan as a mausoleum for his beloved wife, Mumtaz Mahal. The Taj Mahal holds a significant place in history and is recognized as a UNESCO World Heritage Site.
                                    The architecture of the Taj Mahal is a fusion of various styles, combining elements of Persian, Islamic, and Indian design. It is crafted from white marble, which gives it its distinctive appearance and radiance. The entire complex is meticulously planned and symmetrical, with beautiful gardens and reflecting pools enhancing its enchanting ambiance. The central structure, the main mausoleum, is adorned with intricate marble inlay work, featuring delicate floral patterns and calligraphy from the Quran.</span>
          </>)}

          {selectedImage === italy && (<>
            <span className='head'>Italy</span>
            <span className='desc'>Italy, officially known as the Italian Republic, is a country located in Southern Europe. It is renowned for its rich history, cultural heritage, stunning landscapes, and world-renowned cuisine. Italy's history dates back thousands of years and has been shaped by various civilizations and empires. The ancient Romans, with their vast empire, left a lasting legacy in architecture, law, and governance. Italy also played a pivotal role during the Renaissance period, with influential artists, thinkers Florence and Rome.
                                  `Italy is a treasure trove of cultural landmarks and UNESCO World Heritage Sites. The historic city of Rome is home to iconic structures such as the Colosseum, Roman Forum, and the Vatican City, where St. Peter's Basilica and the Sistine Chapel can be found. Florence, known as the birthplace of the Renaissance, boasts magnificent artworks, including Michelangelo's David and Botticelli's Birth of Venus. The canals of Venice, with its unique.</span>
          </>)}
          {selectedImage === singapore && (<>
            <span className='head'>Singapore</span>
            <span className='desc'>Singapore, officially known as the Republic of Singapore, is a vibrant city-state and island country located in Southeast Asia. Despite its small size, Singapore has established itself as a global financial and commercial hub, known for its efficiency, cleanliness, and modern infrastructure. Here, the convergence of diverse cultures, stunning architecture, culinary delights, and green spaces create a unique and dynamic experience for visitors.
                                    Singapore's history dates back centuries, with evidence of human habitation on the island since the 14th century. Throughout its history, Singapore has been influenced by various cultures, including Malay, Chinese, Indian, and European. The city-state has emerged as a thriving melting pot, where these influences blend harmoniously.</span>
          </>)}

          {selectedImage === ladakh && (<>
            <span className='head'>Ladakh</span>
            <span className='desc'>Ladakh, often referred to as "The Land of High Passes," is a region located in the northernmost part of India, in the state of Jammu and Kashmir. Nestled amidst the majestic Himalayas, Ladakh is known for its breathtaking landscapes, ancient monasteries, and unique cultural heritage. It is a land of stark contrasts, with rugged mountains, barren deserts, and pristine lakes that create a surreal and captivating environment.
                                    Ladakh's geography is characterized by high-altitude mountain ranges and deep valleys. The region is home to some of the world's highest motorable passes, such as Khardung La and Chang La, which attract adventure enthusiasts and bikers from around the world. The picturesque Pangong Lake, with its ever-changing hues of blue, and the serene Nubra Valley, known for its sand dunes and double-humped camels, are among the natural wonders that draw visitors to Ladakh.</span>
          </>)}

          {selectedImage === maldives && (<>
            <span className='head'>Maldives</span>
            <span className='desc'>The Maldives, located in the Indian Ocean, is an archipelago nation consisting of 26 coral atolls and over 1,000 islands. Known for its breathtaking natural beauty, crystal-clear turquoise waters, and pristine white sandy beaches, the Maldives is a tropical paradise that captivates visitors from around the world. This island nation is renowned for its luxurious resorts, abundant marine life, and vibrant coral reefs, making it a popular destination for honeymooners, divers, and beach enthusiasts.
                                    The Maldives offers a range of activities and experiences for visitors. Its idyllic beaches provide the perfect setting for relaxation, sunbathing, and romantic getaways. The warm tropical waters are teeming with marine life, making it a haven for snorkeling and diving enthusiasts. Snorkelers can explore vibrant coral gardens, swim alongside colorful fish, and even encounter majestic sea turtles and manta rays. Scuba divers have the opportunity.</span>
          </>)}
          {selectedImage === goa && (<>
            <span className='head'>Goa</span>
            <span className='desc'>Goa, located on India's western coast, is a mesmerizing state renowned for its picturesque beaches, captivating landscapes, and fascinating history. Nestled along the Arabian Sea, it boasts a unique blend of Indian and Portuguese influences, a legacy of its colonial past. The history of Goa spans several centuries, with evidence of human settlements dating back to ancient times. It witnessed the rule of various dynasties, including the Mauryas, Satavahanas, and Kadambas, each leaving their mark on the region's cultural fabric.
                                  However, it was during the 16th century that Goa's destiny took a significant turn. The arrival of the Portuguese, led by the legendary explorer Vasco da Gama, marked the beginning of a new era. The Portuguese established their colonial presence in Goa, transforming it into a bustling trading hub and an important maritime center.  </span>
          </>)}
        </span>
  )
}

export default TextDesc