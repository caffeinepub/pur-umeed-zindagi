import Map "mo:core/Map";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Iter "mo:core/Iter";



actor {
  // Type for an inquiry submission
  type Inquiry = {
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  // Store inquiries submissions using a persistent map
  let inquiries = Map.empty<Int, Inquiry>();

  // Add new inquiry
  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, email : Text, message : Text) : async () {
    let inquiry : Inquiry = {
      name;
      phone;
      email;
      message;
      timestamp = Time.now();
    };
    inquiries.add(inquiry.timestamp, inquiry);
  };

  // Get all inquiries messages sorted by timestamp (most recent first)
  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.toArray().map(func((k, v)) { v });
  };

  // Organization mission purpose data
  public query ({ caller }) func getMissionText() : async Text {
    "Our mission is to provide accessible mental health resources, support, and education to promote community well-being and reduce stigma associated with mental health issues.";
  };

  // Get service list for display on front page
  public query ({ caller }) func getFrontPageServiceList() : async Text {
    "Consultations, Workshops, Support Groups, Counseling, Crisis Intervention, Community Outreach";
  };

  // Get full service list with descriptions
  public query ({ caller }) func getFullServiceList() : async [(Text, Text)] {
    [
      ("Consultations", "One-on-one sessions with mental health professionals."),
      ("Workshops", "Educational workshops on mental health topics."),
      ("Support Groups", "Peer-led groups for shared experiences and support."),
      ("Counseling", "Professional counseling for individuals and families."),
      ("Crisis Intervention", "Immediate support for those in crisis."),
      ("Community Outreach", "Programs to raise awareness and reduce stigma."),
      ("Resource Referrals", "Connecting individuals with additional resources."),
    ];
  };

  // Get information for volunteering
  public query ({ caller }) func getVolunteerInfo() : async Text {
    "We welcome volunteers to help with our outreach, support groups, and administrative tasks. If you're interested in volunteering, please contact us for more information.";
  };

  // Get information on donating
  public query ({ caller }) func getDonationInfo() : async Text {
    "Your donations help us continue providing mental health services to the community. We accept monetary donations as well as donated goods and services. Please reach out to learn more about how you can support our mission.";
  };

  // Get general resources
  public query ({ caller }) func getResources() : async [(Text, Text)] {
    [
      ("National Suicide Prevention Lifeline", "1-800-273-TALK (8255)"),
      ("Mental Health America", "https://www.mhanational.org/"),
      ("NAMI (National Alliance on Mental Illness)", "https://www.nami.org/"),
    ];
  };

  public query ({ caller }) func getOfficeDetails() : async Text {
    "We are open Monday through Friday, from 9:00 AM to 5:00 PM. Our office is located at 123 Main Street, Anytown, USA. Drop-ins are welcome, but appointments are recommended to ensure availability.";
  };
};
