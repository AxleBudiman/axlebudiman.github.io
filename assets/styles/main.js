document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(prevent) {
    prevent.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    });
  });
});

const name = document.getElementById('name')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const brief = document.getAnimations('brief')

FormData.addEventListener('submit', (e) => {
  let messages = []
  if (phone.value.length < 11) {
    messages.push('Input correct number')
  }
  
  if (brief.value == null) {
    messages.push('Please let us know your brief')
  }
  
  if (name,phone,email,brief.length > 1) {
    e.preventDefault()
    alert('Thank you for sending us your brief. We will reach you out ASAP !')
  }
})