interface Feature {
  icon: string;
  title: string;
  description: string;
  testId: string;
}

interface FeatureCardsProps {
  features: Feature[];
}

export default function FeatureCards({ features }: FeatureCardsProps) {
  const rows = [];
  for (let i = 0; i < features.length; i += 3) {
    rows.push(features.slice(i, i + 3));
  }

  return (
    <div className="space-y-8">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="grid md:grid-cols-3 gap-8">
          {row.map((feature) => (
            <div 
              key={feature.testId}
              className="feature-card bg-white p-8 rounded-2xl shadow-lg"
              data-testid={feature.testId}
            >
              <div className="w-16 h-16 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
