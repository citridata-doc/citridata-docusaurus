import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Sensorización, infraestructuras y tecnologías de datos',
    Svg: require('@site/static/img/001.svg').default,
    description: (
      <>
      
      </>
    ),
  },
  {
    title: 'Observación de la Tierra y el clima',
    Svg: require('@site/static/img/002.svg').default,
    description: (
      <>
       
      </>
    ),
  },
  {
    title: 'Eficiencias en el uso del suelo, ambiente, insumos y estilos de agricultura',
    Svg: require('@site/static/img/003.svg').default,
    description: (
      <>
   
      </>
    ),
  },
  {
    title: 'Optimización de agua y energía',
    Svg: require('@site/static/img/004.svg').default,
    description: (
      <>
     
      </>
    ),
  },
  {
    title: 'Gestión pre y postcosecha e industria alimentaria',
    Svg: require('@site/static/img/005.svg').default,
    description: (
      <>
       
      </>
    ),
  },
  {
    title: 'Competencia de paises terceros en el mercado de cítricos',
    Svg: require('@site/static/img/006.svg').default,
    description: (
      <>
       
      </>
    ),
  },
  {
    title: 'Gobernanza y desarrollo de oportunidades de negocio y utilidades',
    Svg: require('@site/static/img/012.svg').default,
    description: (
      <>
       
      </>
    ),
  }           
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
