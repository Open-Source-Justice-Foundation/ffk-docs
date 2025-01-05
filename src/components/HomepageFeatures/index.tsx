import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Step by Step Guide",
    Svg: require("@site/static/img/step-by-step-guide.svg").default,
    description: (
      <>
        FFK guides you through each step of the process when creating your
        non-profit foundation, from incorporating to applying for status.
      </>
    ),
  },
  {
    title: "Clear Instructions",
    Svg: require("@site/static/img/clear-instructions.svg").default,
    description: (
      <>
        This site provides all the instructions you need to complete the
        required forms, and walks you through where and how to file them.
      </>
    ),
  },
  {
    title: "Fully Funded",
    Svg: require("@site/static/img/fully-funded.svg").default,
    description: (
      <>
        After following these instructions and completing your application, your
        non-profit foundation will be ready to receive tax-advantaged donations!
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className={styles.about}>
          <p className={styles.about_p1}>
            <span>
              The “Foundation Formation Kit” Project. The project’s goal is to
              develop and offer a kit of resources to turn any open-source
              project into a tax-exempt non-profit foundation.
            </span>{" "}
            Forming non-profits and obtaining tax-exempt status with the IRS is
            a time-consuming and opaque process that usually requires the
            services of legal counsel. This is largely cost-prohibitive for
            small- to medium-sized open-source projects. The Foundation
            Formation Kit will provide all the forms and instructions necessary
            for open-source projects to form their own foundations and apply for
            tax-exempt status, without legal overhead. Once established as
            non-profits, open-source projects can obtain financial support or
            crowdfunding and avoid onerous tax liability for sharing that
            support with their contributors and community.
          </p>
          <p>
            The tax-exempt foundation structure has previously been the
            exclusive privilege of large and well-capitalized open-source
            projects. The Foundation Formation Kit will give all open-source
            projects access to the benefits of this structure, regardless of
            size or means. A more formalized legal framework will accelerate and
            grow capital allocation into the open-source space. The Foundation
            Formation Kit will thus transform an ad-hoc and fragile industry
            into a robust, distributed ecosystem of nonprofits supporting
            open-source contributions and development.
          </p>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            View Docs
          </Link>
        </div>
      </div>
    </section>
  );
}
