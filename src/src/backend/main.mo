import Map "mo:core/Map";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Inquiry = {
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Int.compare(inquiry1.timestamp, inquiry2.timestamp);
    };
  };

  var nextInquiryId = 0;
  let inquiries = Map.empty<Int, Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, email : Text, message : Text) : async () {
    let inquiry : Inquiry = {
      name;
      phone;
      email;
      message;
      timestamp = Time.now();
    };

    inquiries.add(nextInquiryId, inquiry);
    nextInquiryId += 1;
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    if (inquiries.isEmpty()) { Runtime.trap("No inquiries received yet.") };
    inquiries.values().toArray();
  };
};
