// Scroll rotation for the main image
        window.addEventListener('scroll', () => {
          const img = document.querySelector('.img');
          if (img) {
            const scrollValue = window.scrollY;
            // Adjust the divisor (50) to change rotation speed
            img.style.transform = `rotate(${scrollValue / 50}deg)`;
          }
        });

        const sentence = `I work with founders, product teams, companies and brands based on strategy and innovation. 
I set one goal, cut noise, and move. 
When the job is done, the result is live and measured, not just designed.`;

        const words = sentence.split(" ");
        const container = document.getElementById("mixe");

        let current = 0;
        const step = 3;


        words.forEach(word => {
          const span = document.createElement("span");
          span.textContent = word + " ";
          span.classList.add("word");
          container.appendChild(span);
        });

        const spans = document.querySelectorAll(".word");


        function update() {
          spans.forEach((span, index) => {
            if (index < current) {
              span.classList.add("active");
            } else {
              span.classList.remove("active");
            }
          });
        }


        document.addEventListener("keydown", (e) => {
          if (e.key === "ArrowDown") {
            current = Math.min(current + step, spans.length);
            update();
          }

          if (e.key === "ArrowUp") {
            current = Math.max(current - step, 0);
            update();
          }
        });

        
 function toggleFaq(element) {
       
        element.classList.toggle('active');
   
        
        const icon = element.querySelector('.icon');
        if (element.classList.contains('active')) {
            icon.textContent = '−'; 
        } else {
            icon.textContent = '+'; 
        }
    }