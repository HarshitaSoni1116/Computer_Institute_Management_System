package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.javamail.MimeMessageHelper;
@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendAdmissionMail(
            String studentName,
            String course,
            String mobile) {

        SimpleMailMessage message =
                new SimpleMailMessage();

        message.setTo("soniharshita8126@gmail.com");

        message.setSubject(
                "New Admission Inquiry");

        message.setText(
                "New Admission Received\n\n" +
                "Student Name: " + studentName +
                "\nCourse: " + course +
                "\nMobile: " + mobile
        );

        mailSender.send(message);
    }

    public void sendConfirmationMail(
        String customerEmail,
        String studentName) throws MessagingException {

    MimeMessage message = mailSender.createMimeMessage();

    MimeMessageHelper helper =
            new MimeMessageHelper(message, true);

    helper.setTo(customerEmail);

    helper.setSubject(
            "🎓 Admission Inquiry Received Successfully");

    String html = """
    <!DOCTYPE html>
    <html>
    <body style="font-family: Arial, sans-serif;
                 background:#f5f5f5;
                 padding:20px;">

      <div style="
          max-width:700px;
          margin:auto;
          background:white;
          border-radius:15px;
          overflow:hidden;
          box-shadow:0 5px 20px rgba(0,0,0,0.15);">

          <div style="
              background:#0f5132;
              padding:30px;
              text-align:center;">

              <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800"
              width="100%"
              style="border-radius:10px;">

              <h1 style="
                  color:#FFD700;
                  margin-top:20px;">
                  Computer Training Institute
              </h1>

          </div>

          <div style="padding:40px;">

              <h2 style="color:#0f5132;">
                  Admission Inquiry Received 🎉
              </h2>

              <p>
                  Dear Student,
              </p>

              <p>
                  Thank you for showing interest in our
                  Computer Training Institute.
              </p>

              <p>
                  We have successfully received your inquiry.
                  Our admission team will contact you shortly.
              </p>

              <ul>
                  <li>✅ Course Details</li>
                  <li>✅ Fee Structure</li>
                  <li>✅ Batch Timings</li>
                  <li>✅ Certifications</li>
                  <li>✅ Career Guidance</li>
              </ul>

              <div style="
                  background:#e8f5e9;
                  padding:20px;
                  border-radius:10px;
                  margin-top:20px;">

                  <b>📞 Contact:</b> +91 7089080900<br>
                  <b>📍 Location:</b> panagar,Jabalpur, Madhya Pradesh<br>
                  <b>✉ Email:</b> info@yourinstitute.com
              </div>

              <p style="margin-top:30px;">
                  We look forward to helping you build a
                  successful career in technology.
              </p>

              <h3 style="color:#0f5132;">
                  Best Regards,
              </h3>

              <p>
                  Admissions Team<br>
                  Computer Training Institute
              </p>

          </div>

      </div>

    </body>
    </html>
    """;

    helper.setText(html, true);

    mailSender.send(message);
}
}