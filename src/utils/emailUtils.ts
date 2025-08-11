export const openEmailClient = (
  email: string,
  subject: string = '',
  body: string = ''
) => {
  const encodedEmail = encodeURIComponent(email);
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  // Tenta abrir no Gmail primeiro
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedEmail}&su=${encodedSubject}&body=${encodedBody}`;
  
  // Abre em nova aba
  const gmailWindow = window.open(gmailUrl, '_blank');
  
  // Se não conseguir abrir, usa mailto como fallback
  if (!gmailWindow || gmailWindow.closed || typeof gmailWindow.closed == 'undefined') {
    const mailtoUrl = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
    window.location.href = mailtoUrl;
  }
};