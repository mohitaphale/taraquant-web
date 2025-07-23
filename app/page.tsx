import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Target,
  CheckCircle,
  Database,
  Activity,
  Lock,
  Users,
  Building,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TaraXWebsite() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">TARA-X</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              How It Works
            </Link>
            <Link href="#demo" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Demo
            </Link>
            <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link
              href="#get-started"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Get Started
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Explore Features
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              View on GitHub
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <Badge variant="outline" className="w-fit">
                    Cybersecurity Excellence
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    Secure Your Systems with <span className="text-blue-600">Confidence</span>
                  </h1>
                  <p className="max-w-[600px] text-xl text-gray-600 md:text-xl">
                    TARA-X empowers teams with structured threat modeling, attack path analysis, and actionable risk
                    insights for applications, embedded systems, and critical infrastructures.
                  </p>
                  <p className="max-w-[600px] text-gray-500">
                    Gain a holistic view of your security posture, identify vulnerabilities proactively, and streamline
                    compliance with an intuitive, data-driven platform.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    View on GitHub
                  </Button>
                  <Button variant="outline" size="lg">
                    Get Started
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/dashboard-overview.png"
                  alt="TARA-X Dashboard Overview"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-2xl border"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-20 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge variant="outline">Key Features</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                Comprehensive Security Assessment
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Advanced threat modeling and risk assessment capabilities designed for security professionals,
                developers, and system architects.
              </p>
            </div>
            <div className="mx-auto max-w-7xl space-y-16 py-12">
              {/* Feature 1 - Threat Modeling Framework */}
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Database className="h-8 w-8 text-blue-600" />
                    <h3 className="text-2xl font-bold">Threat Modeling Framework</h3>
                  </div>
                  <p className="text-lg text-gray-600">
                    Build robust threat models by clearly defining assets, identifying potential damages, and linking
                    them to specific threat scenarios. Our structured approach ensures comprehensive coverage of all
                    critical system components.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600">Asset identification and classification</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600">Damage scenario modeling</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600">Threat scenario mapping</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Assets Management</h4>
                      <Image
                        src="/images/assets.png"
                        alt="Assets Definition - Critical system assets including PII, configuration data, and cryptographic materials"
                        width={600}
                        height={300}
                        className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow cursor-pointer"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Damage Scenarios</h4>
                      <Image
                        src="/images/damage-scenarios.png"
                        alt="Damage Scenarios - Impact assessment across safety, financial, operational, and privacy dimensions"
                        width={600}
                        height={300}
                        className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow cursor-pointer"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Threat Scenarios</h4>
                      <Image
                        src="/images/threat-scenarios.png"
                        alt="Threat Scenarios - Comprehensive threat modeling with asset-damage-threat relationships"
                        width={600}
                        height={300}
                        className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 - Risk Matrix & Feasibility Scoring */}
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Risk Assessment Matrix</h4>
                    <Image
                      src="/images/risk-assessment.png"
                      alt="Risk Assessment Matrix - Color-coded risk levels across safety, financial, operational, and privacy dimensions"
                      width={800}
                      height={600}
                      className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow cursor-pointer"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Analytics Dashboard</h4>
                    <Image
                      src="/images/analytics-dashboard.png"
                      alt="Analytics Dashboard - Risk distribution charts, heat maps, and feasibility analysis"
                      width={600}
                      height={400}
                      className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow cursor-pointer"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-4">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-8 w-8 text-blue-600" />
                    <h3 className="text-2xl font-bold">Risk Matrix & Feasibility Scoring</h3>
                  </div>
                  <p className="text-lg text-gray-600">
                    Visualize and prioritize risks with an interactive risk matrix and detailed feasibility scoring
                    across multiple dimensions (Safety, Financial, Operational, Privacy). Our advanced analytics provide
                    clear insights into risk distribution and attack feasibility.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600">Multi-dimensional risk assessment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600">Interactive risk heat maps</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600">Attack feasibility distribution</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3 - Attack Path Visualization */}
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Target className="h-8 w-8 text-blue-600" />
                    <h3 className="text-2xl font-bold">Attack Path Visualization</h3>
                  </div>
                  <p className="text-lg text-gray-600">
                    Map out potential attack paths, understand the steps an attacker might take, and assess their
                    expertise and elapsed time for each path. Visualize the complete attack chain from initial access to
                    final impact.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600">Complete attack chain mapping</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600">Expertise level assessment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600">Time-to-compromise analysis</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Attack Paths Analysis</h4>
                  <Image
                    src="/images/attack-paths.png"
                    alt="Attack Paths Analysis - Detailed attack scenarios with elapsed time and expertise requirements"
                    width={600}
                    height={400}
                    className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow cursor-pointer"
                  />
                </div>
              </div>

              {/* Feature 4 - Automated Security Requirements */}
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Risk Mitigation</h4>
                    <Image
                      src="/images/risk-mitigation.png"
                      alt="Risk Mitigation - Security goals, requirements, and implementation details"
                      width={600}
                      height={400}
                      className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow cursor-pointer"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Cybersecurity Controls</h4>
                    <Image
                      src="/images/cybersecurity-control.png"
                      alt="Cybersecurity Controls - Detailed security requirements and control descriptions"
                      width={600}
                      height={400}
                      className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow cursor-pointer"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                    <h3 className="text-2xl font-bold">Automated Security Requirements</h3>
                  </div>
                  <p className="text-lg text-gray-600">
                    Automatically generate specific security requirements based on identified risks, ensuring
                    comprehensive coverage and mitigation. Transform risk assessments into actionable security controls
                    and implementation guidelines.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600">Automated requirement generation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600">Security control mapping</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600">Implementation guidance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance Feature */}
            <Card className="mx-auto max-w-4xl">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Lock className="h-6 w-6 text-blue-600" />
                  <CardTitle>Compliance Mapping</CardTitle>
                </div>
                <CardDescription>
                  Streamline compliance efforts by mapping generated security requirements to industry standards and
                  regulations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge variant="secondary">ISO 21434</Badge>
                  <Badge variant="secondary">UNECE R155</Badge>
                  <Badge variant="secondary">NIST Framework</Badge>
                  <Badge variant="secondary">OWASP Standards</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-20 lg:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge variant="outline">Process</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">How TARA-X Works</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A continuous, iterative 3-step process for comprehensive security assessment that adapts throughout the
                entire product lifecycle
              </p>
              <div className="bg-blue-50 p-4 rounded-lg max-w-4xl">
                <p className="text-sm text-blue-800 font-medium">
                  <strong>Continuous Security:</strong> Use TARA-X to perform incremental assessment - whether you're in
                  development, production, or discovering new vulnerabilities, the process seamlessly cycles back to
                  ensure ongoing protection.
                </p>
              </div>
            </div>

            {/* Cyclic Process Visualization */}
            <div className="mx-auto max-w-6xl py-12">
              {/* Desktop Cyclic Layout */}
              <div className="hidden lg:block relative">
                {/* Main Process Steps */}
                <div className="grid grid-cols-3 gap-16 items-start mb-16">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                      <Database className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold">1. Define Assets & Damages</h3>
                    <p className="text-gray-600 text-sm">
                      Identify critical assets and potential damage scenarios. Update as new assets are added or threats
                      evolve.
                    </p>
                    <div className="bg-white p-3 rounded-lg shadow-sm border">
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Asset identification</li>
                        <li>• Damage scenario modeling</li>
                        <li>• Impact assessment</li>
                      </ul>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                      <Target className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold">2. Model Threats & Attack Paths</h3>
                    <p className="text-gray-600 text-sm">
                      Map attack vectors and threat scenarios. Continuously updated as new vulnerabilities are
                      discovered.
                    </p>
                    <div className="bg-white p-3 rounded-lg shadow-sm border">
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Threat scenario creation</li>
                        <li>• Attack path visualization</li>
                        <li>• Feasibility analysis</li>
                      </ul>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold">3. Assess Risk & Generate Requirements</h3>
                    <p className="text-gray-600 text-sm">
                      Evaluate risks and create security controls. Triggers reassessment when new risks are identified.
                    </p>
                    <div className="bg-white p-3 rounded-lg shadow-sm border">
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Risk matrix evaluation</li>
                        <li>• Security requirement generation</li>
                        <li>• Mitigation strategies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Forward Flow Arrows */}
                <div className="absolute top-10 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="flex items-center">
                    <div className="w-20 h-1 bg-blue-500"></div>
                    <div className="w-0 h-0 border-l-[12px] border-l-blue-500 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
                  </div>
                  <div className="text-center mt-1">
                    <span className="text-xs text-blue-600 font-medium">Forward</span>
                  </div>
                </div>

                <div className="absolute top-10 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="flex items-center">
                    <div className="w-20 h-1 bg-blue-500"></div>
                    <div className="w-0 h-0 border-l-[12px] border-l-blue-500 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
                  </div>
                  <div className="text-center mt-1">
                    <span className="text-xs text-blue-600 font-medium">Forward</span>
                  </div>
                </div>

                {/* Feedback Loop Arrow */}
                <div className="flex items-center justify-center mt-8">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 w-full max-w-4xl">
                    <div className="flex items-center justify-center mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-0 h-0 border-r-[12px] border-r-orange-500 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
                        <div className="flex-1 h-1 bg-orange-500 min-w-[200px]"></div>
                        <span className="text-sm font-semibold text-orange-700 px-4">Continuous Feedback Loop</span>
                        <div className="flex-1 h-1 bg-orange-500 min-w-[200px]"></div>
                        <div className="w-0 h-0 border-l-[12px] border-l-orange-500 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
                      </div>
                    </div>
                    <p className="text-xs text-orange-600 text-center">
                      New vulnerabilities, bugs, or system changes trigger reassessment cycles
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Vertical Layout */}
              <div className="lg:hidden space-y-8">
                {/* Step 1 */}
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                    <Database className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">1. Define Assets & Damages</h3>
                  <p className="text-gray-600">
                    Identify critical assets and potential damage scenarios. Update as new assets are added or threats
                    evolve.
                  </p>
                </div>

                {/* Down Arrow */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-blue-400"></div>
                  <div className="w-0 h-0 border-t-8 border-t-blue-400 border-l-4 border-l-transparent border-r-4 border-r-transparent"></div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">2. Model Threats & Attack Paths</h3>
                  <p className="text-gray-600">
                    Map attack vectors and threat scenarios. Continuously updated as new vulnerabilities are discovered.
                  </p>
                </div>

                {/* Down Arrow */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-blue-400"></div>
                  <div className="w-0 h-0 border-t-8 border-t-blue-400 border-l-4 border-l-transparent border-r-4 border-r-transparent"></div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">3. Assess Risk & Generate Requirements</h3>
                  <p className="text-gray-600">
                    Evaluate risks and create security controls. Triggers reassessment when new risks are identified.
                  </p>
                </div>

                {/* Feedback Arrow */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-0 h-0 border-r-6 border-r-orange-500 border-t-3 border-t-transparent border-b-3 border-b-transparent"></div>
                      <span className="text-sm text-orange-600 font-medium">Continuous Feedback</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 text-center">Process cycles back for ongoing assessment</p>
                  </div>
                </div>
              </div>

              {/* Use Cases for Cyclic Process */}
              <div className="mt-16 grid gap-6 md:grid-cols-3">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Development Phase</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Initial TARA assessment during design and development. Iterative refinement as features are added
                      and architecture evolves.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Production Monitoring</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Continuous assessment in live environments. New vulnerabilities or operational changes trigger
                      reassessment cycles.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Incident Response</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Post-incident analysis and reassessment. Discovered vulnerabilities feed back into the cycle for
                      comprehensive remediation.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Key Benefits of Cyclic Approach */}
              <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Why Continuous TARA Matters</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Activity className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-sm">Adaptive Security</h4>
                    <p className="text-xs text-gray-600 mt-1">Evolves with changing threat landscape</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-sm">Proactive Defense</h4>
                    <p className="text-xs text-gray-600 mt-1">Identifies risks before exploitation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-sm">Incremental Improvement</h4>
                    <p className="text-xs text-gray-600 mt-1">Continuous security enhancement</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="h-6 w-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-sm">Lifecycle Coverage</h4>
                    <p className="text-xs text-gray-600 mt-1">From development to production</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Preview Section */}
        <section id="demo" className="w-full py-12 md:py-20 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge variant="outline">Interface Preview</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">See TARA-X in Action</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore the intuitive interface designed for comprehensive security assessment. Click on any image to
                view details.
              </p>
            </div>
            <div className="mx-auto max-w-7xl py-12">
              {/* Main Dashboard Showcase */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-center mb-6">Dashboard Overview</h3>
                <div className="relative">
                  <Image
                    src="/images/dashboard-overview.png"
                    alt="TARA-X Dashboard Overview - Complete project metrics including assets, risk assessments, attack paths, and security requirements"
                    width={1200}
                    height={700}
                    className="rounded-lg shadow-2xl border w-full hover:shadow-3xl transition-shadow cursor-pointer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg pointer-events-none" />
                </div>
                <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
                  The main dashboard provides a comprehensive overview of your security assessment progress, including
                  key metrics, risk distribution, completion status, and high-risk items requiring immediate attention.
                </p>
              </div>

              {/* Detailed Interface Gallery */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <Image
                      src="/images/risk-assessment.png"
                      alt="Risk Assessment Matrix - Comprehensive risk evaluation with color-coded severity levels"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">Risk Assessment Matrix</CardTitle>
                    <CardDescription>
                      Interactive risk matrix showing threat scenarios, damage assessments, and multi-dimensional risk
                      scoring across safety, financial, operational, and privacy domains.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <Image
                      src="/images/analytics-dashboard.png"
                      alt="Analytics Dashboard - Risk distribution charts and heat maps for comprehensive analysis"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">Analytics & Visualization</CardTitle>
                    <CardDescription>
                      Advanced analytics including risk level distribution, residual risk analysis, attack feasibility
                      charts, and interactive heat maps for data-driven decision making.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <Image
                      src="/images/attack-paths.png"
                      alt="Attack Paths Analysis - Detailed attack scenarios with time and expertise requirements"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">Attack Path Modeling</CardTitle>
                    <CardDescription>
                      Comprehensive attack path visualization showing threat scenarios, attack vectors, elapsed time
                      estimates, and required expertise levels for each potential attack.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <Image
                      src="/images/assets.png"
                      alt="Assets Management - Critical system assets including PII, configuration data, and more"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">Asset Management</CardTitle>
                    <CardDescription>
                      Systematic asset identification and classification including PII data, configuration settings,
                      cryptographic materials, and other critical system components.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <Image
                      src="/images/cybersecurity-control.png"
                      alt="Cybersecurity Controls - Security requirements and detailed control descriptions"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">Security Controls</CardTitle>
                    <CardDescription>
                      Automated generation of security requirements and controls with detailed implementation guidance,
                      risk mapping, and compliance alignment.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <Image
                      src="/images/damage-scenarios.png"
                      alt="Damage Scenarios - Impact assessment across multiple dimensions"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">Damage Assessment</CardTitle>
                    <CardDescription>
                      Comprehensive damage scenario modeling with impact assessment across safety, financial,
                      operational, and privacy dimensions for thorough risk evaluation.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-12">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Try TARA-X Now
                </Button>
                <p className="text-gray-600 mt-2">See how TARA-X can transform your security assessment process</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="w-full py-12 md:py-20 lg:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge variant="outline">Use Cases</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                Trusted by Industry Leaders
              </h2>
            </div>
            <div className="mx-auto grid max-w-6xl items-start gap-8 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Building className="h-6 w-6 text-blue-600" />
                    <CardTitle>Automotive OEMs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Meet ISO 21434 and UNECE R155 compliance requirements with structured threat assessment and risk
                    management for connected vehicles.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Users className="h-6 w-6 text-blue-600" />
                    <CardTitle>Software Developers</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Integrate security early in the SDLC with automated threat modeling and security requirement
                    generation for robust applications.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-blue-600" />
                    <CardTitle>Critical Infrastructure</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Enhance resilience of critical systems with comprehensive risk assessment and attack path analysis
                    for operational technology.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-20 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <Badge variant="outline">About TARA-X</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                Empowering Proactive Cybersecurity
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                TARA-X was developed to address the growing complexity of cybersecurity in modern systems. Our mission
                is to provide security professionals, developers, and system architects with an intuitive, powerful, and
                data-driven platform to perform comprehensive threat assessment and risk analysis.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in shifting security left, enabling early identification and mitigation of vulnerabilities,
                ultimately building more resilient and trustworthy systems. With TARA-X, organizations can proactively
                secure their digital assets and maintain compliance with industry standards.
              </p>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section id="get-started" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-8">
              <div className="text-center space-y-4">
                <Badge variant="outline">Open Source</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                  Get Started with TARA-X
                </h2>
                <p className="text-gray-600 text-lg">
                  TARA-X is open source and free to use. Get started today by exploring our GitHub repository,
                  contributing to the project, or deploying your own instance.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Github className="h-6 w-6 text-gray-900" />
                      <CardTitle>GitHub Repository</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      Access the complete source code, documentation, and contribute to the development of TARA-X.
                    </p>
                    <div className="space-y-2">
                      <Button className="w-full bg-gray-900 hover:bg-gray-800" asChild>
                        <Link href="https://github.com/tara-x/tara-x" target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View on GitHub
                        </Link>
                      </Button>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                          <Link
                            href="https://github.com/tara-x/tara-x/issues"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Issues
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                          <Link
                            href="https://github.com/tara-x/tara-x/discussions"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Discussions
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="h-6 w-6 text-blue-600" />
                      <span>Quick Start</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      Get TARA-X running locally in minutes with our simple installation guide.
                    </p>
                    <div className="bg-gray-100 p-3 rounded-md font-mono text-sm">
                      <div className="space-y-1">
                        <div>git clone https://github.com/tara-x/tara-x</div>
                        <div>cd tara-x</div>
                        <div>npm install</div>
                        <div>npm start</div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link
                        href="https://github.com/tara-x/tara-x#installation"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Installation Guide
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">📚 Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      Comprehensive guides, API references, and tutorials to help you get the most out of TARA-X.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://github.com/tara-x/tara-x/wiki" target="_blank" rel="noopener noreferrer">
                        Read Docs
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">🤝 Contributing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      Help improve TARA-X by contributing code, reporting bugs, or suggesting new features.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href="https://github.com/tara-x/tara-x/blob/main/CONTRIBUTING.md"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Contribute
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">💬 Community</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">
                      Join our community discussions, ask questions, and share your TARA-X implementations.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href="https://github.com/tara-x/tara-x/discussions"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Join Community
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">Ready to Secure Your Systems?</h3>
                <p className="text-gray-600 mb-4">
                  Start your threat assessment and risk analysis journey with TARA-X today.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="https://github.com/tara-x/tara-x" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Get Started on GitHub
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="https://github.com/tara-x/tara-x/releases" target="_blank" rel="noopener noreferrer">
                      Download Latest Release
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-gray-900 text-white">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">TARA-X</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering organizations with comprehensive threat assessment and risk analysis capabilities.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#demo" className="hover:text-white transition-colors">
                    Demo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#get-started" className="hover:text-white transition-colors">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Connect</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} TARA-X. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
