function ForLazyLoaderImg(lazyloaded) {
    if (!lazyloaded) {
        var images = document.querySelectorAll('.DImgZoomBlock picture img')
        var images2 = document.querySelectorAll('div.Imgresize img')
        var images3 = document.querySelectorAll('.DTopImg img.img-fluid.img100')
        var images4 = document.querySelectorAll('.DetailsPF img')
        let imageOptions = {}
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const image = entry.target
                // console.log(image);
                const newURL = image.getAttribute('data-src')
                image.src = newURL
                observer.unobserve(image)
            })
        }, imageOptions)
        images.forEach((image) => {
            observer.observe(image)
        })
        images2.forEach((image) => {
            observer.observe(image)
        })
        images3.forEach((image) => {
            observer.observe(image)
        })
        images4.forEach((image) => {
            observer.observe(image)
        })
        lazyloaded = true
    }
}


const scrollTop = (e) => {
    if (!e.ctrlKey) {
        setTimeout(function () {
            window.scrollTo({ top: 0, behavior: 'auto' });
        }, 100);
    }
};


// const getTimeDistance = (date) => {
//     // console.log(date);
//     let publishDateTime = date.replace(/-/g, '/');
//     let publishTime = new Date(publishDateTime);
//     let now = new Date();
//     var diff = new Date(now - publishTime);
//     var days = parseInt(diff / 1000 / 60 / 60 / 24);
//     var hours = parseInt(diff / 1000 / 60 / 60);
//     var minutes = parseInt(diff / 1000 / 60);
//     var seconds = parseInt(diff / 1000);
//     if (days >= 1) {
//         days = banglaDateConvetar(days.toString())
//         return days + ' দিন আগে';
//     }
//     else if (hours >= 1) {
//         hours = banglaDateConvetar(hours.toString())
//         return hours + ' ঘন্টা আগে';
//     }
//     else if (minutes >= 1) {
//         minutes = banglaDateConvetar(minutes.toString())
//         return minutes + ' মিনিট আগে';
//     }
//     else {
//         seconds = banglaDateConvetar(seconds.toString())
//         return seconds + ' সেকেন্ড আগে';
//     }
// }

const getTimeDistance = (date) => {
    if (!date) return '';

    let publishTime = new Date(date);

    // fallback if invalid
    if (isNaN(publishTime.getTime())) {
        publishTime = new Date(date.replace(/-/g, '/'));
    }

    if (isNaN(publishTime.getTime())) return '';

    let now = new Date();
    let diffMs = now - publishTime;

    let days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diffMs / (1000 * 60 * 60));
    let minutes = Math.floor(diffMs / (1000 * 60));
    let seconds = Math.floor(diffMs / 1000);

    if (days >= 1) {
        return banglaDateConvetar(days.toString()) + ' দিন আগে';
    } 
    else if (hours >= 1) {
        return banglaDateConvetar(hours.toString()) + ' ঘন্টা আগে';
    } 
    else if (minutes >= 1) {
        return banglaDateConvetar(minutes.toString()) + ' মিনিট আগে';
    } 
    else {
        return banglaDateConvetar(seconds.toString()) + ' সেকেন্ড আগে';
    }
};
function banglaDateConvetar(engDate) {
    var mapObj = {
        1: "১",
        2: "২",
        3: "৩",
        4: "৪",
        5: "৫",
        6: "৬",
        7: "৭",
        8: "৮",
        9: "৯",
        0: "০",
        January: "জানুয়ারি",
        February: "ফেব্রুয়ারি",
        March: "মার্চ",
        April: "এপ্রিল",
        May: "মে",
        June: "জুন",
        July: "জুলাই",
        August: "আগস্ট",
        September: "সেপ্টেম্বর",
        October: "অক্টোবর",
        November: "নভেম্বর",
        December: "ডিসেম্বর",
        am: "সকাল",
        pm: "দুপুর",
        Saturday: "শনিবার",
        Sunday: "রোববার",
        Monday: "সোমবার",
        Tuesday: "মঙ্গলবার",
        Wednesday: "বুধবার",
        Thursday: "বৃহস্পতিবার",
        Friday: "শুক্রবার",
        'جمادى الأولى': "জামাদিউল আউয়াল",
        'جمادى الآخرة': "জামাদিউছ ছানি",
        'رجب': "রজব",
        'شعبان': "শা’বান",
        'رمضان': "রমজান",
        'شوال': "শাওয়াল",
        'ذو القعدة': "জুল কাইদাহ",
        'ذو الحجة': "জুল হিজ্জাহ",
        'محرم ': "মুহররম ",
        'صفر': "সফর",
        'ربيع الأول': "রবিউল আউয়াল",
        'ربيع الثاني': "রবিউছ ছানি",
    };
    let replaceString = /1|2|3|4|5|6|7|8|9|0|January|February|March|April|May|June|July|August|September|October|November|December|am|pm|Saturday|Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|جمادى الأولى|جمادى الآخرة|رجب|شعبان|رمضان|شوال|ذو القعدة|ذو الحجة|محرم |ربيع الأول|صفر|ربيع الثاني/gi;
    engDate = engDate.replace(replaceString, function (matched) {
        return mapObj[matched];
    });
    return (engDate)
}
// function timeAgo(earlier, later = new Date()) {
//     // Parse both as UTC timestamps
//     const t1 = Date.parse(earlier);
//     const t2 = Date.parse(later);
  
