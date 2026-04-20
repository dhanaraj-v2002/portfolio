// ============================================
// DHANARAJ V — Portfolio Data
// Edit this file to update your portfolio!
// ============================================

export const personal = {
  name: 'Dhanaraj V',
  initials: 'Welcome',
  role: 'DevOps Engineer',
  company: 'HCL Technologies',
  email: 'dhanarajv1310@gmail.com',
  phone: '+91 9524579105',
  linkedin: 'https://linkedin.com/in/dhanaraj-v-6286ba362',
  linkedinHandle: 'dhanaraj-v-6286ba362',
  github: 'https://github.com/dhanaraj-v2002',
  githubHandle: 'dhanaraj-v2002',
  location: 'Chennai, India',
  openTo: 'Chennai, Bengaluru',
  notice: '3 Months',
  languages: 'English, Tamil',
  resumeUrl: '/Dhanaraj_DevOps_Engineer.pdf',
  summary:
    'Results-driven DevOps Engineer at HCL Technologies with 3.8 years designing high-availability, scalable microservices architectures and secure cloud infrastructure for production SaaS platforms on AWS.',
  highlight:
    'Selected for HCL TechBee — a competitive earn-while-you-learn engineering program.',
}

export const stats = [
  { num: 3.8, unit: 'yrs',  label: 'Experience',              decimal: true  },
  { num: 70,  unit: '%',    label: 'Deployment Time Reduced',  decimal: false },
  { num: 50,  unit: '+',    label: 'Servers Automated',        decimal: false },
  { num: 99.9,unit: '%',    label: 'Uptime SLA',               decimal: true  },
  { num: 4,   unit: '+',    label: 'Cloud Certifications',     decimal: false },
]

export const aboutCards = [
  { icon: '🚀', title: '70% Faster Deploys',  desc: 'Cut deployment time from ~2 hrs to 15–20 min via automated multi-stage CI/CD pipelines.' },
  { icon: '💰', title: '$15K/yr Saved',        desc: 'Cloud cost optimization via rightsizing, spot instances & autoscaling strategy.' },
  { icon: '⚡', title: '45% Lower MTTR',       desc: 'Proactive observability with Prometheus, Grafana & automated on-call runbooks.' },
  { icon: '🔧', title: '95% Less Errors',      desc: 'Consistent environments via Terraform IaC with remote state & DynamoDB locking.' },
]

export const skills = [
  {
    icon: '☁️',
    title: 'Cloud & IaC',
    primary:    ['AWS EC2', 'AWS EKS', 'AWS VPC', 'S3', 'RDS', 'IAM', 'ALB', 'ECR', 'CloudWatch', 'Terraform', 'Ansible', 'CloudFormation'],
    secondary:  [ 'GCP', 'Azure'],
    tertiary:   [ 'AI', 'ML' ],
  },
  {
    icon: '🐳',
    title: 'Containers & Orchestration',
    primary:   ['Docker', 'Kubernetes', 'Amazon EKS', 'Helm'],
    secondary: ['NGINX Ingress', 'HPA', 'RBAC'],
    tertiary:  ['Docker Compose', 'Amazon ECR'],
  },
  {
    icon: '⚙️',
    title: 'CI/CD & GitOps',
    primary:   ['GitHub Actions','Multi-Stage Pipelines', 'Jenkins'],
    secondary: ['GitOps', 'AWS CodePipeline'],
    tertiary:  ['Semantic Versioning', 'ArgoCD'],
  },
  {
    icon: '📊',
    title: 'Observability',
    primary:   ['Prometheus', 'Grafana', 'AWS CloudWatch'],
    secondary: ['ELK Stack', 'Datadog'],
    tertiary:  ['Incident Management', 'Runbook Authoring'],
  },
  {
    icon: '🔒',
    title: 'Security / DevSecOps',
    primary:   ['IAM Least-Privilege', 'Trivy Scanning', 'DevSecOps'],
    secondary: ['SSL/TLS', 'VPC Design'],
    tertiary:  ['Security Groups', 'Vulnerability Assessment'],
  },
  {
    icon: '💻',
    title: 'Linux & Scripting',
    primary:   ['Linux Admin', 'Bash/Shell', 'YAML'],
    secondary: ['Ubuntu', 'CentOS'],
    tertiary:  ['Python', 'JSON', 'PostgreSQL', 'DynamoDB'],
  },
]

export const certifications = [
  { type: 'gcp',   abbr: 'GCP', name: 'Professional Network Engineer',    issuer: 'Google Cloud'   },
  { type: 'gcp',   abbr: 'GCP', name: 'Cloud Digital Leader',             issuer: 'Google Cloud'   },
  { type: 'azure', abbr: 'AZ',  name: 'Azure AI Fundamentals (AI-900)',   issuer: 'Microsoft Azure' },
  { type: 'azure', abbr: 'AZ',  name: 'Azure Fundamentals (AZ-900)',      issuer: 'Microsoft Azure' },
]

