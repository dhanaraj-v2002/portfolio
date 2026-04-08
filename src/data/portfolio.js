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
    title: 'End-to-End EKS Deployment\nwith Terraform & GitOps',
    desc: 'Production-ready Elastic Kubernetes Service infrastructure with a fully automated GitOps-based CI/CD pipeline enabling zero-touch deployments from code commit to live URL.',
    highlights: [
      'Kubernetes manifests, IAM roles for service accounts (IRSA), ECR integration',
      'Helm charts with Prometheus/Grafana observability stack',
      'Secure cluster access controls — fully cloud-agnostic SaaS infrastructure',
    ],
    tech: ['Terraform', 'AWS EKS', 'Docker', 'GitHub Actions', 'Helm', 'IAM', 'ECR'],
    featured: true,
  },
  {
    num: '02',
    title: 'Multi-Environment Infrastructure Automation',
    desc: 'Reusable Terraform modules for networking, compute & storage with workspace strategy and remote state management for dev, staging & production environments.',
    highlights: [
      'S3 + DynamoDB remote state locking strategy',
      'Zero manual intervention, fully reproducible environments',
      'Infrastructure provisioning time: hours → minutes',
    ],
    tech: ['Terraform', 'AWS VPC', 'EC2', 'RDS', 'S3', 'DynamoDB'],
    featured: false,
  },
  {
    num: '03',
    title: 'Container Optimization & Image Lifecycle',
    desc: 'Optimized Docker images using multi-stage builds and established automated image pipelines with semantic versioning and lifecycle policies for Amazon ECR.',
    highlights: [
      '30% image size reduction via multi-stage Docker builds',
      'Automated semantic versioning in GitHub Actions',
      'ECR lifecycle policies for cost control',
    ],
    tech: ['Docker', 'Amazon ECR', 'GitHub Actions', 'Docker Compose'],
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
