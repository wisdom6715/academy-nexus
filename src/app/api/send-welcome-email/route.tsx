"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL, // Remove NEXT_PUBLIC_ for server-side
    pass: process.env.APP_PASSWORD, // Remove NEXT_PUBLIC_ for server-side
  },
});

// Next.js API route for student registration emails
export async function POST(request: Request): Promise<Response> {
  try {
    let studentEmail: string | null = null;
    let studentName: string | null = null;
    let studentFirstName: string | null = null;
    let selectedCourse: string | null = null;
    let whatsappGroupLink: string | null = null;

    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      // Handle JSON request body
      const body = await request.json();
      studentEmail = body.email;
      studentName = body.name;
      studentFirstName = body.firstName;
      selectedCourse = body.course;
      whatsappGroupLink = body.whatsappGroupLink || "https://chat.whatsapp.com/your-default-group-link"; // Fallback
    } else if (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded")) {
      // Handle FormData
      const formData = await request.formData();
      studentEmail = formData.get("email")?.toString() || null;
      studentName = formData.get("name")?.toString() || null;
      studentFirstName = formData.get("firstName")?.toString() || null;
      selectedCourse = formData.get("course")?.toString() || null;
      whatsappGroupLink = "https://chat.whatsapp.com/your-default-group-link";
    } else {
      return new Response(JSON.stringify({ success: false, message: "Unsupported Content-Type" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Validate required fields
    if (!studentEmail || !studentName || !studentFirstName) {
      return new Response(JSON.stringify({ success: false, message: "Missing required student information" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Format course name for display
    const formatCourseName = (course: string) => {
      const courseMap: { [key: string]: string } = {
        "frontend": "Frontend Development",
        "backend": "Backend Development",
        "fullstack": "Full Stack Development",
        "mobile": "Mobile Development",
        "data-science": "Data Science"
      };
      return courseMap[course] || course || "Programming";
    };

    const formattedCourse = formatCourseName(selectedCourse || "");
    const fullName = `${studentFirstName} ${studentName}`;

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: studentEmail,
      subject: `Welcome to CodeSpher Academy, ${studentFirstName}! 🚀`,
      html: `
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: bold;
        }
        .header p {
            margin: 10px 0 0 0;
            font-size: 16px;
            opacity: 0.9;
        }
        .content {
            padding: 40px 30px;
            text-align: center;
        }
        .welcome-message {
            font-size: 18px;
            color: #333;
            margin-bottom: 25px;
        }
        .course-info {
            background: #f8f9ff;
            padding: 20px;
            border-radius: 8px;
            margin: 25px 0;
            border-left: 4px solid #667eea;
        }
        .course-info h3 {
            color: #667eea;
            margin: 0 0 10px 0;
            font-size: 20px;
        }
        .course-info p {
            color: #666;
            margin: 0;
            font-size: 16px;
        }
        .whatsapp-section {
            background: #e8f5e8;
            padding: 25px;
            border-radius: 8px;
            margin: 25px 0;
            border: 2px solid #25d366;
        }
        .whatsapp-section h3 {
            color: #25d366;
            margin: 0 0 15px 0;
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
        .whatsapp-btn {
            display: inline-block;
            background-color: #25d366;
            color: #ffffff !important;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 25px;
            font-size: 16px;
            font-weight: bold;
            transition: all 0.3s ease;
            margin: 10px 0;
        }
        .whatsapp-btn:hover {
            background-color: #20b555;
            transform: translateY(-2px);
        }
        .next-steps {
            background: #fff3cd;
            padding: 20px;
            border-radius: 8px;
            margin: 25px 0;
            border-left: 4px solid #ffc107;
        }
        .next-steps h3 {
            color: #856404;
            margin: 0 0 15px 0;
        }
        .next-steps ul {
            text-align: left;
            color: #856404;
            margin: 0;
            padding-left: 20px;
        }
        .next-steps li {
            margin: 8px 0;
        }
        .footer {
            background: #f8f9fa;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #dee2e6;
        }
        .footer p {
            color: #6c757d;
            margin: 5px 0;
            font-size: 14px;
        }
        .emoji {
            font-size: 24px;
            margin: 0 5px;
        }
        .highlight {
            color: #667eea;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to Our Tech Academy! <span class="emoji">🎉</span></h1>
            <p>Your journey to becoming a tech professional starts here</p>
        </div>
        
        <div class="content">
            <div class="welcome-message">
                <p>Dear <strong class="highlight">${fullName}</strong>,</p>
                <p>Congratulations on taking the first step towards transforming your career in technology! We're absolutely thrilled to have you join our growing community of aspiring developers.</p>
            </div>

            ${selectedCourse ? `
            <div class="course-info">
                <h3><span class="emoji">📚</span> Your Selected Course</h3>
                <p>You've registered for <strong>${formattedCourse}</strong>. Get ready for an exciting learning journey ahead!</p>
            </div>
            ` : ''}

            <div class="whatsapp-section">
                <h3><span class="emoji">💬</span> Join Our WhatsApp Community to proceed with the bootcamp.</h3>
                <p>Connect with fellow students, ask questions, get updates, and stay motivated throughout your learning journey.</p>
                <a href="${whatsappGroupLink}" class="whatsapp-btn">
                    <span class="emoji">📱</span> Join WhatsApp Group
                </a>
                <p style="font-size: 14px; color: #666; margin-top: 15px;">
                    <strong>Important:</strong> Please join our WhatsApp group to receive important updates, course materials, and connect with your classmates.
                </p>
            </div>

            <div class="next-steps">
                <h3><span class="emoji">📋</span> What's Next?</h3>
                <ul>
                    <li>Join our WhatsApp group using the link above</li>
                    <li>Introduce yourself to the community</li>
                    <li>Prepare your learning environment and tools</li>
                    <li>Stay active and engaged with fellow students</li>
                </ul>
            </div>

            <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <p style="color: #1565c0; margin: 0; font-size: 16px;">
                    <span class="emoji">🌟</span> <strong>Remember:</strong> Every expert was once a beginner. Your dedication and consistency will be the keys to your success. We're here to support you every step of the way!
                </p>
            </div>
        </div>

        <div class="footer">
            <p><strong>Best regards,</strong></p>
            <p><strong>The Tech Academy Team</strong></p>
            <p>Ready to code your future? Let's get started! <span class="emoji">🚀</span></p>
            <hr style="border: none; border-top: 1px solid #dee2e6; margin: 20px 0;">
            <p style="font-size: 12px;">
                If you have any questions, feel free to ask in the WhatsApp group or contact our support team.
            </p>
        </div>
    </div>
</body>
</html>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Welcome email sent successfully to ${studentEmail}`);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Welcome email sent successfully",
      recipient: studentEmail 
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error: any) {
    console.error("❌ Error sending welcome email:", error);
    return new Response(JSON.stringify({ 
      success: false, 
      message: "Failed to send welcome email",
      error: error.message 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}