export const experience = [
  {
    role:    'DevOps Engineer',
    company: 'HCL Technologies',
    period:  'Jul 2022 – Present',
    type:    'Full-time',
    tech:    ['Terraform','AWS EKS','Docker','Kubernetes','GitHub Actions','ArgoCD','Prometheus','Grafana','Jenkins','Python'],
    bullets: [
      'Architected AWS infrastructure using <b>Terraform</b> with modular design, S3 remote state & DynamoDB locking — reducing manual provisioning errors by <b>95%</b>.',
      'Built multi-stage CI/CD pipelines integrating Terraform, Docker build, Trivy scan & automated deploy — cutting deployment time by <b>70%</b> (2 hrs → 15–20 min), supporting <b>50+ deploys/month</b>.',
      'Containerized apps with Docker multi-stage builds, reducing image sizes by <b>30%</b> & improving pipeline build speed by <b>40%</b>.',
      'Deployed & managed Kubernetes workloads on <b>EKS</b> across multiple AWS AZs — ensuring <b>99.9% uptime SLA</b> via rolling updates, NGINX Ingress, HPA & RBAC.',
      'Implemented <b>GitOps workflows with ArgoCD</b> for declarative, Git-driven deployments with DevSecOps controls enforced at every pipeline stage.',
      'Monitoring & observability with Prometheus, Grafana & CloudWatch — reducing <b>MTTR by 45%</b> via proactive detection and metric-driven root cause analysis.',
      'Cost optimization strategies — rightsizing EC2, spot instances & autoscaling — reducing monthly cloud spend by <b>20% (~$15K/year savings)</b>.',
      'Automated configuration management across <b>50+ Linux servers</b> via Ansible — reducing operational overhead by <b>60%</b>.',
      'Onboarded <b>8+ new microservices</b> to Kubernetes with self-service tooling, cutting onboarding time from 3 days to <b>4 hours</b>.',
      'Collaborated in Agile team of 10–15 engineers, maintaining <b>&lt;2 hr SLA response time</b> for incident management.',
    ],
  },
]

export const projects = [
  {
    num: '01',
    title: 'AWS EKS Deployment with CodePipeline',
    desc: 'End-to-end CI/CD pipeline deploying a containerized React application to AWS EKS using AWS CodePipeline and CodeBuild with automated build, push, and deployment stages.',
    highlights: [
      'Containerized React application using Docker and pushed images to AWS ECR',
      'Built automated CI/CD pipeline using AWS CodePipeline and CodeBuild for seamless deployments',
      'Deployed application to AWS EKS using Kubernetes manifests (Deployment & Service YAML)',
      'Integrated AWS CloudWatch for centralized logging and monitoring of build and runtime',
      'Enabled zero-downtime deployments with fully automated release workflow'
    ],
    tech: ['React', 'Docker', 'AWS ECR', 'AWS EKS', 'CodeBuild', 'CodePipeline', 'CloudWatch', 'GitHub'],
    featured: true,
  },
  {
    num: '02',
    title: 'AWS EKS Deployment with Jenkins & Terraform',
    desc: 'Infrastructure provisioning and CI/CD automation for deploying a containerized React application to AWS EKS using Terraform and Jenkins.',
    highlights: [
      'Provisioned AWS infrastructure (VPC, IAM roles, EC2) using Terraform with reusable and modular configurations',
      'Deployed Dockerized React application to AWS EKS using Kubernetes manifests (Deployment & Service YAML)',
      'Configured Jenkins declarative pipeline with GitHub webhook for automated build, Docker image push to DockerHub, and EKS deployment',
      'Implemented end-to-end CI/CD pipeline with automated triggers on code commits',
      'Set up monitoring to track application and cluster health with alerting for downtime'
    ],
    tech: ['React', 'Docker', 'DockerHub', 'Terraform', 'AWS EKS', 'Jenkins', 'GitHub'],
    featured: false,
  },
  {
    num: '03',
    title: 'DevOps Build – AWS EC2 Deployment with Jenkins & Docker',
    desc: 'Automated CI/CD pipeline for building, containerizing, and deploying applications on AWS EC2 using Jenkins and Docker.',
    highlights: [
      'Automated Docker image build and deployment using custom Bash scripts and Docker Compose',
      'Configured Jenkins pipeline integrated with GitHub for continuous build and deployment',
      'Implemented automated image push to DockerHub with version control for dev and prod environments',
      'Deployed application on AWS EC2 (t2.micro) with secure configuration and controlled SSH access',
      'Ensured consistent local and production environments using Docker-based containerization'
    ],
    tech: ['React', 'Docker', 'Docker Compose', 'Jenkins', 'AWS EC2', 'Bash', 'GitHub', 'DockerHub'],
    featured: false,
  },
]

export const education = [
  {
    degree:   'Master of Computer Applications (MCA)',
    uni:      'SASTRA University',
    period:   'Jan 2026 – Jan 2028',
    status:   'pursuing',
    desc:     'Advanced specialization in computer applications and emerging technologies.',
  },
  {
    degree:   'Bachelor of Computer Applications (BCA)',
    uni:      'Amity University, Noida',
    period:   'Jan 2023 – Jan 2026',
    status:   'completed',
    desc:     'Foundation in computer science, programming, and application development.',
  },
]

export const orbitBadges = ['AWS', 'K8s', 'Terraform', 'Docker', 'CI/CD', 'GitOps']

export const terminalLines = [
  'DevOps Engineer @ HCL Technologies',
  'AWS · Kubernetes · Terraform · GitOps',
  'Building infra that never sleeps...',
]
