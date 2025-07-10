'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'

const socialLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/company/krios-construcoes/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/kriosconstrucoes/', label: 'Instagram' },
  { icon: FaFacebook, href: 'https://www.facebook.com/kriosConstrucoes', label: 'Facebook' },
]

const contactInfo = [
  {
    icon: FaPhone,
    label: 'Telefone',
    value: '+55 (11) 95582-5695',
    href: 'tel:+55 (11) 95582-5695',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'contato@kriosconstrucoes.com.br',
    href: 'mailto:contato@kriosconstrucoes.com.br',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Endereço',
    value: 'Rua Capitão Cassiano Ricardo de Toledo, 191, sala 706 - Chácara Urbana, Jundiaí - SP, 13201-840',
    href: 'https://maps.app.goo.gl/ciTuc1FnEXGFqDwx5',
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-dark text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            Estamos prontos para transformar seu projeto em realidade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target={info.icon === FaMapMarkerAlt ? '_blank' : undefined}
                rel={info.icon === FaMapMarkerAlt ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-darkGray/20 rounded-lg hover:bg-darkGray/30 transition-colors"
              >
                <info.icon className="text-2xl text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">{info.label}</h3>
                  <p className="text-secondary/80">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-darkGray/20 hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square md:aspect-video w-full rounded-lg overflow-hidden"
          >
            {/* <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=R.%20Cap.%20Cassiano%20Ricardo%20de%20Toledo,%20200%20-%20Ch%C3%A1cara%20Urbana,%20Jundia%C3%AD%20-%20SP,%2013201-840+(Krios%20Constru%C3%B5es)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6428944456143!2d-46.89583272434216!3d-23.18323014780986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf2688ab6108b5%3A0xa115e8721f001bcd!2sR.%20Cap.%20Cassiano%20Ricardo%20de%20Toledo%2C%20191%20-%20706%20-%20Ch%C3%A1cara%20Urbana%2C%20Jundia%C3%AD%20-%20SP%2C%2013201-840!5e0!3m2!1spt-BR!2sbr!4v1752169504607!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"/>
            {/* <div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=R.%20Cap.%20Cassiano%20Ricardo%20de%20Toledo,%20200%20-%20Ch%C3%A1cara%20Urbana,%20Jundia%C3%AD%20-%20SP,%2013201-840+(Krios%20Constru%C3%B5es)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps map</a></iframe></div> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
