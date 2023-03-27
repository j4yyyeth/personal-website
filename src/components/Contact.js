var nodemailer = require('nodemailer');

const Contact = () => {
  return (
    <div id="contact">
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact;