//     // Shift into Bangladesh (UTC+6) by adding 6h
//     const BD_OFFSET_MS = 6 * 60 * 60 * 1000;
//     let delta = (t2 + BD_OFFSET_MS) - (t1);
  
//     if (delta < 0) delta = 0;
  
//     // Define units
//     const MS = {
//       day:    24 * 60 * 60 * 1000,
//       hour:   60 * 60 * 1000,
//       minute: 60 * 1000,
//       second: 1000,
//     };
  
//     // Pick the largest whole unit
//     for (const [unit, msPer] of Object.entries(MS)) {
//       const amount = Math.floor(delta / msPer);
//       if (amount > 0) {
//         return amount === 1
//           ? `1 ${unit} ago`
//           : `${amount} ${unit}s ago`;
//       }
//     }
  
//     return "just now";
//   }
function timeAgo(earlier, later = new Date()) {
    // Parse both as UTC timestamps
    const t1 = Date.parse(earlier);
    const t2 = Date.parse(later);
  
    // Shift into Bangladesh (UTC+6) by adding 6h
    const BD_OFFSET_MS = 6 * 60 * 60 * 1000;
    let delta = (t2 + BD_OFFSET_MS) - (t1);
  
    if (delta < 0) delta = 0;
  
    // Define units
    const MS = {
      day:    24 * 60 * 60 * 1000,
      hour:   60 * 60 * 1000,
      minute: 60 * 1000,
      second: 1000,
    };
  
    // English → Bangla digit converter
    function toBanglaDigits(num) {
      return num.toString().replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]);
    }
  
    // Pick the largest whole unit
    for (const [unit, msPer] of Object.entries(MS)) {
      const amount = Math.floor(delta / msPer);
      if (amount > 0) {
        if (unit === "day") {
          return amount === 1
            ? `${toBanglaDigits(amount)} দিন আগে`
            : `${toBanglaDigits(amount)} দিন আগে`;
        }
        if (unit === "hour") {
          return amount === 1
            ? `${toBanglaDigits(amount)} ঘন্টা আগে`
            : `${toBanglaDigits(amount)} ঘন্টা আগে`;
        }
        if (unit === "minute") {
          return amount === 1
            ? `${toBanglaDigits(amount)} মিনিট আগে`
            : `${toBanglaDigits(amount)} মিনিট আগে`;
        }
        if (unit === "second") {
          return amount === 1
            ? `${toBanglaDigits(amount)} সেকেন্ড আগে`
            : `${toBanglaDigits(amount)} সেকেন্ড আগে`;
        }
      }
    }
  
    return "এইমাত্র";
  }
  
export {
    ForLazyLoaderImg,
    scrollTop,
    timeAgo,
    getTimeDistance,
    banglaDateConvetar
}
