import styles from './AboutText.module.scss';

function AboutText() {
  return (
    <section className={styles.AboutText}>
      <div className={styles.AboutText__title}>О компании</div>
      <div className={styles.AboutText__text}>
        <p>
          Компания специализируется на&nbsp;разработке цифровых продуктов, охватывающих различные направления&nbsp;&mdash; от&nbsp;веб-сайтов до&nbsp;программного обеспечения на&nbsp;заказ.
          Мы&nbsp;создаем индивидуальные решения, которые максимально эффективно решают задачи клиентов, при этом всегда ориентируемся на&nbsp;уникальные потребности каждого проекта.
        </p>
        <p>
          В&nbsp;разработке программного обеспечения мы&nbsp;предлагаем создание индивидуальных решений, включая ERP-системы, CRM-системы и&nbsp;другие внутренние инструменты для бизнеса. <br></br>
          Также разрабатываем мобильные приложения для iOS и&nbsp;Android, которые могут решать задачи как для бизнеса, так и&nbsp;для конечных пользователей. В&nbsp;случае необходимости,
          мы&nbsp;интегрируем разрабатываемое&nbsp;ПО с&nbsp;другими внешними сервисами и&nbsp;системами, что позволяет нашим клиентам использовать все возможности технологий.
        </p>
        <p>
          Работаем от&nbsp;идеи до&nbsp;реализации, предоставляя полный спектр услуг&nbsp;&mdash; от&nbsp;консультаций на&nbsp;стадии планирования до&nbsp;прототипирования и&nbsp;тестирования
          продуктов.
        </p>
        <p>Наш стек: Unreal Engine, Blender, 3Ds Max, Figma, Python, Node.js, Flutter, React, Adobe After Effect, Adobe Illustrator, Adobe Photoshop</p>
      </div>
    </section>
  );
}

export default AboutText;
